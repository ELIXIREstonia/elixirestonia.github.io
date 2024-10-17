---
# For trainings in Estonian language use template: training_et.html
template: training_en.html

# You may use full custom title here. If omitted, it will be generated from course name.
title: Prompting 101 - A Beginner's Guide to Communicating with LLMs - 20.11.2024 - Registration OPEN
draft: false
hide:
  - toc

# Date of this blog post:
date: 2024-10-17
authors:
  - Diana

# These are used only for ELIXIR EE site categories, not the course keywords on TESS
categories:
  - workshop
  - ChatGPT

# Fill in the course details:
course:
  name: Prompting 101 - A Beginner's Guide to Communicating with LLMs

  # Keep this in English (used in metadata)
  provider: University of Tartu, Institute of Computer Science
  # Specify duration in hours:
  hours: 3

  general:
    # If the course is open for registration, specify the sign-up form link here (otherwise, remove it):
    register: https://forms.gle/biyndbyQMHJSAwi17

    # If the course is invite-only, specify the details (plain-text) here (otherwise, remove it):
    invite:

    # Specify audience in plain-text in the language of the template:
    audience: Beginners
    # Specify lecturers in plain-text in the language of the template:
    lecturers: Diana Pilvar

    # Specify "Key Topics" as a YAML list:
    topics:

    # Specify "Learning outcomes" as a YAML list:
    outcomes:
      - Write clear and concise prompts
      - Give context within prompts to improve response accuracy
      - Apply meta-prompting
      - Give examples of LLM use cases in every day life
      - Explain limitations and pitfalls of chatbots

  # Specify keywords (for metadata) as a YAML list:
  keywords:
    - ChatGPT
    - LLM

  # Specify audience keywords (for metadata) as a YAML list:
  audience:
    - Researchers
    - Beginner
    - Students

  # Mostly don't need to change (needed for metadata). Find more values here:
  # https://www.ebi.ac.uk/ols4/ontologies/edam/classes/http%253A%252F%252Fedamontology.org%252Ftopic_0003?lang=en
  about:
    # "edam" indicates special ontology, other types not yet supported.
    - edam:
        # Specified as – code: label
        3474: Machine learning
        0218: Natural language processing

  # Specify occurrences here:
  instances:
    - start: 2024-11-20T09:00:00+03:00
      end: 2024-11-20T12:00:00+03:00
      organisation: ELIXIR Estonia
      maximumAttendeeCapacity: 20
      instructors:
        - Diana Pilvar
      onsite:
        building: DELTA
        room: 2034

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

This course introduces you to the essentials of interacting with Large Language Models (LLMs). You'll learn why chatbots are increasingly relevant and how mastering the skill of prompting can significantly reduce work time. Through hands-on exercises, you'll gain practical experience in crafting precise prompts, ensuring you can leverage LLMs for a variety of tasks.
