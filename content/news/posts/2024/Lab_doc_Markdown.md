---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Laboratory documentation with Markdown - 30.10.2024
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-10-01
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - Markdown
  - DM courses
  - Jupyter Notebook

# Fill in the course details:
course:
  name: Laboratory documentation with Markdown

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Researchers, Students

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Heleri Inno

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Understand and utilise Markdown's basic (text, lists) and advanced (images, tables, codes, mathematical expressions) syntax
      - Create a functional digital laboratory notebook that can be adapted for various research projects
      - Recognise other use cases for Markdown in the scientific workflow (e.g., GitHub, R Markdown, Colab)


  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Markdown
    - Documentation
    - Jupyter Notebook

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        0607: Laboratory information management

  # Specify occurrences here:
  instances:
    - start: 2024-10-30T13:00:00+03:00
      end: 2024-10-30T16:00:00+03:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Heleri Inno
      #onsite:
        #building: DELTA
        #room: 2021
      # or TLU (Narva mnt 25):
      # onsite:
      #   building: TLU
      #   room: A-123

      # or custom:
      # onsite:
      #   alternateName: Hotel ABC
      #   room: Lounge
      #   streetAddress: 123 Main Street
      #   addressLocality: City
      #   addressRegion: County
      #   addressCountry: Country
      #   postalCode: 12345
      #   latitude:
      #   longitude:

      online:
      online: Zoom, link will be given a few days before the course.

# Finally, the course description in Markdown/HTML below (as many paragraphs as needed).
# Description will be rendered on web-page and also in TeSS JSON (as a string of HTML).
---
This course introduces the basics of Markdown, a lightweight markup language used to format plain text in documents. Markdown plays a crucial role in scientific research by enabling the efficient writing of reports, code documentation, and creating well-organised research notebooks. Students will learn essential Markdown syntax throughout the course, including formatting text, adding links, images, tables, math equations, and code blocks. By integrating Markdown with Jupyter Notebook, participants can build dynamic laboratory notebooks that streamline the documentation, analysis, and sharing of research findings. 