---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Training on FAIR Principles in Data Management
draft: false
hide:
  - toc

# Date of this blog post:
date: 2026-08-10
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - data management
  - DMP
  - Metadata
  - README
  - FAIR principles


# Fill in the course details:
course:
  name: Training on FAIR Principles in Data Management

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 6

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register:

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: Can attend only with an invite from Kyiv School of Economics

    # Specify audience in plain-text in the language of the template:
    audience: Researcher with beginner level of knowledge about Data Management and FAIR principles

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar, Marko Arrak

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Design consistent file naming conventions and hierarchical folder structures
      - Locate discipline-specific metadata standards
      - Critically evaluate existing data structures to identify gaps in documentation
      - Describe the primary daily responsibilities researchers have under GDPR
      - Explain the difference between pseudonymization and anonymization
      - Choose the most appropriate anonymization method (and software tool)
      - Describe data storage best practices
      - Compare different methods of version control
      - Explain what data catalogs and provenance are and how they are related to FAIR
      - Explain FAIR principles-  Metadata relevance, Documentation
      - Apply FAIR principles in practice


  # Specify keywords (for metadata) as a YAML list:
  keywords:
  - workshop
  - data management
  - DMP
  - Metadata
  - README
  - FAIR principles

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
        3071: Data management

  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    - title: Training on FAIR Principles in Data Management slides 
      url: https://doi.org/10.5281/zenodo.20556552

  # Specify occurrences here:
  instances:
    - start: 2026-05-26T17:00:00
      end: 2026-06-04T18:30:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Diana Pilvar
        - Marko Arrak
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

This 4 session training course "Training on FAIR Principles in Data Management" is tailored for Kyiv School of Economics, the Ukrainian partner in the BRIDGE twinning project that is being implemented together with University of Tartu. Covering basic data management best practices and trickiest aspects of handling data with a focus on social sciences. 

<!-- more -->

* 26 May (Tue), 17:00-18:30 - Organise your data 
    * Topics covered: folder structures, file naming, metadata standards
    * Task: finding relevant metadata standards, critical evaluation of folder structure
* 28 May (Thu), 17:00-18:30 -  Privacy fundamentals 
    * Topics covered: GDPR, data minimisation, resources for your field, anonymisation vs pseudonymisation, anonymisation tools
    * Demonstration of tool(s)
* 02 June (Tue), 17:00-18:30 -  Managing Data Over Time 
    * Topics covered: versioning, open formats, storage, backup, data catalogues, provenance, lineage, tools
    * Polls and discussion
* 04 June (Thu), 17:00-18:30 -  FAIR in practice
    *  Topics covered: PID, data access statements, licenses, finding repositories, FAIR tools, README, data dictionary
    *  Task: Writing data dictionary, writing README, licences