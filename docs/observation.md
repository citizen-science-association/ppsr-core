---
id: observation
title: Observation Data Model
sidebar_label: Observation (ODM)
description: Observation Data Model (ODM)

---

An observation record is a collection of information associated with a unique data collection activity or event. The information (attribute data) comprising a record is generally based on something that has been seen, heard, noticed or provided by a survey participant. A collection of observation records comprises a dataset.

The **O**bservation **D**ata **M**odel describes a number of “profiles” for particular domains (or areas of science) and “Core” sets of attributes which must be included for particular types of surveys. These Core attribute sets can apply across multiple, but not necessarily all, domain profiles. The diagram below provides a graphical representation of how this works. 

The purpose of defining “core” attributes for domain profiles is to enable data from different datasets to be aggregated for larger scale analysis than is possible with individual datasets. When attributes are common across different domain profiles, different datasets from within that group of domain profiles can be joined to enable analysis and insights which are otherwise impossible to achieve – core attributes enable cross-domain dataset joining. Owing to the potentially infinite variability and complexity of survey requirements it is possible that core attributes for one set of profiles may not include a required attribute that is included as a core attribute for a different set of profiles. In this case the latter may be adopted by the survey needing to use it, instead of creating a completely new and different attribute extension for the profile needing it.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Docusaurus with Keytar"
  src={useBaseUrl('img/observation-schematic-2020-0.png')}
/>



ODM domain profiles will use existing domain-specific data standards as much as possible, where they exist. The table below provides profiles for current known domain standards and indicates where such standards either do not yet exist of if they do, they have not yet been discovered by the PPSR-Core team. Development of these profiles is still a work in progress and the PPSR-Core project team is continuing to develop new profiles and refine existing ones. We are particularly keen to have expert domain-based knowledge contributing to this process, especially in domain areas which are under-represented and not well described. Please see our [contribute page](/docs/contribute) to get involved

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