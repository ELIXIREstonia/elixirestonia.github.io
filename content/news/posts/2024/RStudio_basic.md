---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: RStudio Basic - 02.10.2024
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-09-04
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - R
  - RStudio

# Fill in the course details:
course:
  name: RStudio Basic

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 5

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):


    # Specify audience in plain-text in the language of the template:
    audience: Beginner level

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Priit Adler, Marilin Moor

    # Specify "Key Topics" as a YAML list:
    topics:


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
    - R studio

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

  # Specify occurrences here:
  instances:
    - start: 2024-10-02T12:00:00
      end: 2024-10-02T17:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Priit Adler
        - Marilin Moor
      onsite:
        building: DELTA
        room: 2021

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

RStudio is an essential tool for anyone involved in R programming. It plays a vital role in data analysis by facilitating data import, access, transformation, exploration, visualization, and modeling tasks. If you're embarking on your journey to learn R, now is the perfect moment to familiarize yourself with RStudio. Discover what RStudio is, how to install it, and begin harnessing its capabilities to enhance your data analysis and programming skills.

It would be beneficial to participate in [OpenRefine course](https://elixir.ut.ee/news/2024/08/22/OpenRefine_data_cleaning/), so your data would be clean before you start analysing it.

<!-- more -->
Suggested preparatory courses:

* [How to make your messy data usable? / OpenRefine](https://elixir.ut.ee/news/2024/08/22/OpenRefine_data_cleaning/)


This workshop will be followed up by:

* Data visualisation theory
* Visualisation with RStudio