---
draft: false
date: 2025-09-24
authors:
  - Diana
categories:
  - Thesis
  - students

hide:
  - toc
---

# ELIXIR’s student topics for ATI Day 24.09.2025

ELIXIR Estonia is building and maintaining web tools and other resources for life science research. We aim to build things that last and are useful over a longer period. we offer 4 topics: 

* Topic 1: Modernising KEGGanim web application
* Topic 2: Contrastive Learning for Microscopy Image Understanding (taken)
* Topic 3: Vision learning to understand how good a basketball player X is in situation Y? 
* Topic 4: Evaluating the Impact of Data Update Frequency on Functional Annotations Across 1000 Species Using g:Profiler data archives

<!-- more -->

## Topic 1: Modernising [KEGGanim](https://biit.cs.ut.ee/kegganim/) web application 

KEGGanim is a bioinformatics tool designed to visualise high-throughput experimental data in the context of KEGG biological pathways. The tool overlays gene expression, protein levels, and other data types the user wants to analyse onto KEGG pathways, producing both static images and dynamic animations. These visualisations allow researchers to observe key genes and pathway components under different experimental conditions, such as time points, treatments, or tissue types. 

This project aims to modernise KEGGanim by:

* Migrating the backend from Perl to Python using the Django framework to improve performance and maintainability.
* Upgrading the user interface, including integrating g:Profiler tools, to improve usability.
* Enhancing user management features, making the platform more intuitive for data uploads and account management.
* Improve data digestion methods to be more flexible and up-to-date

This project will give you valuable experience in modern web development technologies and offer insights into bioinformatics tools and data visualisation.

For more info contact: Priit Adler priit.adler@ut.ee

## Topic 2: Contrastive Learning for Microscopy Image Understanding (taken)

Benchmarks like BIOMEDICA and Micro-Bench are designed to test how well vision-language models (such as GPT-4o and PaliGEMMA) can help biologists analyze images. These large datasets contain microscopy images paired with captions and other metadata.

The goal of this project is to explore these benchmarks and learn a model that can, for example, classify microscopy images at different differentiation stages of human induced pluripotent stem cells (hiPCS). In addition, the performance of the proposed method will be compared to other models.

This approach leverages recent advances in contrastive learning methods (e.g., generalist models like CLIP, PaliGEMMA, also fine-tuned models, like BiomedCLIP), which learn a shared feature space between images and text to better identify and interpret what is shown in the microscopy images.

For more info contact: Marilin Moor marilin.moor@ut.ee

## Topic 3: Vision learning to understand how good a basketball player X is in situation Y? 

In basketball, metrics such as plus/minus, rebounds, and assists offer useful numerical insights, but they don’t capture the full picture needed for pre-game scouting, which is often video-based. For effective scouting, coaches need to analyze team tactics, formations, and a player’s behavior when they have possession of the ball.

Recently, a paper titled “BASKET: A Large-Scale Video Dataset for Fine-Grained Skill Estimation” introduced a massive dataset containing over 32,000 players from various leagues worldwide. By combining tracking and pose estimation methods with traditional game statistics, this dataset can help coaches evaluate players in different in-game situations with much greater detail and accuracy. Using the aforementioned techniques, the goal of this thesis is to provide video-based pre-game scouting analysis of specific players in real game contexts. 

For more info contact: Marilin Moor marilin.moor@ut.ee


## Topic 4: Evaluating the Impact of Data Update Frequency on Functional Annotations Across 1000 Species Using g:Profiler data archives

This project investigates how the frequency of data updates influences functional annotation quality across a large set of species. [g:Profiler](https://biit.cs.ut.ee/gprofiler) is a bioinformatics toolset used by thousands of researchers to conduct tens of millions of queries yearly. The tool enables gene set enrichment and functional interpretation, supporting close to 1000 species with regularly updated data sources. 

The accuracy of results depends heavily on how often the underlying annotation sources are synchronised. Infrequent updates can lead to missing or outdated functional terms, while frequent updates can be unnecessarily time-consuming with little gain of new knowledge.

The student will systematically compare annotation content and availability across species using the last 18 data archives released since 2019. A key task will be to measure which species benefit most from frequent updates and which show minimal differences.

The project will also evaluate trade-offs between update effort and annotation accuracy. Additional research questions on knowledge transfer options between species can be explored by more advanced student. 

For more info contact: Hedi Peterson hedi.peterson@ut.ee 


