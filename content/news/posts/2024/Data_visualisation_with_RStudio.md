---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Data Visualisation with RStudio - 09.10.2024
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-09-09
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - Data visualisation
  - charts
  - RStudio
  - ggplot2

# Fill in the course details:
course:
  name: Data Visualisation with RStudio

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 4

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):

    # Specify audience in plain-text in the language of the template:
    audience: Beginner level

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Priit Adler, Marilin Moor

    # Specify "Key Topics" as a YAML list:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Able to create clear data visualizations in RStudio and customize them
      - Discovers patterns, relationships, and deviations in datasets

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Data Visualization
    - Data visualization
    - data visualization
    - Data visualisation
    - data visualisation
    - RStudio
    - R
    - ggplot2

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
        0092: Data visualisation

  # Specify occurrences here:
  instances:
    - start: 2024-10-09T12:00:00
      end: 2024-10-09T16:00:00
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

In this course, participants will learn to utilize the ggplot2 package, a widely-used tool in R for creating visually appealing and highly customizable graphs.

<!-- more -->

Suggested preparatory courses:

* [Data visualisation (theory)](https://elixir.ut.ee/news/2024/09/04/Data_visualisation_theory_oct/)
* [RStudio Basic](https://elixir.ut.ee/news/2024/09/04/RStudio_basic/)