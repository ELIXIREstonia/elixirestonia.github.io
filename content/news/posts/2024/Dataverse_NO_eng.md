---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Data Curation with Dataverse - A Norwegian Perspective - 5.04.2024
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-03-19
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - Dataverse
  - repository
  - data
  - how-to

# Fill in the course details:
course:
  name: Data Curation with Dataverse - A Norwegian Perspective


  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 2

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/BYt5b3jHbbZZrE357

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite: First come first served

    # Specify audience in plain-text in the language of the template:
    audience:  librarians, repository managers, data managers, data curators


    # Specify lecturers in plain-text in the language of the template:
    lecturers: Illimar Hugo Rekand, Philipp Conzett

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Describe the data curation process
      - Recognize and describe which dataset can belong to an open archive such as Dataverse
      - Explain which metadata is necessary for Dataverse deposition
      - Explain how datasets can be improved when they arrive


  # Specify keywords (for metadata) as a YAML list for TESS:
  keywords:
    - Dataverse
    - curation

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - data librarians
    - data managers
    - data scientists
    - researchers
    - curators

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        0219: Data submission, annotation, and curation

  # Specify occurrences here:
  instances:
    - start: 2024-04-05T13:00:00+03:00
      end: 2024-04-05T15:00:00+03:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 30
      instructors:
        - Illimar Hugo Rekand
        - Philipp Conzett
      onsite:
        building: DELTA
        room: 2010
---

The Norwegian Dataverse team will let us glimpse behind the curtain of repository management, addressing significant challenges, data curation processes, migration of data from one repository to another, and ensuring data quality. The course slides will be in English but most lecture information will be spoken in Estonian.

<!-- more -->

DataverseNO (https://dataverse.no/) is a national, generic repository for open research data, owned and operated by UiT The Arctic University of Norway. DataverseNO is aligned with the FAIR Guiding Principles for scientific data management and stewardship. The technical infrastructure of the repository is based on the open source application Dataverse, developed by an international developer and user community led by Harvard University. DataverseNO is CoreTrustSeal certified.

Data curation is carried out by data curators at the DataverseNO partner institutions. Datasets deposited in the top-level collection are curated by data curators at UiT The Arctic University of Norway (owner of DataverseNO). Data curators are staff members employed at the partner institutions, usually at the library of the institution.
