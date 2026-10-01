---
draft: false
date: 2026-09-15
authors:
  - Diana
categories:
  - ELIXIR Estonia
  - thesis

hide:
  - toc
---

# Student thesis topics 2026

ELIXIR Estonia builds and maintains web tools and other resources for life science research. We also provide training and consultations in research data management. Our goal is to create solutions that last and stay useful for years to come.

We offer the following topics:

* MSc level: Scalable k-mer and graph-based clustering of short peptide sequences under limited memory
* BSc level: Kohalikul tehisintellektimudelil põhinev kakskeelne andmehalduse nõustaja Eesti teadlastele
* MSc level: Can an open-weight LLM check metadata reliably in Estonian and English?
* MSc level: Does good metadata get data reused? GEO as a test bed
* MSc level: From prose to machine-actionable DMPs
* BSc level: Kas automaatsed FAIR-hindajad on omavahel nõus?
* MSc level: Can AI Agents Reproduce Bioimage Analysis Papers? Evaluating and Improving Open Models and Specialised Agents 
* BSc level: Eesti 10 km rahvajooksude osalus- ja tulemustrendid maakondade lõikes aastatel 2016–2026
<!-- more -->

## Scalable k-mer and graph-based clustering of short peptide sequences under limited memory

MSc thesis

High-throughput sequencing experiments can produce millions of short peptide sequences, making exhaustive pairwise comparison computationally expensive and memory intensive. This thesis will investigate an efficient clustering approach for fixed-memory environments, focusing on peptide sequences of approximately 12 amino acids in length.

The proposed method will use k-mer-based indexing to rapidly identify candidate similarities between peptides and construct a sparse similarity graph without performing an all-vs-all comparison. Graph sparsification strategies, such as filtering highly frequent k-mers, limiting the number of neighbours per sequence, and decomposing the graph into connected components, will be explored to control memory consumption. The resulting graph components will be clustered using the Markov Cluster Algorithm (MCL) to identify groups representing related peptide motifs.

Where the original nucleotide sequences are available, the thesis may additionally investigate whether nucleotide-level information can help distinguish true peptide variation from sequencing or translation errors.

The method will be evaluated on datasets containing millions of short peptide sequences. Evaluation will consider runtime, peak memory usage, scalability, cluster stability, and the ability to recover meaningful sequence motifs. Existing short-sequence clustering and motif-discovery approaches will be used as baselines.

The expected outcome is a prototype workflow and an assessment of whether k-mer-based candidate generation combined with memory-aware graph construction and MCL provides an effective approach for large-scale short-peptide motif discovery under constrained computational resources.

Prerequisites:  Interest in algorithms and programming

For more info contact: Priit Adler priit.adler@ut.ee


##  Kohalikul tehisintellektimudelil põhinev kakskeelne andmehalduse nõustaja Eesti teadlastele

A local, bilingual AI data-management consultant for Estonian researchers

Bakalaureusetöö

