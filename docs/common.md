---
id: common
title: Common Data Model
sidebar_label: Common (CDM)
description: Common Data Model (CDM)

---
**C**ommon **D**ata **M**odel **(CDM)** is a data model that glues Projects, Datasets, and Observations together. As a central object, it is required for complete implement of this standard. 

:::caution
This is the extent of the common schema. Additional attributes required in the programOrCampaign entity for any given implementation should be considered as extensions to this schema.
:::

## Entity relationship diagram
This graphically describes the relationships between the primary class entities in overall model.

**[current approved version: 2.0.0]**

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Docusaurus with Keytar"
  src={useBaseUrl('img/common-erd-v2.png')}
/>;


## Core Attributes
This is a tabular representation of the CDM attributes and their definitions.

**[current approved version: 2.0.0]**

<table className="table table-condensed">
<thead><tr><th title="Field #1">Entity</th>
<th title="Field #2">Attribute or Entity Name</th>
<th title="Field #3">Description</th>
<th title="Field #4">Data  or Entity Type</th>
<th title="Field #5">Obligation</th>
<th title="Field #6">Multiplicity</th>
<th title="Field #7">Synonym term in other standards</th>
</tr></thead>
<tbody><tr>
<td>activity</td>
<td> </td>
<td>An activity is analagous to a survey and comprises 2 components: a metadata schema; and an observational data model (ie. the data schema into which observational records are created). The data schema definition will represent a specific data collection protocol. In the context of an activity/survey, these exist as a singular pair of objects. Usage of an activity is always made in the context of an event, ie. A non-persistent time-based usage of an observational data schema. Observational data schemas are domain and protocol specific, and may be published in other repositories.</td>
<td>Class</td>
<td>Optional</td>
<td>0:n</td>
<td>dcmitype:Event</td>
</tr>
<tr>
<td>activity</td>
<td>activityId</td>
<td>A globally unique identifier for an activity.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>activity</td>
<td>datasetMetadataSchema</td>
<td>The datasetMetadataSchema (DDM) describes the metadata pertaining to the specific observationalDataSchema selected and it&#39;s associated data. There is a 1:1 relationship between the datasetMetadataSchema and the observationalDataSchema. The datasetMetadataSchema is consistent for all classes of observationalDataDomains. This is a class object.</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>datasetMetadataSchema</td>
<td>dmmCoreTerms</td>
<td>The set of core terms which comprise the PPSR-Core Dataset Metadata Model (DMM). These are the minimum set of attributes required to adequately describe a dataset and enable exchange of dataset metadata between data catalogues.</td>
<td>Class</td>
<td>Optional</td>
<td>1:1</td>
<td>dcat:CatalogRecord</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:identifier</td>
<td>Persistent identifier of a dataset (associated with the project). Should equate to the datasetExternalId if data is stored in an external repository.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dwcterms:datasetID<br/>cosi:hasIdentifierValue</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:dateSubmitted</td>
<td>The date a dataset submission was published into a receiving system. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>date time</td>
<td>Mandatory</td>
<td>1:1</td>
<td>prov:generatedAtTime<br/>CI_Citation date</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:modified</td>
<td>The most recent dateTime at which the resource was changed. Uses the ISO 8601:2004 (E) dateTime standard&quot;,</td>
<td>date time</td>
<td>Mandatory</td>
<td>1:1</td>
<td>prov:generatedAtTime</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>datasetStatus</td>
<td>Indicator of the current status of a dataset (e.g. if it already published)</td>
<td>vocabulary</td>
<td>Mandatory</td>
<td>1:1</td>
<td>cosi:hasStatus</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:title</td>
<td>The name of the dataset for discovery and citation purposes.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dwcterms:datasetName<br/>CI_Citation.title<br/>cosi:hasTitle</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:abstract</td>
<td>Abstract or description of the dataset.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>cosi:hasDescription</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:accessRights</td>
<td>Category of rights to use IP contained in the dataset or a type of use applied to the dataset.</td>
<td>vocabulary</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dct:rights</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:bibliographicCitation</td>
<td>Format to be structured as follows: &#39;Author/Rightsholder. (Year). Title of data set (Version number) [Description of form]. Retrieved from https://&lt;website url&gt;&#39;. The attribution text string to be cited by people who use the dataset.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:rightsHolder</td>
<td>The name of the organisation which is the legal custodian of the dataset.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>prov:wasAttributedTo</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:license</td>
<td>License applied to the dataset.</td>
<td>vocabulary</td>
<td>Mandatory</td>
<td>1:1</td>
<td>cosi:hasLicenceInformation</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:language</td>
<td>The machine language the dataset and associated metadata is encoded in. Uses Unicode Standard UTF-8 (ISO/IEC 10646:2014 plus Amendment 1).</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td>MD_DataIdentification.characterSet</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>datesetStartDate</td>
<td>The date on which the dataset collection survey commences. This may reflect the earliest record in the dataset or when a survey is open to begin data recording. This date may be =&gt; the projectStartDate. Uses the ISO 8601:2004 (E) dateTime standard.</td>
<td>date time</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>datasetEndDate</td>
<td>The date on which the dataset collection survey concluded. Uses the ISO 8601:2004 (E) dateTime standard.</td>
<td>date time</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>methodType</td>
<td>The type of methodology or sampling protocol used to collect the dataset.</td>
<td>vocabulary</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dataAccessMethod</td>
<td>A list of available methods for people to access the dataset.</td>
<td>vocabulary</td>
<td>Mandatory</td>
<td>1:n</td>
<td> </td>
</tr>
<tr>
<td>datasetMetadataSchema</td>
<td>methodSpecification</td>
<td>Details of the methodology or sampling protocol used to collect the dataset.</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:1</td>
<td>cosi:hasRelatedMaterial</td>
</tr>
<tr>
<td>methodSpecification</td>
<td>samplingProtocolDomain</td>
<td>The name of the methodology or sampling protocol used to collect the dataset.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>methodSpecification</td>
<td>samplingProtocolMethod</td>
<td>The sampling protocol method used for a given survey.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td>dcterms:samplingProtocol<br/>dwcterms:samplingProtocol<br/>cosi:hasProcedure</td>
</tr>
<tr>
<td>methodSpecification</td>
<td>methodAbstract</td>
<td>Description of the methodology or sampling protocol used to collect the dataset.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>methodSpecification</td>
<td>methodUrl</td>
<td>URL address of an officially published article which describes the methodology or sampling protocol used to collect the dataset.</td>
<td>url</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>methodSpecification</td>
<td>methodDocUrl</td>
<td>URL link to an uploaded document artefact which describes the methodology or sampling protocol used to collect the dataset.</td>
<td>url</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>datasetMetadataSchema</td>
<td>observationalDataModel</td>
<td>The observationalDataDomain contains an array of different domain schemas (eg. biodiversity, water, atmosphere, ecology, geology, geomorphology, astronomy, etc.). Each domain will contain an array of standard protocols which apply in that domain context. The domains listed are not a comprehensive list and are expected to be appended to over time as new domains are specified and appropriate samplingProtocol standards are defined for them. <br/>This class object serves only to structurally differentiate and describe the different domains and is not a structural element of the observationalDataModel (ODM).</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcat:Dataset</td>
</tr>
</tbody></table>

