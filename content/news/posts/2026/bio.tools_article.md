---
draft: false
date: 2026-10-07
authors:
  - Heleri
  - Erik
categories:
  - ELIXIR Estonia
  - news
  - ELIXIR Europe
  - services
  - article
  - bio.tools
  - BioHackathon Europe

hide:
  - toc
---

# bio.tools: keeping up with the growing world of life-science software

Finding the right research software can be challenging, especially as new tools and databases are continually being developed. [bio.tools](https://bio.tools) helps researchers navigate this growing landscape by bringing life-science software together in a single registry. It has grown to over 33,000 tools and databases, described using structured metadata and the EDAM ontology.

<!-- more -->

A new [paper in Nucleic Acids Research](https://doi.org/10.1093/nar/gkag420) describes how bio.tools has grown and evolved since 2019. The paper examines how the registry is kept up to date, how its technical infrastructure has evolved, and how bio.tools contribute to the wider ELIXIR Research Software Ecosystem.

One development is a semi-automated literature-mining workflow. Every month, **Pub2Tools** searches Europe PMC for newly published papers describing research software. It creates ranked draft bio.tools entries and suggests relevant EDAM annotations. Pub2Tools was developed by Erik Jaaniso at ELIXIR Estonia and [the University of Tartu Institute of Computer Science](https://cs.ut.ee/en). By combining automated literature mining with human curation, the workflow enables tracking of new research software at a scale that would be difficult to manage manually.

The bio.tools registry is also increasingly connected to other parts of the research software ecosystem. Its identifiers are reused by resources such as [Bioconda](https://bioconda.github.io/), [BioContainers](https://github.com/biocontainers), [Galaxy](https://galaxy-main.usegalaxy.org/) and [Debian Med](https://wiki.debian.org/DebianMed?pow_referer=https%3A%2F%2Fwww.google.com%2F), making it easier to connect information about the same software across different platforms. Researchers can search for tools by topic, operation or data format and follow links to code, containers, workflows, benchmarks and training resources.

For software developers, a bio.tools identifier makes their tools easier to discover and connect with other resources. And because new software papers are regularly identified through Pub2Tools, a newly published tool may already have an entry in the registry that its authors can claim and enrich.

The paper was led by Ana Mendes and Veit Schwämmle ([University of Southern Denmark](https://www.sdu.dk/en/)) with long-standing bio.tools developer Hans Ienasescu, and senior co-authors Magnus Palmblad ([Leiden University Medical Center](https://www.lumc.nl/en/)), Hervé Ménager ([Institut Pasteur](https://www.pasteur.fr/en) / IFB, [ELIXIR France](https://www.ifb-elixir.fr/en/)) and Matúš Kalaš ([University of Bergen](https://www4.uib.no/en), [ELIXIR Norway](https://elixir.no/)). The work was funded through [ELIXIR](https://elixir-europe.org/) commissioned services and national grants.

[Read the paper](https://doi.org/10.1093/nar/gkag420)
