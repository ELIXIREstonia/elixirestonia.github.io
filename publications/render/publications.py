from custom import MarkdownBackend, CustomStyle, YearMonthSortingStyle
from pybtex.database import parse_file


src_file = "source.yaml"
dest_file = "../content/publications/index.md"
encoding = "UTF-8"


print(f"Parsing file [{src_file}]")
bib_data = parse_file(src_file, encoding=encoding)

style = CustomStyle(
    label_style="number",
    name_style="lastfirst",
    sorting_style=YearMonthSortingStyle,
    abbreviate_names=False,
    min_crossrefs=2,
)

print(f"Formatting bibliography")
formatted_bibliography = style.format_bibliography(bib_data)

print(f"Writing output to file [{dest_file}]")
MarkdownBackend(encoding).write_to_file(formatted_bibliography, dest_file)
