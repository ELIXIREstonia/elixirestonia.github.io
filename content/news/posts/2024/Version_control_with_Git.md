---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Version Control with Git - 6.11.2024 - Registration OPEN
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
  - Git
  - version control
  - workshop
  - shell
  - Unix


# Fill in the course details:
course:
  name: Version Control with Git

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 4

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/oUYKVHhwaPjquqDL8

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Beginner level

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Priit Adler
    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Recognize version control importance
      - Able to create a repository in Git
      - Track changes and collaborate in Git

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Git
    - Version Control

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
        4046: Version control

  # Specify occurrences here:
  instances:
    - start: 2024-11-06T09:00:00
      end: 2024-11-06T13:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Priit Adler
      onsite:
        building: DELTA
        room: 2034

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

Git is used across the world to help developers keep track of changes while working on different parts of the same project. Teams are not the only ones to benefit from version control: lone researchers can benefit immensely. Keeping a record of what was changed, when, and why is extremely useful for all researchers if they ever need to come back to the project later on (e.g., a year later, when memory has faded).

<!-- more -->

Version control is the lab notebook of the digital world: it’s what professionals use to keep track of what they’ve done and to collaborate with other people. Every large software development project relies on it, and most programmers use it for their small jobs as well. And it isn’t just for software: books, papers, small data sets, and anything that changes over time or needs to be shared can and should be stored in a version control system.

Requirements: Bring your own laptop and install git: https://git-scm.com/downloads

In this lesson we use Git from the Unix Shell. Some previous experience with the shell is expected, but isn’t mandatory.