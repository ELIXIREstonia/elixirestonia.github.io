---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: CodeRefinery workshop for reproducible research code  - March 17-19 and 24-26, 2026 - Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2026-02-05
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - CodeRefinery
  - Git
  - AI

# Fill in the course details:
course:
  name: CodeRefinery workshop for reproducible research code

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 30

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/XFZn6LiSDDc4bECJA

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: 

    # Specify audience in plain-text in the language of the template:
    audience: The CodeRefinery workshop aims to support researchers of all domains, levels and preferred programming languages to write more reproducible research code.


    # Specify lecturers in plain-text in the language of the template:
    lecturers: Priit Adler

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Use Git to track changes, create commits, browse history, and merge branches in a personal or group research code repository.
      - Inspect commit histories and pull requests to identify when, how, and by whom important changes were introduced in a project.
      - Apply best practices for documenting research software (e.g. README, API docs, examples) to make a small project easier for others to use.
      - Summarize the principles of reproducible research and social coding in the context of collaborative scientific software development.
      - Run and extend simple automated tests to check that changes do not break existing research code
      - Evaluate benefits, risks, and limitations of using generative AI for assisted coding in research

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - CodeRefinery
    - Git
    - Reproducibility
    - Social coding
    - open software
    - Documentation
    - assisted coding
    - automated testing
    - modular code development


  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner
    - PhD students
    - Graduate students

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        4046: Version control
        3071: Data Management
        4047: Software management


  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    #- title:
    #  url:

  # Specify occurrences here:
  instances:
    - start: 2026-03-17T11:00:00
      end: 2026-03-26T16:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Priit Adler
      onsite:
        building: DELTA

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

Are you writing code for your research? Do you struggle to reproduce results of your own or others computations?

Join the online CodeRefinery workshop on six half days, March 17-19 and 24-26, 2026, 10 - 15 CET.

The CodeRefinery workshop aims to support researchers of all domains, levels and preferred programming languages to write more reproducible research code. The workshop is held online (streamed on Twitch) with interactive hands-on sessions during the first week. 

<!-- more -->

Timeline: 

* Day 1 – Tuesday, March 17, 2026 
    * **Introduction to version control with Git** (parts 1–2: motivation, browsing, **committing, merging**).
* Day 2 – Wednesday, March 18, 2026 
    * Introduction to version control with Git (parts 3–4: **local workflows, inspecting history, sharing work, practical advice**).
* Day 3 – Thursday, March 19, 2026 
    * Collaborative distributed version control (concepts, **same-repository collaboration, code review, contributing via forking**).
* Day 4 – Tuesday, March 24, 2026 
    * **Reproducible research; Social coding and open software**.
* Day 5 – Wednesday, March 25, 2026 
    * **How to document your research software; Responsible use of generative AI in assisted coding**.
* Day 6 – Thursday, March 26, 2026 
    * **Automated testing; Modular code development**; Concluding remarks and general Q&A

FOR STREAMING ONLY: 

* More info and registration on the CodeRefinery-workshop site: https://coderefinery.github.io/2026-03-17-workshop/
* In case of any questions, please contact support@coderefinery.org

FOR LOCAL CLASSROOM: 

**Tartu offers an in-person session where you can watch the live stream and get on-site support from an instructor to help clarify concepts and troubleshoot errors.** Both the streaming and local classroom events are free of charge.

**If you wish to register for local classroom in Tartu, use the link provided below. Make note, that you still need to register for streaming separately. It is not necessary to attend all workshops.**

Register: https://forms.gle/XFZn6LiSDDc4bECJA

