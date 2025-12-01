---
# For trainings in Estonian language use template: training_et.html
template: training_et.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: OpenRefine andmete puhastamiseks - 07.11.2025
draft: false
hide:
  - toc

# Date of this blog post:
date: 2025-09-30
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - OpenRefine
  - tables
  - cleaning data


# Fill in the course details:
course:
  name: OpenRefine andmete puhastamiseks

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 4

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: 

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:  Saab osaleda TLU või ELIXIR Eesti kutsel

    # Specify audience in plain-text in the language of the template:
    audience: algajad, teadlased, PhD tudengid, magistri tudengid

    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
    topics:
    
    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Kirjeldada tabelarvutuse parimaid tavasid
      - Võrrelda Excelit ja OpenRefine-i
      - Rakendada OpenRefine-is muundamisi (lahtri muutmine, veeru muutmine, transponeerimine)
      - Kirjutada OpenRefine-is lihtsaid avaldisi
      - Võrrelda oma andmestikku välise allika andmestikuga


  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - OpenRefine
    - data cleaning

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner
    - Students
    - PhD students

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        3572: Data quality management

  # Optional "External resources" to be shown in TeSS under the course:
  # Multiple items can be added; for each item the title and the url are mandatory.
  externalResources:
    - title: slides for How to make your messy data usable? / OpenRefine
      url: https://doi.org/10.5281/zenodo.17546041

  # Specify occurrences here:
  instances:
    - start: 2025-11-07T09:00:00
      end: 2025-11-07T13:45:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Diana Pilvar
      onsite:
        building: TLU
        room: A-507

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

Praktiline töötuba, kus puhastame käsitsi sisestatud andmeid OpenRefine tarkvaraga. Esmalt käsitleme tabelarvutuse parimaid tavasid ning seejärel rakendame teadmisi OpenRefine’is. Koolitusel uurime OpenRefine tarkvara funktsionaalsusi: andmete puhastamist suuremate partiidena ja andmete ühtlustamist ühe hoobiga. Lisaks tutvustame võimalust laadida alla täiendavaid andmeid teistest andmebaasidest ja lisarakendusi.

Vajalik ette installeerida:

* OpenRefine (vajalik Java olemasolu) https://openrefine.org/download
