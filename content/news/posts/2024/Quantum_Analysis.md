---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Quantum Analysis (test) - 01.04.2025
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-12-03
authors:
  - a71870

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - Linux
  - command-line

# Fill in the course details:
course:
  name: Quantum Analysis

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/QnPtaoWXJevLnhJi8

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Beginner level

    # Specify lecturers in plain-text in the language of the template:
    lecturers:

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Obtain basic knowledge on dealing with files using command line (Linux or Mac)
      - Tips and tricks for effective command line hacks that would save a lot of time.

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Linux
    - Command line

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
        0605: Informatics

  # Specify occurrences here:
  instances:
    - start: 2025-04-01T09:00:00
      end: 2025-04-01T12:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Priit Adler
      onsite:
        building: DELTA
        room: 2040

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

This course is aimed to provide basic survival skills in Linux and the terminal environment. We will teach you how to access files and folders, move around and hopefully shake off the fear of getting stuck somewhere along the way.

No prior knowledge is expected.

Requirements: Bring your own laptop and please follow the setup tutorial: https://elixirestonia.github.io/2021-09-28-shell-novice/setup.html