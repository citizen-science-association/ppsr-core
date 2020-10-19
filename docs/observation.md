---
id: observation
title: Observation Data Model
sidebar_label: Observation (ODM)
description: Observation Data Model (ODM)

---

An observation is a collection of information recorded based on something that has been seen, heard, or noticed. In the context of PPSR Core; observations represent the information collected by the public.

The **O**bservation **D**ata **M**odel describes the structure of observational records collected as part of Public Participation in Scientific Research (Citizen Science). It is the basic unit of research information and includes:
- Location
- Time
- Additional attributes specific to the dataset

This is still a work in progress and the Data & Metadata working group is sorting through existing platforms and projects to find commonalities. Please [contact us](contribute) to get involved.

## Information Sharing Example
Scientists and platform managers need to share scientific observations about the world. They need to do so to advance science and decision making. And they may also need to do so to leverage the unique strengths of various platforms to improve data quality. For example, a project on [CitSci.org](https://www.citsci.org/) might ask its volunteers to collect species occurrence observations of a rare butterfly. But they also need to crowd source the identification of this specific rare butterfly. Imagine their delight when they learn they can automatically share observations submitted to their CitSci project and have these appear on [iNaturalist](https://www.inaturalist.org/) and then have this online community verify the taxonomic identity of the butterfly observation to make this observation become deemed as “Research Grade.” Then, their delight grows when they learn that all Research Grade observations are automatically shared with the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/). Now we have observations submitted to one platform becoming verified on another, sent back to the original platform so it can be represented as Research Grade, and also being sent to the go-to-source for global biodiversity data worldwide.

## Future Work
It is intended to comprise a series of domain appropriate sets of attributes and/or schemas which are required for effective and useful aggregation of data for scientific use. An example of this would be the Darwin Core standard used for global biodiversity occurrence data. Other domains also have their specific standards. The ODM will recommend application of relevant existing domain standards where they exist, develop new models where they don't, and will seek to identify and standardize common attributes across domains to enable multi-disciplinary aggregation of datasets on those attributes for cross-disciplinary analysis.


<table className="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Suffix abbreviation</th>
<th title="Field #2">Name of standard</th>
<th title="Field #3">URL</th>
</tr></thead>
<tbody><tr>
<td>dct / dcterms / dcmitype</td>
<td>Dublin Core Ontology</td>
<td>
<a href="https://purl.org/dc/terms/">purl.org/dc/terms/</a> 
<br/>
<a href="https://purl.org/dc/dcmitype/">purl.org/dc/dcmitype/</a>
 </td>
</tr>
<tr>
<td>dwc / dwcterms</td>
<td>Darwin Core Terms</td>
<td>
<a href="http://rs.tdwg.org/dwc/terms/">rs.tdwg.org/dwc/terms/</a>
</td>
</tr>
<tr>
<td>cosi</td>
<td>Core Ontology of Scientific Investigation</td>
<td>
<a href="https://purl.org/net/cosi#">purl.org/net/cosi#</a>
</td>
</tr>
<tr>
<td>dcat</td>
<td>Data Catalog Vocabulary</td>
<td>
<a href="https://www.w3.org/TR/vocab-dcat/">www.w3.org/TR/vocab-dcat/</a>
</td>
</tr>
<tr>
<td>prov</td>
<td>PROV-DC</td>
<td>
<a href="https://www.w3.org/ns/prov#">www.w3.org/ns/prov#</a>
</td>
</tr>
<tr>
<td>foaf</td>
<td>Friend of a Friend Ontology</td>
<td>
<a href="http://xmlns.com/foaf/0.1/">xmlns.com/foaf/0.1/</a>
</td>
</tr>
<tr>
<td>ISO</td>
<td>ISO 19115</td>
<td>
<a href="https://www.iso.org/obp/ui/#iso:std:iso:19115:ed-1:v1:en">www.iso.org/obp/ui/#iso:std:iso:19115:ed-1:v1:en</a>
</td>
</tr>
</tbody></table>