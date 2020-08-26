---
id: dataset
title: Dataset
description: Schema for Datasets in PPSR

---
# Dataset Metadata Model (DMM)
## Entity Relationship Diagram
 This graphically describes the relationships between the class entities in the dataset metadata model. 

**[current approved version: 2.0.0]**

## Core Attributes
This is a tabular representation of the DMM core model attributes and their definitions. 

**[current approved version: 2.0.0]**

<table className="table table-bordered table-hover table-condensed">
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

## Extension attributes
This is a tabular representation of the DMM extension model attributes and their definitions. 

**[current approved version: 2.0.0]**

<table className="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Entity</th>
<th title="Field #2">Attribute or Entity Name</th>
<th title="Field #3">Description</th>
<th title="Field #4">Data  or Entity Type</th>
<th title="Field #5">Obligation</th>
<th title="Field #6">Multiplicity</th>
<th title="Field #7">Synonym term in other standards</th>
</tr></thead>
<tbody><tr>
<td>Project</td>
<td>projectId</td>
<td>Globally unique identifier (GUID) for the project. System generated.</td>
<td>Text</td>
<td>Optional</td>
<td>0:1</td>
<td>dcterms:identifier<br/>cosi:hasIdentifier</td>
</tr>
<tr>
<td>datasetMetadataSchema</td>
<td>dmmExtensionTerms</td>
<td>The set of extension terms which comprise the PPSR-Core Dataset Metadata Model (DMM). These terms enhance the description of a dataset and improve the ability of users of the dataset to understand or interpret fitness for use.</td>
<td>Class</td>
<td>Optional</td>
<td>0:1</td>
<td>dcat:CatalogRecord</td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>datasetUpdateFrequency</td>
<td>How often the dataset is updated.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td>dcterms:accrualPeriodicity</td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>datasetExternalUrl</td>
<td>Web location where the dataset will be published.</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>dcat:downloadURL</td>
<td>A URL from which dataset observation records can be accessed and downloaded.</td>
<td>url</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>datasetGeographicCoverage</td>
<td>Geographic/spatial scope of coverage of the collection sites of data records within the dataset. Uses OGC GeoAPI (09-083r3) standard.</td>
<td>geoObject</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>cosi:hasHypothesis</td>
<td>The experimental hypothesis underpinning the experimental design for which the dataset was collected.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>cosi:hasInstrument</td>
<td>Details of instrumentation used in the data recording.</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>dataQualityAssuranceMethod</td>
<td>Description of the types of data quality assurance methods that were applied in capturing, curating and managing the dataset.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>dataQualityAssuranceDescription</td>
<td>Detailed description of the methods used to quality assure the dataset both during capture and post processing. This is important for data users to understand the processes applied to the data to verify or enhance it&#39;s quality for use.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>usageGuide</td>
<td>Description of any constraints and biases in the dataset which are associated with how the data collection methodology was applied, eg. Concentration of data points along access networks, targeted/non-random approaches causing bias towards certain factors at the expense of other factors, etc.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>activityCount</td>
<td>Number of data recording events in the dataset</td>
<td>integer</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>datasetAssociatedMedia</td>
<td>Image(s) and/or other media used to graphically enhance or represent the dataset. This is a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>datasetAssociatedMedia</td>
<td>datasetAssociatedMediaType</td>
<td>The category of media type representing the type of dataset media item chosen</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:1</td>
<td>foaf:img</td>
</tr>
<tr>
<td>datasetAssociatedMedia</td>
<td>datasetAssociatedMediaFile</td>
<td>Media file upload representing the type of dataset media chosen</td>
<td>mediaFile</td>
<td>Mandatory</td>
<td>1:1</td>
<td>foaf:img</td>
</tr>
<tr>
<td>datasetAssociatedMedia</td>
<td>datasetAssociatedMediaCredit</td>
<td>Attribution credit for the logo image or other media</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:bibliographicCitation</td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>dataAccuracyDeclarations</td>
<td>Generalised categories that best reflect the accuracy of records in the dataset.</td>
<td>Class</td>
<td>Optional</td>
<td>0:4</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>spatialAccuracy</td>
<td>A generalised category that best reflects the least spatially accurate record in the dataset.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>temporalAccuracy</td>
<td>A generalised category that best reflects the least accurate record in the dataset in respect to date of the observation.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>speciesIdentificationAccuracy</td>
<td>A generalised category that best reflects the least accurate record in the dataset for species identification. Choose &#39;Not applicable&#39; species fields are not included in the dataset.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>nonTaxonomicAccuracy</td>
<td>A generalised category that best reflects the least accurate record in the dataset in respect to non-biodiversity attributes.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>dataManagementPlan</td>
<td>Details of a data management plan associated with the dataset.</td>
<td>Class</td>
<td>Optional</td>
<td>0:1</td>
<td>cosi:hasRelatedMaterial</td>
</tr>
<tr>
<td>dataManagementPlan</td>
<td>isDataManagementPolicyDocumented</td>
<td>Indicator of whether a data management plan has been prepared for the dataset.</td>
<td>boolean</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>dataManagementPlan</td>
<td>dataManagementPolicyDescription</td>
<td>Description of data management policy</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dataManagementPlan</td>
<td>dataManagementPolicyURL</td>
<td>Link to data management policy description</td>
<td>url</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dataManagementPlan</td>
<td>dataManagementPolicyDocument</td>
<td>Document describing data management policy</td>
<td>url</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>dataManagementPlan</td>
<td>dataManagementPrinciplesConformance</td>
<td>Assessment of the conformance of the data management principles applied to the dataset with standard GEOlabels.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
</tbody></table>

