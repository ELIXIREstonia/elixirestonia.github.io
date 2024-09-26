---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: How to make your messy data usable? / OpenRefine - 24.09.2024
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-08-22
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - OpenRefine
  - tables
  - cleaning data

# Fill in the course details:
course:
  name: How to make your messy data usable? / OpenRefine

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 4

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: 

    # Specify audience in plain-text in the language of the template:
    audience: Beginner level

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
   # topics:
   

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Describe spreadsheet best practices
      - Compare Excel and OpenRefine
      - Apply transforms (cell editing, column editing, transposing) in OpenRefine
      - Write simple expressions in OpenRefine
      - Match your dataset with that of an external source 

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - OpenRefine
    - data cleaning

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Beginner

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        3572: Data quality management

  # Specify occurrences here:
  instances:
    - start: 2024-09-24T12:00:00+03:00
      end: 2024-09-24T16:00:00+03:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Diana Pilvar
      onsite:
        building: DELTA
        room: 2030

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

The practical workshop on cleaning your messy data with [OpenRefine software](https://openrefine.org/).

First, we will cover spreadsheet best practices. Then, we will put that knowledge into practice with OpenRefine. This course will explore the depths of OpenRefine software and see what it can offer. This will include cleaning the data in bigger batches and unifying the data in one sweep (transforms and expressions). Additionally, we will introduce the possibility of downloading additional data from other databases and different extensions OpenRefine software has.

<!-- more -->

![Promo picture](../../../assets/images/courses/OpenRefine.png)