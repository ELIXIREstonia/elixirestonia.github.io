---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Special course in bioinformatics - 15-18.06.2026
draft: false
hide:
  - toc

# Date of this blog post:
date: 2026-08-06
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - data management
  - DMP
  - Git
  - charts
  - Data visualisation
  - R
  - RStudio
  - ggplot2
  - Bioinformatics
  - Data analysis
  - Statistics

# Fill in the course details:
course:
  name: Special course in bioinformatics

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 28

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: Can attend only with an invite from TalTech.

    # Specify audience in plain-text in the language of the template:
    audience: Beginner level to natural and life science PhD students

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar, Priit Adler, Marilin Moor

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
    - Apply best practices in file naming and folder structuring
    - Select and apply appropriate ontologies and metadata standards
    - Describe data storage and backup strategies
    - Choose the right license for your data/published results
    - Recognize version control importance
    - Able to create a repository in Git
    - Track changes and collaborate in Git
    - Choose appropriate chart types
    - Avoid common mistakes in data visualisation
    - Maximise data-ink ratio
    - Navigate RStudio features
    - Write and execute R scripts
    - Manage projects efficiently within the RStudio IDE
    - Import, clean, and manipulate data
    - Able to create clear data visualizations in RStudio and customize them
    - Discovers patterns, relationships, and deviations in datasets
    - Have experience in the application of basic statistics techniques in R;
    - Summarize data with numerical and graphical summaries - plot data;
    - Do hypothesis testing and multiple testing correction;
    - Learn about linear models, correlation and regression, principal component analysis and other topics

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Data Management
    - DMP
    - Git
    - Version Control
    - Data visualisation
    - Data Visualization
    - data visualisation
    - Data visualization
    - RStudio
    - R
    - R language
    - ggplot2
    - Bioinformatics
    - Biostatistics
    - Statistics

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
        4046: Version control
        0092: Data visualisation
        0091: Bioinformatics
        2269: Statistics and probability

  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    #- title:
    #  url:

  # Specify occurrences here:
  instances:
    - start: 2026-06-15T09:00:00
      end: 2026-06-18T17:30:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Diana Pilvar
        - Priit Adler
        - Marilin Moor
      onsite:
        alternateName: TalTech
        streetAddress:

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

ELIXIR-Estonia will provide a bioinformatics course that will cover an overview of basic R, statistics,
graphical visualization, data management and sharing.

<!-- more -->