## Vocabulary

**[current approved version: 2.0.0]**
  
  <table className="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Entity</th>
<th title="Field #2">Attribute Name</th>
<th title="Field #3">Vocabulary terms</th>
<th title="Field #4">Comments</th>
</tr></thead>
<tbody><tr>
<td>dmmCoreTerms</td>
<td>dcterms:accessRights</td>
<td>Open access<br/>Embargoed access<br/>Restricted access<br/>Pending public release<br/>Metadata only access</td>
<td>Need to validate these terms and adjust as necessary. Must ensure mutual exclusivity and comprehensive coverage.</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dcterms:license</td>
<td>Creative Commons zero (CC 0)<br/>Creative Commons Attribution (4.0) international (CC-BY 4.0)<br/>Creative Commons Attribution Non-commercial (CC-BY-NC)</td>
<td> </td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>datasetStatus</td>
<td>Active - unpublished - unverified<br/>Active - unpublished - partially verified<br/>Active - unpublished - fully verified<br/>Active - published - unverified<br/>Active - published - partially verified<br/>Active - published - fully verified<br/>Complete - unpublished - unverified<br/>Complete - unpublished - partially verified<br/>Complete - unpublished - fully verified<br/>Complete - published - unverified<br/>Complete - published - partially verified<br/>Complete - published - fully verified<br/>Archived - unpublished - unverified<br/>Archived - unpublished - partially verified<br/>Archived - unpublished - fully verified <br/>Archived - published - unverified<br/>Archived - published - partially verified<br/>Archived - published - fully verified</td>
<td>Need to validate these terms and adjust as necessary. Must ensure mutual exclusivity and comprehensive coverage.</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>methodType</td>
<td>Opportunistic/ad-hoc observation<br/>Systematic method-based survey</td>
<td> </td>
</tr>
<tr>
<td>samplingProtocolDomain</td>
<td>samplingProtocolMethodEcology</td>
<td>Air quality - Fixed sensor<br/>Air quality - Mobile sensor<br/>Bat survey - Echolocation recorder<br/>Bat survey - Harp trapping<br/>Beach profile survey - Emery method<br/>Beach profile survey - Optical method<br/>Bird survey - Distance sample (along transect)<br/>Bird survey - Fixed-area<br/>Bird survey - Fixed-time<br/>Bird survey - Fixed-time &amp; Fixed-area<br/>Bird survey - Mist netting<br/>Fauna survey - 2-Ha track plot method<br/>Fauna survey - Active search<br/>Fauna survey - Aerial distance sampler method<br/>Fauna survey - Cage trapping<br/>Fauna survey - Call playback<br/>Fauna survey - Camera trapping<br/>Fauna survey - Elliot trapping<br/>Fauna survey - Funnel trapping<br/>Fauna survey - Hair tubes<br/>Fauna survey - Nest box monitoring<br/>Fauna survey - Pitfall trapping<br/>Fauna survey - Scat survey<br/>Fauna survey - Spotlight search<br/>Fauna survey - Strip transect aerial survey<br/>Fauna survey - Turtle trapping<br/>Fish survey - Electrofishing<br/>Fish survey - Set net/trap<br/>Fish survey - Sweep netting<br/>Insect survey - Black light<br/>Insect survey - Malaise trap<br/>Insect survey - Baited trap<br/>Insect survey - Glue trap<br/>Insect survey - Sweep netting<br/>Riparian condition assessment - Rapid Appraisal of Riparian Condition (RARC)<br/>Vegetation condition assessment<br/>Vegetation survey - General transect &amp; plot<br/>Vegetation survey - Intensive inventory<br/>Vegetation survey - Step point method<br/>Water quality - Standardised physical/chemical attribute measurements<br/>Water quality - Macroinvertebrate survey</td>
<td>Possible additional sampling protocols may include:<br/>       samplingProtocolWater<br/>       samplingProtocolMarine<br/>       samplingProtocolLimnology<br/>       samplingProtocolClimate<br/>       samplingProtocolAtmosphere<br/>       samplingProtocolSoils<br/>       samplingProtocolGeology<br/>       samplingProtocolChemistry<br/>       samplingProtocolPhysics<br/>       etc.<br/><br/>Methods should be unique within a vocabulary, but may occur in more than one vocabulary.<br/><br/>Domain-based protocols vocabularies may already exist for other domains, but they have not been identified as part of this current activity.</td>
</tr>
<tr>
<td>dmmCoreTerms</td>
<td>dataAccessMethod</td>
<td>Open access structured raw data download from this system<br/>Open access opaque raw data file attached in this system<br/>Limited structured raw data access in this system - via request (subject to embargo)<br/>Opaque raw data file attached in this system - via request<br/>Open access structured raw data download from external source<br/>Closed access structured raw data download from external source<br/>Application Programming Interface (API)<br/>Raw data not available<br/>Only derived/interpreted data products available</td>
<td> </td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>datasetUpdateFrequency</td>
<td>Triennial<br/>Biennial<br/>Annual<br/>Semi-annual<br/>Three times a year<br/>Quarterly<br/>Bi-monthly<br/>Monthly<br/>Semi-monthly<br/>Bi-weekly<br/>Three times a month<br/>Weekly<br/>Semi-weekly<br/>Three times a week<br/>Daily<br/>Continuous<br/>Irregular<br/>No further updates</td>
<td>Need to validate these terms and adjust as necessary. Must ensure mutual exclusivity and comprehensive coverage.</td>
</tr>
<tr>
<td>dmmExtensionTerms</td>
<td>dataQualityAssuranceMethod</td>
<td>Data owner curated<br/>Subject matter expert record verification<br/>Crowd-sourced record verification<br/>Record annotation<br/>System supported data attribute configuration<br/>No DQ methods used<br/>Not applicable</td>
<td>Need to validate these terms and adjust as necessary. Must ensure mutual exclusivity and comprehensive coverage.</td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>spatialAccuracy</td>
<td>High<br/>Medium<br/>Low</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>temporalAccuracy</td>
<td>High<br/>Medium<br/>Low</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>speciesIdentificationAccuracy</td>
<td>High<br/>Medium<br/>Low</td>
<td> </td>
</tr>
<tr>
<td>dataAccuracyDeclarations</td>
<td>nonTaxonomicAccuracy</td>
<td>High<br/>Medium<br/>Low</td>
<td> </td>
</tr>
<tr>
<td>datasetAssociatedMedia</td>
<td>datasetAssociatedMediaType</td>
<td>Image file<br/>Image URL<br/>Audio file<br/>Audio URL<br/>Video file<br/>Video URL</td>
<td> </td>
</tr>
</tbody></table>