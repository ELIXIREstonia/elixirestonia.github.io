---
# For trainings in Estonian language use template: training_et.html
template: training_et.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Viiba koostamine suure keelemudeli jaoks (majandusteaduskonna töötajatele) - 15.04.2025
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-04-03
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - prompting
  - ChatGPT

# Fill in the course details:
course:
  name: Viiba koostamine suure keelemudeli jaoks (majandusteaduskonna töötajatele)

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    #register: https://forms.gle/vq6DgsoWK12F3ETB8

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: Osaleda saab ainult UT majandusteaduskonna kutsel

    # Specify audience in plain-text in the language of the template:
    audience: Tartu Ülikooli Majandusteaduskonna õppejõud

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
    topics:
      - Vestlusroboti kasutusjuhud
      - Viiba osad
      - Praktilised harjutused
      - Keerulisemate viipade kirjutamine
      - Suurte keelemudelite võrdlus
      - Tekstirobotite puudused
      - Juhised ja seadusandlus

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
     - Kirjutada selgeid ja täpseid viipasid
     - Anda viipadele sobiv kontekst, parandades tekstirobotite vastuste täpsust
     - Rakendada meta-viipasid
     - Tuua näiteid suurte keelemudelite kasutusjuhtudest igapäevaelus
     - Selgitada tekstirobotite puudusi

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - prompting
    - ChatGPT
    - LLM 

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
         3474: Machine learning
         0218: Natural language processing

  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    #- title:
    #  url:

  # Specify occurrences here:
  instances:
    - start: 2025-04-15T09:00:00
      end: 2025-04-15T12:00:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 26
      instructors:
        - Diana Pilvar
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

See kursus tutvustab teile suurte keelemudelite kasutamise aluseid. Saame teada, miks vestlusrobotid muutuvad järjest olulisemaks ja kuidas oskuslik juhendamine võib oluliselt vähendada tööaega. Praktiliste harjutuste kaudu saate kogemusi täpsete juhiste koostamisel, suurendades oma võimalusi kasutada tekstiroboteid erinevate ülesannete jaoks.
