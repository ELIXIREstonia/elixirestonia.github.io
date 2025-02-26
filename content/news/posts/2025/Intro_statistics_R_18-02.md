---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Introduction to statistics with R - 18.02.2025 and 25.02.2025
draft: false
hide:
  - toc

# Date of this blog post:
date: 2025-01-13
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - Bioinformatics
  - Data analysis
  - R
  - RStudio
  - Statistics

# Fill in the course details:
course:
  name: Introduction to statistics with R 

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 5 + 5 

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Biologists needing to perform statistical analyses using R.

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Marilin Moor

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - have experience in the application of basic statistics techniques in R;
      - summarize data with numerical and graphical summaries - plot data;
      - do hypothesis testing and multiple testing correction;
      - learn about linear models, correlation and regression, principal component analysis and other topics

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Bioinformatics
    - R
    - RStudio
    - Biostatistics
    - Statistics

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner
    - Biologist
    - PhD students

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        0091: Bioinformatics
        2269: Statistics and probability

  # Specify occurrences here:
  instances:
    - start: 2025-02-18T10:00:00
      end: 2025-02-18T15:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Marilin Moor
      onsite:
        building: DELTA
        room: 2005

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

This is a 2-day workshop for biologists needing to perform statistical analyses using R. 

<!-- more -->

This course is designed to provide researchers in biomedical sciences with experience in the application of basic statistical analysis techniques to a variety of biological problems.
The course will combine lectures on statistics and practical exercises, during which the participants will learn how to work with the widely used "R" language and environment for statistical computing and graphics.

Topics covered during the course include: reminders about numerical and graphical summaries, and hypothesis testing; multiple testing, linear models, correlation and regression, and other topics. Participants will also have the opportunity to ask questions about the analysis of their own data.

The course extensively covers materials from https://sib-swiss.github.io/Introduction-to-statistics-with-R/

## Requirements 

Basics of RStudio IDE, basics of R: 

* knows how to install packages, 
* knows basic data operations - loading in data, fetching data from dataframe, table transformations/pipes, 
* basic concepts of plotting - easy plotting in ggplot2 or some other plotting library

Test your knowledge here: https://www.evamariakiss.de/tutorial/rquiz/quiz_fundamentals.php

Please note, if you get >= 50%, you are eligible for this course. Else, try to find a Basics in R course before attending this one - we provide courses in this too! Materials for that course are available here: https://github.com/ELIXIREstonia/2025-02-18-R-basic-stat 

Technical prerequisites: 

To do the exercises, you are required to have 

* your own computer with at least 4 Gb of RAM and with an internet connection,
* as well as the latest the version of [R](https://cran.rstudio.com/) (version 4.4.2, release date 2024-10-31)
* the free version of [RStudio](https://posit.co/download/rstudio-desktop/) installed. 