Teadlastel tekib pidevalt andmehalduse küsimusi: kuidas koostada andmehaldusplaani, kuhu andmed hoiustada, millist litsentsi valida, kuidas metaandmeid kirjeldada või mida teha isikuandmetega. Tugitöötajaid, kes saaksid neile vastata, on teadlaste arvuga võrreldes aga väga vähe. Keelemudelil põhinev nõustaja võiks vastata tavapärastele küsimustele ja suunata keerulisemad inimese juurde. Teadlaste kirjeldused avaldamata projektidest või isikuandmetest ei tohi aga liikuda välistele teenustele, seega peab nõustaja töötama ülikooli enda riistvaral. TartuNLP on avaldanud eesti keelele kohandatud avatud kaaludega keelemudelid (Llammas, EstLLM), mis teevad sellise lahenduse nüüd realistlikuks.

 Tudeng ehitab nõustaja, mis kasutab kohalikult käivitatud keelemudelit ja otsinguga täiendatud genereerimist (RAG). Otsing toimub kureeritud juhendmaterjalides: ELIXIR RDMkit, DataDOI juhendid, TÜ andmekaitse juhend ja avatudteadus.ee. Mudelit ei peenhäälestata. Nõustajale kehtivad kaks reeglit:
 - iga väite juures tuleb viidata allikale või tunnistada, et vastust ei leia;
 - isikuandmete, eetikaloa ja lepingutega seotud küsimused tuleb suunata andmehaldus- või andmekaitsespetsialistile.

 Tudeng koostab umbes 120 küsimusest koosneva kakskeelse testikogumi koos kontrollitud näidisvastustega. Ta võrdleb EstLLM-i selle aluseks olnud Llama 3.1 mudeliga, et näha, mida eesti keele kohandus juurde annab. Samuti võrdleb ta kahte eri otsingumudelit. Mõõdetakse vastuste õigsust, viidete paikapidavust, inimese juurde suunamise täpsust ning eesti- ja ingliskeelsete vastuste kvaliteedivahet. Eraldi kontrollitakse, kas dokumentide otsing töötab  eestikeelsete päringute puhul sama hästi kui ingliskeelsete puhul. Juhendmaterjalide kasutamisel kontrollitakse ka nende litsentse.

 Tulemuseks on töötav prototüüp, korduvkasutatav hindamiskogum ja soovitus, kas ja kuidas sellist nõustajat ülikoolis kasutusele võtta. Töö on edukas ka siis, kui mudelid vastavad halvasti, sest hindamiskogum ja vigade analüüs on edasiste otsuste jaoks väärtuslikud. Teema on seotud ELIXIR Eesti ja ELEVATE-DM projekti tegevustega.

 Eeldused: Python; põhiteadmised masinõppest või keeletehnoloogiast; huvi avatud teaduse vastu. Juriidilist tausta pole vaja.

Lisainfo: Hedi Peterson hedi.peterson@ut.ee 

## Can an open-weight LLM check metadata reliably in Estonian and English?

MSc thesis

Metadata decide whether a dataset can be found, understood and reused, yet repository curators rarely have time to check every record. Large language models can spot missing or inconsistent fields, vague descriptions and wrong licences. Two questions stand between a promising demo and a service a university can trust:

 1. How accurate are such checks for each metadata element, and do they stay stable when the model or prompt changes?
 2. Do they work as well for Estonian records as for English ones?

 Research metadata often contain personal names and unpublished project details, so the checks must run on a locally hosted open-weight model rather than an external service.

 The student will build a gold standard of at least 150 dataset records from DataDOI (the University of Tartu repository), the Estonian open data portal and Estonian Zenodo deposits. Two annotators will code each record independently against the DataCite metadata schema. Checks are defined per element: completeness, internal consistency, licence, keywords and ontology terms, and description quality. Three to four open-weight models, including TartuNLP’s Estonian-adapted EstLLM, will be compared under several prompt designs, and every model, prompt and run version will be logged. The analysis will report:

 - precision and recall for each metadata element;
 - the gap between Estonian and English performance, with bootstrap confidence intervals;
 - whether the passages the model quotes as evidence actually support its verdicts;
 - how much the results shift after a model update.

 The deliverables are a validated evaluation protocol, a reusable bilingual gold standard, and a recommendation on which checks can be automated and which still need a human curator. The protocol mirrors the metadata-quality checks planned in the ELEVATE-DM project, so the results feed directly into how that work will be done at the University of Tartu. The topic pairs well with the bachelor’s topic on a local data-management consultant, which shares its language-gap design.

 Prerequisites: Python; coursework in NLP or machine learning. Reading Estonian helps with annotation but is not required if the student works with an Estonian-speaking co-annotator.

For more info contact: Hedi Peterson hedi.peterson@ut.ee 


## Does good metadata get data reused? GEO as a test bed

MSc thesis

