---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Crash Course in Data Management - 25.11.2026
draft: false
hide:
  - toc

# Date of this blog post:
date: 2026-10-13
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - data management
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
    register: https://forms.gle/AqCejDuRAwD6KkBL9

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):

    # Specify audience in plain-text in the language of the template:
    audience: Researchers, PhD students, anyone dealing with data in academia

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Apply best practices in file naming and folder structuring
      - Select and apply appropriate ontologies and metadata standards
      - Describe data storage and backup strategies
      - Choose the right license for your data/published results

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
    - title:
      url:

  # Specify occurrences here:
  instances:
    - start: 2026-11-25T09:30:00
      end: 2026-11-25T13:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 75
      instructors:
        - Diana Pilvar
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

Lost files, unclear folder structures and undocumented datasets cost researchers time and can put results at risk. Funders and journals also increasingly expect data to be well managed and shared openly, so good data management is now a core research skill rather than an optional extra. __This introductory webinar gives you practical skills to organise and manage your research data effectively.__ 

<!-- more -->

You’ll learn best practices for documenting, backing up and sharing data, and put them into practice through hands-on exercises and assignments. You’ll leave with habits that save you time, protect your work and make your data easier to understand and reuse, for colleagues and for your future self.

Instructor: Diana Pilvar is a data manager at the University of Tartu and training coordinator for the ELIXIR Estonia. She regularly advises researchers on improving their data management and teaches research data management, FAIR principles, metadata, licensing and README creation. She is an active member of the ELIXIR Research Data Management community.

Feedback from previous courses:

* _“Was clear, calm, inclusive for different disciplines, easy and relavant exercises”_
* _“All the training was built up well, active part in breakout rooms gave good feedback”_
* _“Many practical good/bad examples for data management”_
* _“Good balance of working between group/individual work and lecture parts”_
* _“full of useful links and very practical!”_
* _“Good examples eg horror stories are always good”_
* _“The structure. The pace was just about right between listening and acting, I did not get bored or tired. And the LEGO-people were so cute.”_
