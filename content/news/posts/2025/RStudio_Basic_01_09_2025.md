---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: RStudio for beginners - 01.09.2025 - Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2025-08-11
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - R
  - RStudio

# Fill in the course details:
course:
  name: RStudio for beginners

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 7

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/mCvpyUzu4ihDXN3r9

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: researchers, PIs, PhD students

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Nurlan Kerimov. Pille Pärnalaas

    # Specify "Key Topics" as a YAML list:
    topics:
    - Basic R Data Structures
    - Data Transformation with Tidyverse
    - Data Categorization and Conditional Operations
    - Application of Data Manipulation Techniques
    - Using AI to write R code
    - RStudio on ondemand.hpc

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Navigate RStudio features
      - Write and execute R scripts
      - Manage projects efficiently within the IDE
      - Import, clean, and manipulate data

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - R
    - R language
    - R Studio

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner
    - Students

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        0091: Bioinformatics

  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    #- title:
    #  url:

  # Specify occurrences here:
  instances:
    - start: 2025-09-01T09:00:00
      end: 2025-09-01T16:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Nurlan Kerimov
      onsite:
        building: DELTA
        room: 2006

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

      # or online:
      # online: Zoom, link will be given a few days before the course.

# Finally, the course description in Markdown/HTML below (as many paragraphs as needed).
# Description will be rendered on web-page and also in TeSS JSON (as a string of HTML).
---

R is a free software environment for statistical computing and graphics. It compiles and runs on various UNIX platforms, Windows and MacOS.

RStudio is an essential tool for anyone involved in R programming. It plays a vital role in data analysis by facilitating data import, access, transformation, exploration, visualization, and modeling tasks. If you’re embarking on your journey to learn R, now is the perfect moment to familiarize yourself with RStudio. Discover what RStudio is, how to install it, and begin harnessing its capabilities to enhance your data analysis and programming skills.