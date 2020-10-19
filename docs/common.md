---
id: common
title: Common Data Model
sidebar_label: Common (CDM)
description: Common Data Model (CDM)
hide_table_of_contents: true

---
**C**ommon **D**ata **M**odel **(CDM)** is a data model that glues Projects, Datasets, and Observations together. As a central object, it is required for complete implement of this standard. 

:::caution
This is the extent of the common schema. Additional attributes required in the programOrCampaign entity for any given implementation should be considered as extensions to this schema.
:::

## Entity relationship diagram
This graphically describes the relationships between the primary class entities in the overall model.

**[current approved version: 2020.0]**

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Docusaurus with Keytar"
  src={useBaseUrl('img/common-erd-2020-0.png')}
/>;


## Core Attributes
This is a tabular representation of the CDM attributes and their definitions.

**[current approved version: 2020.0]**

<table className="table table-condensed">
<thead><tr><th title="Field #1">Entity</th>
<th title="Field #2">Attribute Name</th>
<th title="Field #3">Description</th>
<th title="Field #4">Data Type</th>
<th title="Field #5">Obligation</th>
<th title="Field #6">Multiplicity</th>
<th title="Field #7">Synonym term in other standards</th>
</tr></thead>
<tbody><tr>
<td>programOrCampaign</td>
<td> </td>
<td>An overarching context for a set of related projects. Projects may be related in the context of a common funding source, a common thematic or conceptual framework, or other such context. Note that projects do not need to be created in the context of a programOrCampaign, but that a programOrCampaign can be a container for 1:many projects. Entity equates to OWL 2.0 Class object.</td>
<td> </td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>programOrCampaign</td>
<td>programId</td>
<td>The identifier of the initiative (e.g., overarching research program or funding initiative) encompassing the project&quot;,</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>programOrCampaign</td>
<td>programName</td>
<td>The initiative (e.g., overarching research program) encompassing the project (e.g., Horizon 2020)</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>programOrCampaign</td>
<td>programDescription</td>
<td>General description/summary  of the Research Program or funding initiative.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>programOrCampaign</td>
<td>language</td>
<td>The encoding language used for the project. Uses Unicode Standard UTF-8 (ISO/IEC 10646:2014 plus Amendment 1).</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:language<br/>MD_DataIdentification.characterSet</td>
</tr>
<tr>
<td>project</td>
<td> </td>
<td>A project is an overarching context for a set of associated activities which contribute to a specific objective. Entity equates to OWL 2.0 Class object.<br/>Refer to the PMM Model for details of the project metadata schema.</td>
<td> </td>
<td>Mandatory</td>
<td>1:n</td>
<td> </td>
</tr>
</tbody></table>