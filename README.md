# ELIXIR-Estonia Website

This project is the source code for the website of https://elixir.ut.ee/.
Every commit to the `main` branch runs a GitHub pipeline, which will publish the
updates to https://elixirestonia.github.io/, while the main domain-name acts as
a proxy that will fetch the content from GitHub domain.


## Getting Started

This website is generated with [MkDocs](https://www.mkdocs.org/), with the theme [Material](https://squidfunk.github.io/mkdocs-material/). So you need to have
**Python 3** installed on your operating system to build and generate the
website.

Once Python 3 is installed, here is how you can install dependencies:

```bash
# In the root folder of the project.

# 1. Create a virtual environment for Python:
python3 -m venv venv

# 2. Activate the virtual environment:
source venv/bin/activate

# 3. Install dependencies for the environment:
pip install -r requirements.txt
```

Once the `./venv/` directory exists, you can always activate the Python
environment again using the `source venv/bin/activate` command (without
reinstalling dependencies).

Typically, for content editing, you'll want to run `mkdocs` in the background so
it would automatically compile and update web pages when you save content.

```bash
mkdocs serve
```

View the content in the browser at http://localhost:8000/.

Static content is generated using command: `mkdocs build`.

The website content is mostly located under `/content/` divided into folders by
menu item name. The menu items are defined in `mkdocs.yml` (under `nav`).


## More Guidelines

There is a separate script for generating the publications page from
[publications/source.yaml](publications/source.yaml). More information about
how to update publications is described in the [README](publications/README.md).
