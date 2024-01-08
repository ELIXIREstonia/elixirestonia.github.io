# Publications Markdown Rendering

This directory contains scripts for rendering the
`/content/publications/index.md` page from `source.yaml` and `prologue.md`.

## Usage Guide

1. Edit `source.yaml` for updating articles; add new articles to the beginning.
2. Edit `prologue.md` if you want to change something that appears before the
   list if publications.
3. In the current directory, execute `python render/publications.py`.
4. Commit changes (both source and destination files) to git.

Note that **mkdocs** just renders the output file
(`/content/publications/index.md`) and not from the source file (`source.yaml`).
Technically it's possible to develop such **mkdocs plugin** but so far it has
not been developed. There is a plugin called **mkdocs-bibtex** but it's only
good for referring to articles in `*.bib` files in your pages and rendering the
list of cited resources. It does not render the contents `*.bib` files for
generating a list as it is achieved here.

## Customisations

To follow the conventions used in the previous ELIXIR Estonia website, the
script in the `./render/` directory contains `custom.py`, which tweaks the
default `pybtex` implementation for the `unsrt` style. The `publications.py`
file just uses the customised classes and executes the flow: data from
`source.yaml` and Markdown text from `prologue.md` to
`/content/publications/index.md`.

## Formatting Authors

Since converting author names to the YAML format can be tedious, the script
`render/authors.py` can do the conversion:

1. Copy the names of authors from a webpage and paste the line to file
   `./authors.txt` (replace all existing text).
2. Manually remove any garbage information from the names (e.g. numbers, URLs)
   and save the changes.
3. In the current directory, execute `python render/authors.py`.
4. View the YAML representation in file `./authors.txt`: you can copy that to
   the `source.yaml` file.

Note that this script shortens first and middle names to keep old conventions.
