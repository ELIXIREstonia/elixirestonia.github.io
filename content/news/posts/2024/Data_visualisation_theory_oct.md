---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Data visualisation (theory) - 03.10.2024 - Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-09-04
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - Data visualisation
  - charts

# Fill in the course details:
course:
  name: Data visualisation (theory)

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/MgdXs2TbvUoC8VpF6

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):

    # Specify audience in plain-text in the language of the template:
    audience: 

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Choose appropriate chart types
      - Avoid common mistakes in data visualisation
      - Maximise data-ink ratio

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Data visualisation 
    - Data Visualization 
    - data visualisation
    - Data visualization

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Students

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        0092: Data visualisation

  # Specify occurrences here:
  instances:
    - start: 2024-10-03T09:30:00+03:00
      end: 2024-10-03T12:30:00+03:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      online: Zoom, link will be given a few days before the course.
      instructors:
        - Diana Pilvar  
    

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

# Finally, the course description in Markdown/HTML below (as many paragraphs as needed).
# Description will be rendered on web-page and also in TeSS JSON (as a string of HTML).
---

Researchers often face overwhelming raw data, making it crucial to utilize data visualization effectively. This skill transforms complex datasets into clear, insightful narratives, avoiding the pitfalls of misinterpretation through poor design. In this course, we'll explore optimal chart types for different data, engage in interactive exercises, discuss best practices, and learn about the data-ink ratio and color selection, all illustrated with practical examples.

<!-- more -->

This workshop will be followed up by:

* [Visualisation with RStudio](https://elixir.ut.ee/news/2024/09/09/Data_visualisation_with_RStudio/)
* [Data visualisation with Tableau](https://elixir.ut.ee/news/2024/09/09/Tableau_oct/)