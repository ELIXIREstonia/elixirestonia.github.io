---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Crash Course in Data Management - 28.08.2025
draft: false
hide:
  - toc

# Date of this blog post:
date: 2025-08-11
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
   - Data Management
   - DMP

# Fill in the course details:
course:
  name: Crash Course in Data Management

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3.5

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Data stewards, Data managers, Researchers, PhD students, anyone dealing with data in academia

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Heleri Inno

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Implement best practices in file naming and folder structuring
      - Define data storage and backup strategies
      - Determine the right license for your data/published results

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Data Management
    - DMP

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner
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
    - title: Crash Course In Data Management slides
      url: https://doi.org/10.5281/zenodo.16993293

  # Specify occurrences here:
  instances:
    - start: 2025-08-28T12:30:00
      end: 2025-08-28T16:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 50
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

Data management is an essential part of scientific research and is crucial for maximising the value of data. Crash Course in Data Management is an introductory course that equips researchers with the necessary skills for effective organisation and management of research data. Participants will gain knowledge of best practices in file naming, file organisation, data backup, data preservation and sharing. We will go through exercises and assignments to reinforce new knowledge.
