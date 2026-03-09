#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from dataclasses import dataclass
from datetime import date, datetime, time, timedelta
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[2]
TILE_RE = re.compile(r"[ \t]*<text-tile\b.*?</text-tile>[ \t]*(?:\r?\n)?", re.DOTALL)
ATTR_RE = re.compile(r'([a-zA-Z_:][\w:.-]*)\s*=\s*"([^"]*)"')
TILE_GRID_OPEN_RE = re.compile(r'<div\s+class="tile-grid">')
DIV_TAG_RE = re.compile(r"</?div\b[^>]*>")
COMMENT_RE = re.compile(r"<!--.*?-->", re.DOTALL)


@dataclass
class RemovedTile:
    file_path: Path
    title: str


def parse_date(value: str) -> date | None:
    try:
        return datetime.strptime(value, "%Y-%m-%d").date()
    except ValueError:
        return None


def parse_datetime(value: str) -> datetime | None:
    for fmt in ("%Y-%m-%dT%H:%M", "%Y-%m-%dT%H:%M:%S"):
        try:
            return datetime.strptime(value, fmt)
        except ValueError:
            continue
    return None


def add_months(value: date, months: int) -> date:
    month_index = value.month - 1 + months
    year = value.year + month_index // 12
    month = month_index % 12 + 1

    if month == 12:
        next_month = date(year + 1, 1, 1)
    else:
        next_month = date(year, month + 1, 1)

    last_day = (next_month - timedelta(days=1)).day
    return date(year, month, min(value.day, last_day))


def extract_attrs(tile_block: str) -> dict[str, str]:
    return {match.group(1): match.group(2) for match in ATTR_RE.finditer(tile_block)}


def is_expired(attrs: dict[str, str], now: datetime) -> bool:
    deadline_date = attrs.get("data-deadline-date")
    if deadline_date:
        parsed = parse_date(deadline_date)
        if parsed is not None:
            return parsed < now.date()

    webinar_date = attrs.get("data-webinar-date")
    offset_hours = attrs.get("data-deadline-offset-hours")
    if webinar_date and offset_hours:
        parsed_webinar = parse_datetime(webinar_date)
        try:
            parsed_offset = int(offset_hours)
        except ValueError:
            parsed_offset = None

        if parsed_webinar is not None and parsed_offset is not None:
            return now > parsed_webinar - timedelta(hours=parsed_offset)

    added_date = attrs.get("data-added-date")
    if added_date:
        parsed_added = parse_date(added_date)
        if parsed_added is not None:
            expiry_point = datetime.combine(add_months(parsed_added, 6), time.min)
            return now > expiry_point

    return False


def strip_expired_tiles(text: str, file_path: Path, now: datetime) -> tuple[str, list[RemovedTile]]:
    removed_tiles: list[RemovedTile] = []
    cursor = 0
    parts: list[str] = []

    for match in TILE_RE.finditer(text):
        parts.append(text[cursor:match.start()])
        block = match.group(0)
        attrs = extract_attrs(block)

        if is_expired(attrs, now):
            removed_tiles.append(
                RemovedTile(file_path=file_path, title=attrs.get("title", "<untitled tile>"))
            )
        else:
            parts.append(block)

        cursor = match.end()

    parts.append(text[cursor:])
    return "".join(parts), removed_tiles


def find_matching_div_end(text: str, start_index: int) -> int | None:
    depth = 0
    for match in DIV_TAG_RE.finditer(text, start_index):
        token = match.group(0)
        if token.startswith("</div"):
            depth -= 1
            if depth == 0:
                return match.end()
        else:
            depth += 1
    return None


def remove_empty_tile_grids(text: str) -> str:
    while True:
        changed = False
        cursor = 0
        parts: list[str] = []

        while True:
            match = TILE_GRID_OPEN_RE.search(text, cursor)
            if match is None:
                parts.append(text[cursor:])
                break

            parts.append(text[cursor:match.start()])
            block_end = find_matching_div_end(text, match.start())
            if block_end is None:
                parts.append(text[match.start():])
                cursor = len(text)
                break

            block = text[match.start():block_end]
            inner = block[match.end() - match.start():]
            inner = inner[: inner.rfind("</div>")]
            cleaned_inner = COMMENT_RE.sub("", inner).strip()

            if cleaned_inner:
                parts.append(block)
            else:
                changed = True
                trailing_newlines = ""
                while block_end + len(trailing_newlines) < len(text) and text[
                    block_end + len(trailing_newlines)
                ] in "\r\n":
                    trailing_newlines += text[block_end + len(trailing_newlines)]

                block_end += len(trailing_newlines)

            cursor = block_end

        text = "".join(parts)
        if not changed:
            return text


def process_file(file_path: Path, now: datetime) -> list[RemovedTile]:
    original = file_path.read_text(encoding="utf-8")
    without_tiles, removed_tiles = strip_expired_tiles(original, file_path, now)
    updated = remove_empty_tile_grids(without_tiles)

    if updated != original:
        file_path.write_text(updated, encoding="utf-8")

    return removed_tiles


def find_markdown_files() -> list[Path]:
    return sorted(
        path
        for path in REPO_ROOT.rglob("*.md")
        if "<text-tile" in path.read_text(encoding="utf-8")
    )


def main() -> int:
    now = datetime.now()
    markdown_files = find_markdown_files()
    removed_tiles: list[RemovedTile] = []

    for file_path in markdown_files:
        removed_tiles.extend(process_file(file_path, now))

    if removed_tiles:
        print(f"Removed {len(removed_tiles)} expired tile(s):")
        for tile in removed_tiles:
            relative_path = tile.file_path.relative_to(REPO_ROOT)
            print(f"- {tile.title} ({relative_path})")
    else:
        print("No expired tiles found.")

    return 0


if __name__ == "__main__":
    sys.exit(main())
