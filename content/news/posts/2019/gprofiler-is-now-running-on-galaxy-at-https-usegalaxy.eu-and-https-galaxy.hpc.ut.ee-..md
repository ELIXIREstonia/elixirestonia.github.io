---
date: 2019-11-20
authors:
  - elixir
original_url: node/292
hide:
  - toc
---

# gProfiler is now running on Galaxy at https://usegalaxy.eu and https://galaxy.hpc.ut.ee/.

<p dir="ltr"><a href="https://biit.cs.ut.ee/gprofiler">gProfiler</a> (<a href="https://biit.cs.ut.ee/gprofiler">https://biit.cs.ut.ee/gprofiler</a>)&nbsp; is a toolset for functional enrichment analysis and conversions of gene lists that is now available also at Galaxy platform. Galaxy is meant for supporting data intensive research in a convenient manner through building and using custom workflows.</p>

<p>Biological data analysis often deals with lists of genes arising from various studies. The gProfiler toolset is widely used for finding biological categories enriched in gene lists, conversions between gene identifiers and mappings to their orthologs. The mission of gProfiler is to provide a reliable service based on up-to-date high quality data in a convenient manner across many evidence types, identifier spaces and organisms.</p>

<p dir="ltr">gProfiler relies on data retrieved from Ensembl database and fungi, plants or metazoa specific versions of Ensembl Genomes, and parasite specific data from WormBase ParaSite. In addition to Gene Ontology, supported data sources include KEGG, Reactome, WikiPathways, TRANSFAC, miRTarBase, Human Protein Atlas, CORUM and HP.</p>

<p>gProfiler supports close to <a href="https://biit.cs.ut.ee/gprofiler/page/organism-list">500 organisms</a> and accepts <a href="https://biit.cs.ut.ee/gprofiler/page/namespaces-list">hundreds of identifier types</a>.</p>

<p>gProfiler has been supporting developers by offering a standardized access through public APIs. The usage of APIs was simplified by wrapping them into Python and R packages. The latter, `gprofiler2` (which was published as a Conda Forge package named `r-gprofiler2`), was wrapped to be used as a set of Galaxy tools:</p>

<ul>
	<li dir="ltr">gProfiler GOSt performs functional enrichment analysis, also known as over-representation analysis (ORA) or gene set enrichment analysis, on input gene list; in addition to the detailed tabular results, it can also create a Plotly graph with the Manhattan plot very similar to the one shown by the <a href="https://biit.cs.ut.ee/gprofiler/">web tool</a>.</li>
	<li dir="ltr">gProfiler Convert enables to convert between various gene, protein, microarray probe and numerous other types of namespaces</li>
	<li dir="ltr">gProfiler Orth translates gene identifiers between organisms</li>
	<li dir="ltr">gProfiler SNPense maps SNP rs-codes to gene names, chromosomal coordinates and variant effects</li>
	<li dir="ltr">gProfiler Random fetches a (not actually random) list of gene identifiers; useful for testing purposes.</li>
</ul>

<p dir="ltr">gProfiler Galaxy toolset was admitted to the Galaxy Tools IUC. It is distributed via the ToolShed and can be installed as a bundle with the gProfiler tool suite repository.</p>

<p dir="ltr"><img alt="" height="468" src="https://lh3.googleusercontent.com/WsyGZvB33KSWWbXZXE5QqkX7JVQ8LLkmoWa3o5qnQX6LU4ua2ABSBnJTq7PNYNfTo2fvmgsvZdR6GLBg3edi7V2NKoKoyzGpkZn4IStdDvNbEd7xiP455GzsIc8eoVH6k7qO0WU4" width="624" /></p>

<p dir="ltr">gProfiler is part of the ELIXIR infrastructure. It belongs to the portfolio of <a href="https://elixir-europe.org/platforms/interoperability/rirs">ELIXIR Recommended Interoperability Resources</a>.</p>

<p>gProfiler is developed and maintained in Estonia, at the <a href="https://www.ut.ee/en">University of Tartu</a>, <a href="https://www.cs.ut.ee/en">Institute of Computer Science</a>, <a href="https://biit.cs.ut.ee">BIIT research group</a>. <a href="https://elixir.ut.ee/services">It is an ELIXIR Estonia service</a>.</p>

<p>Our latest publication of the g:Profiler tool - Uku Raudvere, Liis Kolberg, Ivan Kuzmin, Tambet Arak, Priit Adler, Hedi Peterson, Jaak Vilo: <a href="https://academic.oup.com/nar/article/47/W1/W191/5486750">g:Profiler: a web server for functional enrichment analysis and conversions of gene lists (2019 update) Nucleic Acids Research 2019; doi:10.1093/nar/gkz369&nbsp;</a></p>