Research funders and institutions invest in data stewardship on the assumption that well-described data are reused more. The claim is intuitive, but direct evidence is thin, because reuse is hard to measure and metadata quality is hard to score at scale. The Gene Expression Omnibus (GEO) is an unusually good test bed. It holds well over 100,000 public functional-genomics series with structured metadata, and reuse can now be traced through accession numbers text-mined from the literature (Europe PMC Annotations API). Recent work also shows that language models can reconstruct experimental designs from GEO metadata, so metadata quality can now be measured by machine.

 The student will define a metadata-quality score for GEO series from four components:

 - completeness of MINSEQE-style fields;
 - use of controlled vocabularies and ontologies;
 - the structure of the sample characteristics;
 - the clarity of the experimental description, scored by a language model and validated on a hand-rated subset.

Reuse is measured as the number of independent papers that mention the series accession, excluding the original authors. Popular topics attract both better curation and more reuse, so the analysis matches series within topic, organism and platform. It then fits count models (negative binomial, hurdle) with covariates such as dataset age, sample size and the citation impact of the originating paper. Sensitivity analyses test how robust the estimate is to the definition of reuse and to the construction of the quality score.

 The expected outcome is an open dataset linking GEO metadata quality to reuse,an effect estimate with clearly stated limits, and a reusable pipeline. The result provides international, domain-specific evidence on the question at the heart of the ELEVATE-DM research component: what well-managed data are actually worth.

 Prerequisites: Python or R; regression modelling; interest in genomics data.Experience with web APIs and text mining is an advantage.

For more info contact: Hedi Peterson hedi.peterson@ut.ee 


## From prose to machine-actionable DMPs

MSc thesis

Many funders now require a data management plan (DMP), but most plans are free-text documents that are submitted once and never read by a machine. Machine-actionable DMPs (maDMPs) express the same information in a structured form that follows the RDA DMP Common Standard. That information covers datasets, storage, licences, responsibilities and costs. In this form, repositories, storage providers and research information systems can act on the plan automatically. Planning tools such as the DMP Tool already export this format, but the large body of existing prose DMPs remains locked away, and nobody knows how well their content can be recovered automatically.

The student will build and evaluate a pipeline that converts free-text DMPs into RDA DMP Common Standard JSON. About 100 plans, drawn from publicly available DMPs, will be annotated by hand as the gold standard. Candidate sources are the DMP Tool’s public plans and Horizon 2020 or Horizon Europe DMP deliverables published through CORDIS and Zenodo. The pipeline combines rule-based extraction with a locally run open-weight language model. It will be evaluated field by field (precision, recall, F1) and for schema validity. It is then applied to the larger corpus to analyse what researchers actually plan: data volumes, storage and compute needs, licences, repositories, and gaps between what the plan says and what funders require.

 The outcome is an open-source extractor, a benchmark for DMP extraction, and an empirical picture of researchers’ data needs. The work is designed to inform the machine-actionable DMP prototype planned in the ELEVATE-DM project, which will link the University of Tartu project portal with high-performance computing resources.

 Prerequisites: Python; coursework in NLP or information extraction; familiarity with JSON and JSON Schema. An interest in research infrastructure and open science is an advantage.

For more info contact: Hedi Peterson hedi.peterson@ut.ee 

## Kas automaatsed FAIR-hindajad on omavahel nõus?

Do automated FAIR assessors agree?

Bakalaureusetöö

Teadusandmete puhul räägitakse üha rohkem FAIR-põhimõtetest: andmed peaksid olema leitavad, kättesaadavad, koostalitlusvõimelised ja korduskasutatavad. Kui hästi andmestik neile põhimõtetele vastab, hinnatakse sageli automaatsete tööriistadega, näiteks F-UJI, FAIR-Checker ja FAIR Evaluator. Tööriist kontrollib andmestiku metaandmeid ja annab tulemuseks skoori. Tööriistad põhinevad aga erinevatel mõõdikutel ning pole selge, kas nad hindavad sama andmestikku sarnaselt. Kui üks tööriist peab andmestikku FAIR-iks ja teine mitte, on küsitavad ka kõik järeldused, mis sellise skoori peale ehitatakse, näiteks väide, et FAIR-andmeid kasutatakse rohkem.

