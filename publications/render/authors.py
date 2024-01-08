import os
import re
import sys
import yaml


def read_authors() -> list[dict]:
    authors = []
    with open("authors.txt", "r") as file:
        for line in file:
            authors.extend(parse_authors(line.strip()))
    return authors


def parse_authors(line: str):
    results = []
    for str_author in line.split(", "):
        if "&" in str_author:
            for str_author2 in str_author.split(" & "):
                results.append(parse_author(str_author2))
        elif ", and " in str_author:
            for str_author2 in str_author.split(", and "):
                results.append(parse_author(str_author2))
        else:
            results.append(parse_author(str_author))
    return results


def parse_author(text: str):
    names = re.split("\s+", text.strip())
    last = names[-1]
    first = short_name(names[0])

    if len(names) == 2:
        return {
            "first": first,
            "last": last,
        }

    if names[-2].islower():
        last = names[-2] + " " + last
        names = names[:-1]

    middle = ""
    for i in range(1, len(names) - 1):
        middle += short_name(names[i]) + " "

    return {
        "first": first,
        "middle": middle.rstrip(),
        "last": last,
    }


def short_name(name: str):
    if '-' in name:
        return "-".join(map(lambda n: short_name(n), name.split('-')))

    name = name.strip()
    if name:
        return name[0] + "."
    return ""


authors = {"authors": read_authors()}

with open("authors.yaml", "w") as file:
    yaml.dump(authors, file, sort_keys=False, allow_unicode=True)
