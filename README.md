# ELIXIR-Estonia Website


[![Built with Material for MkDocs](https://img.shields.io/badge/Material_for_MkDocs-526CFE?style=for-the-badge&logo=MaterialForMkDocs&logoColor=white)](https://squidfunk.github.io/mkdocs-material/)

This project is the source code for the website of https://elixir.ut.ee/.
Changes to the `main` branch will be automatically deployed (after some delay,
mostly during local working hours) to the hosting server.


## Getting Started

This website is generated with [MkDocs](https://www.mkdocs.org/), with the
theme [Material](https://squidfunk.github.io/mkdocs-material/). So you need to
have **Python 3** installed on your operating system to build and generate the
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

The website content is mostly located under `/content/` divided into folders by
menu item name. The menu items are defined in `mkdocs.yml` (under `nav`).

Typically, for content editing, you'll want to run `mkdocs` in the background so
it would automatically compile and update web pages when you save content.

```bash
mkdocs serve
```

View the content in the browser at http://localhost:8000/.

Static content is generated using command `mkdocs build`, and stored under
`/site/`.


## More How-To's

### Q: How to define links

**A:** Following Markdown syntax, links are typically written as
`[link text](https://link.address/)`. If you don't want to provide custom link
text then providing just the full URL (`https://link.address`) would also
render as a link (where the address also becomes the visible text).

If you want to link another page within the website in your Markdown content,
use the path of the targeted file relative to the `/content/` directory (e.g.
`[introduction](data_management/introduction.md)`). MkDocs will take care of
rendering the correct link for the targeted resource.

### Q: How to add trainings

**A:** We recommend using template [training-template.md](training-template.md)
when adding a new training: this also renders JSON-LD metadata in the HTML (so
that [TeSS](https://tess.elixir-europe.org/events?node=Estonia) could use it).
The steps are following:

1. Copy [training-template.md](training-template.md) to
   [content/news/posts/](content/news/posts/)`<year>/` with a custom
   training-specific filename (it affects the _slug_ of the post-path).
2. Update the YAML section with training-specific values.
3. Specify training description in the Markdown section (after the
   front-matter).
4. Test how the news article is rendered (`mkdocs serve` and open the browser).
5. View the page source to find `<script type="application/ld+json">` after the
   `<article>` section.

### Q: How to update the page about people

**A:** Metadata about people and their order is stored in
[content/assets/members.yaml](content/assets/members.yaml). That file also
defines the location of person's image file, which should be stored under
[content/assets/images/people/](content/assets/images/people/).

### Q: How to update the page about publications

**A:** There is a separate Python script for generating the publications page
[content/publications/index.md](content/publications/index.md) from
[publications/source.yaml](publications/source.yaml). More information about
how to update publications is described in the
[publications/README.md](publications/README.md).