Töö eesmärk on välja selgitada, kui hästi automaatsete hindajate tulemused langevad Eesti andmestike puhul kokku omavahel ja eksperdi hinnanguga. Tudeng koostab 100–150 andmestiku valimi Tartu Ülikooli andmerepositooriumist DataDOI, Eesti avaandmete portaalist (avaandmed.eesti.ee) ja Zenodost. Ta hindab andmestikud kolme tööriistaga ning viib tulemused FAIR-alapõhimõtete kaupa ühisele skaalale. Umbes 30 andmestikku hindavad käsitsi kaks inimest, et saada võrdluseks eksperthinnang. Kokkulangevust mõõdetakse klassisisese korrelatsioonikordaja (ICC) ja Coheni kapa abil. Lisaks uuritakse, millistes alapõhimõtetes tööriistad kõige rohkem lahknevad ja miks. Samuti vaadatakse, kui palju muutub andmestike jagunemine „FAIR” ja „mitte-FAIR” rühmaks, kui lävendeid nihutada.

 Tulemuseks on avalik hinnangute andmestik, kokkulangevuse analüüs ja soovitused, millist tööriista ja milliseid lävendeid Eesti andmestike hindamisel kasutada. Töö tulemusi kasutatakse ELIXIR Eesti ja ELEVATE-DM projekti andmehaldusuuringutes.

 Eeldused: Python või R; huvi avatud teaduse ja andmehalduse vastu. Varasemaid teadmisi FAIR-põhimõtetest pole vaja.

Lisainfo: Hedi Peterson hedi.peterson@ut.ee 


## Can AI Agents Reproduce Bioimage Analysis Papers? Evaluating and Improving Open Models and Specialised Agents 

MSc thesis

LLM agents can now write and run image analysis code. It is still unclear whether they can reproduce the results of published bioimage analysis pipelines. The student with their supervisor  will pick a small set of published pipelines with open data and numeric results, such as segmentation, counting or tracking. They will turn these into reproduction tasks with automatic checks against known answers. 
The tasks are run with general open-model agent harnesses, (mini-swe-agent, Hermes), and with open LLM models (such as DeepSeek, GLM-5.3-Flash) with/without specialised imaging solutions (Agentic-J, napari-mcp). The student analyses why reproductions fail and builds a taxonomy of failures, including whether the agent really applies the methods or takes values from the paper, the web or the model's own memory. The student then implements specific harness improvements, such as skills, verification steps or visual self-checks. Each improvement is tested separately against the baseline, and results where an improvement does not help are reported too.

For more information, contact: Marilin Moor marilin.moor@ut.ee


## Eesti 10 km rahvajooksude osalus- ja tulemustrendid maakondade lõikes aastatel 2016–2026

Bakalaureusetöö

Töö käigus kogub üliõpilane Eesti rahvajooksude 10 km distantsi tulemused viimase kümne aasta kohta ning ühtlustab need üheks järjepidevaks anonüümseks andmestikuks. Andmestiku põhjal analüüsitakse, kuidas on osalus ja tulemused ajas muutunud ning kuidas need maakonniti erinevad, arvestades rahvaarvu, sugu ja vanuserühmi. Võimalikud uurimisküsimused on näiteks, kas maakondade vahelised erinevused osaluses on vähenemas või suurenemas ning kuidas mõjutas osalust COVID-19 periood, kui palju mõjutab ilm jooksudel osalemist jne.

P.S. Kas LLM ei saaks seda kõike teha? Esialgsete katsetuste valguses suutis see lahendada probleemi osaliselt, täielikuks lahenduseks oleks tegemist agendi ebamõistliku kasutusega. 

Lisainfo: Marilin Moor marilin.moor@ut.ee
