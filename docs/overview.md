---
id: overview
title: Overview
description: Overview of the PPSR Core standard

---
PPSR Core is a set of global, transdisciplinary data and metadata standards for **P**ublic **P**articipation in **S**cientific **R**esearch **(Citizen Science)**. This standard includes: Projects (**P**roject **D**ata **M**odel or **PDM**), Datasets (**D**ataset **D**ata **M**odel, or **DDM**), and Observations (**O**bservation **D**ata **M**odel, or **ODM**). These standards are united, supported, and underlined by a common framework, the **C**ommon **D**ata **M**odel (**CDM**), which illustrates how information is structured within the citizen science domain (figure 1).

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Docusaurus with Keytar"
  src={useBaseUrl('img/ppsr-overview-2020-0.png')}
/>;

## Rationale
Sharing information across databases maximizes everyone’s efforts, getting more “bang for the buck” out of information about citizen science projects everywhere. It leads to current, up-to-date, synchronized project lists and promotes a broader understanding of the global practice of citizen science.

## Other Standards
The PPSR-Core is not setting out to create a new data standard for the sake of creating a new standard. Instead it aims to unify a suite of existing data and metadata standards and ontologies into a standardized framework for application in the citizen science domain. In this respect it either uses the terms already applied in existing standards or provides attribute-level mappings between terms used in the PPSR-Core and equivalent terms used in other applicable standards (sometimes several). Where the PPSR context requires it or where there is no equivalent term available in other applicable standards, this standard will specify new attribute terms in the ppsr namespace.

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

