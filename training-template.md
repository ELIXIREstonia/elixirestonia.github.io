---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Introduction to the Next Big Thing - 01.06.2024 -  Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-02-20
authors:
  - Diana

# These are used only for site categories, not the course keywords
categories:
  - workshop
  - g:Profiler

# Fill in the course details:
course:
  name: Introduction to the Next Big Thing

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/vq6DgsoWK12F3ETB8

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: Can attend only with an invite from ETAg. These will be small groups of a maximum of 7 people.

    # Specify audience in plain-text in the language of the template:
    audience: Beginner level. To all natural scientists who deal with gene lists in their work.

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Instructor One, Instructor Two

    # Specify "Key Topics" as a YAML list:
    topics:
      - Basics.
      - Fundamentals.
      - Tools.
      - Performing.

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Gain a foundational understanding.
      - Learn to use.
      - Acquire skills.
      - Get familiar.

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - SomeTool
    - Bioinformatics

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
        0091: Bioinformatics

  # Specify occurrences here:
  instances:
    - start: 2024-06-01T14:00:00
      end: 2024-06-01T17:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Instructor One
        - Instructor Two
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
---

This workshop provides a comprehensive ... (Course description)
