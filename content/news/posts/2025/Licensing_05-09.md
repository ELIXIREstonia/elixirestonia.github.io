---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Licensing Research Outputs - 05.09.2025 - Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2025-08-18
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - license
  - Data Management

# Fill in the course details:
course:
  name: Licensing Research Outputs

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 2

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/6cS39BwwibGffai26

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Data Stewards, Data Managers, Researchers, PhD students, anyone dealing with data in academia

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Heleri Inno

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Identify which research outputs require a license
      - Evaluate restrictions on licensing datasets
      - Analyse which licenses are appropriate for different types of research outputs
      - Apply an appropriate license to a research output


  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - licensing
    - Data Management

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Graduate students
    - Data Steward
    - Data Manager
    - PhD student

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        3071: Data management

  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    #- title:
    #  url:

  # Specify occurrences here:
  instances:
    - start: 2025-09-05T13:00:00
      end: 2025-09-05T15:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Heleri Inno
      online: Zoom, link will be given a few days before the course.

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

In scientific research, you work with many types of outputs, whether created by you or by others. How can you ensure that others give you proper credit when using your materials? And how can you know exactly what you are allowed to do with resources created by others? These questions fall under the scope of copyright law.

This lecture will explain what copyright laws do, who holds the rights to research materials, and how those rights affect their use. We will cover the role of licenses in protecting and sharing different types of outputs—such as figures, datasets, and software—and explain what each license permits. Finally, we will demonstrate how to choose and apply an appropriate license to your own research outputs.

