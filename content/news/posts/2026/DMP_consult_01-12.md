---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title:  Data Management Plan Consultation - 1.12.2026
draft: false
hide:
  - toc

# Date of this blog post:
date: 2026-10-12
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - DMP
  - data management

# Fill in the course details:
course:
  name: Data Management Plan Consultation

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 4

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: 

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: Course is listed under Internal trainings in ÕIS2. Registration open for University of Tartu employees/students. 

    # Specify audience in plain-text in the language of the template:
    audience: The course is aimed at researchers and academic staff responsible for preparing a data management plan (DMP) for their research projects.

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
    topics:


    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Describe resources that assist in writing the DMP
      - Assess risks in their data handling and choose suitable solutions for storage, backup and access.
      - Draft a Data Management Plan tailored to their own research project.

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - Data management
    - Data Management Plan
    - DMP
    - Data Life Cycle

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - DMP writers
    - researchers
    - PI

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
    - start: 2026-12-01T13:00:00
      end: 2026-12-01T17:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 3
      instructors:
        - Diana Pilvar
      onsite: 
        building: DELTA
        room: 2049

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

Planning how your research data will be collected, stored, shared and preserved is now a requirement from most funders, and a well-crafted Data Management Plan (DMP) can strengthen your grant application. In this **DMP consultation, our expert helps you anticipate data management-related risks, budget for the resources you’ll need, and clarify team responsibilities early, before small oversights become costly problems.** The result is a plan that makes your work more efficient and your data more FAIR, so your research continues to have an impact long after the project ends.

<!-- more -->

**Get personal, hands-on support for your Data Management Plan in a small group of up to 3 participants.** After a short introduction to key topics (useful resources, the data life cycle, READMEs, GDPR considerations and FAIR data sharing), most of the session is spent working on your own DMP. Our data steward meets with each participant one-to-one to discuss your project’s specific needs, answer your questions and give feedback as you write. You’ll leave with a substantial DMP draft for your project.

Diana Pilvar is a data manager at the University of Tartu and training coordinator for the ELIXIR Estonia. She regularly advises researchers on improving their data management and teaches research data management, FAIR principles, metadata, licensing and README creation. With a BSc in Genetic Engineering, an MSc in Bioinformatics, and hands-on experience with sensitive personal data and in human molecular genetics and proteomics core labs, she understands the practical challenges researchers face. She is an active member of the ELIXIR Research Data Management community.

Feedback from previous courses:

* _“The course was very interactive and full of important sources”_
* _“The entire course was very useful. A lot of practical advice was given.”_
* _“The opportunity to discuss the individual research topics and how the workshop topic applies to each”_