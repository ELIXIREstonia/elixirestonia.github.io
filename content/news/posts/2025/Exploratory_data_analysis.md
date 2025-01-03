---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Introduction to Exploratory Data Analysis (EDA) with R - 29.01.2025 - Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2025-01-02
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - Exploratory Data Analysis
  - R
  - Data visualisation


# Fill in the course details:
course:
  name: Introduction to Exploratory Data Analysis (EDA) with R

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 5

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/Hu62aN63iWR4uKvQ8

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Graduate students, early-career researchers, and anyone new to data analysis who wants to get started with EDA using R.

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Priit Adler

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Understand the principles and importance of EDA.
      - Summarize datasets using descriptive statistics.
      - Visualize trends and distributions using R, including histograms, boxplots, and scatterplots.
      - Identify and address data issues like missing values and outliers.
      - Interpret patterns and anomalies to guide further analysis.

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - EDA
    - Exploratory Data Analysis
    - R
    - workshop
    - Data Visualisation

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Graduate students
    - Post Docs
    - PI

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        0091: Bioinformatics

  # Specify occurrences here:
  instances:
    - start: 2025-01-29T09:00:00
      end: 2025-01-29T14:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Priit Adler
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

Are you ready to unlock the potential of your data? This one-day workshop will introduce you to Exploratory Data Analysis (EDA)—an essential first step in any data analysis workflow. Designed for graduate-level learners without a computational background, this course will equip you with the foundational skills to summarize, visualize, and interpret data effectively. With a hands-on, beginner-friendly approach, you’ll practice these skills using real-world datasets and leave with the confidence to explore data independently.
