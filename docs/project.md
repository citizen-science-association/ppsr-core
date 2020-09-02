---
id: project
title: Project Metadata Model
sidebar_label: Project (PMM)
description: Schema for Projects in PPSR

---
A Project is an organized effort carefully designed to achieve a particular goal. In the context of PPSR Core; projects leverage public collection of observations for research. As a coordinated cluster of citizen science activities it is the main organizing unit.

The **P**roject **M**metadata **M**model **(PMM)** is a Metadata Model that describes projects. It includes metadata which describes the context and purpose of activities. Key items include:
- Project Name
- Description
- Aim
- Start Date
- End Date


:::tip Did you know
This model is already being used to share data between: [SciStarter.org](https://scistarter.org/), [Australian Living Atlas](https://www.ala.org.au/), [CitSci.org](https://www.citsci.org/), & [CitizenScience.gov](https://www.citizenscience.gov/)
:::

## Entity Relationship Diagram
**[current approved version: 2.0.0]**

The Project ERD describes the relationships between class entities in the project metadata model. Each project contains a set of [Core Attributes](#core-attributes) which represent the core terms associated with a project. The [Extension Attributes](#extension-attributes) are optional terms associated with a project.  

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Figure 1 Project Metadata Model Entity Relationship Diagram"
  src={useBaseUrl('img/project-erd-v2.png')}
/>


## Core Attributes
**[current approved version: 2.0.0]**

Core attributes are the main fields associated with a project. The table below lists all Core Attributes; their field name & a description of how it is used.

Many of the core terms are mandatory. Every project instance is required to have an entry in this field.

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
<td>programOrCampaign</td>
<td>Project</td>
<td>A project is an overarching context for a set of associated activities which contribute to a specific objective. Entity equates to OWL 2.0 Class object. The project entity is described and defined by this schema.</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectId</td>
<td>Globally unique identifier (GUID) for the project. System generated.</td>
<td>Text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:identifier<br/>cosi:hasIdentifier</td>
</tr>
<tr>
<td>project</td>
<td>projectDateCreated</td>
<td>The date and time that the record was created in the database. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>Date Time</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:created<br/>prov:generatedAtTime</td>
</tr>
<tr>
<td>project</td>
<td>projectLastUpdatedDate</td>
<td>The date and time that the record was last updated in the database. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>Date Time</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:modified<br/>prov:generatedAtTime</td>
</tr>
<tr>
<td>project</td>
<td>projectName</td>
<td>Short name or title of the project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:title<br/>cosi:hasTitle</td>
</tr>
<tr>
<td>project</td>
<td>projectAim</td>
<td>The primary aim, goal or objective of the project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:abstract</td>
</tr>
<tr>
<td>project</td>
<td>projectDescription</td>
<td>Abstract or long description of the project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:description<br/>cosi:hasDescription</td>
</tr>
<tr>
<td>project</td>
<td>hasTag</td>
<td>A set of categorical tags to assist with searching and filtering.</td>
<td>vocabulary </td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>difficultyLevel</td>
<td>Assessed class of project difficulty for untrained participants to undertake. This attribute is used to assist with searching and filtering.</td>
<td>vocabulary </td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>keyword</td>
<td>Keywords (comma separated) which are indexed and aid in searching for and finding projects.</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td>dct:keyword</td>
</tr>
<tr>
<td>project</td>
<td>projectStatus</td>
<td>The activity status of the project.</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:1</td>
<td>cosi:hasStatus</td>
</tr>
<tr>
<td>project</td>
<td>projectStartDate</td>
<td>The actual date that the project began. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>Date Time</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectEndDate</td>
<td>The actual date that the project ended. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>Date Time</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectDuration</td>
<td>The duration or elapsed time over which a project was undertaken. This would typically be derived as the difference in a unit of time between the start and end dates of a project, but may be infinite (if no end date applies) or explicit (if duration is given with no end date specified.</td>
<td>Time</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectScienceType</td>
<td>he category of science represented by the project. Where the project fits into the landscape of science.</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:n</td>
<td>cosi:hasFieldOfStudy</td>
</tr>
<tr>
<td>project</td>
<td>projectUrl</td>
<td>An HTTP URL to an external web site for the project.</td>
<td>uri</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>unRegions</td>
<td>Select list based on UN M.49 coding classification, Geographical supranational regions. Used for enabling regionalized views of projects where projects are active, to make searching for projects more regionally relevant for some users.</td>
<td>vocabulary </td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>language</td>
<td>The encoding language used for the project. Uses Unicode Standard UTF-8 (ISO/IEC 10646:2014 plus Amendment 1).</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:language<br/>MD_DataIdentification.characterSet</td>
</tr>
<tr>
<td>project</td>
<td>projectLocality</td>
<td>Other textual location specification</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td>dwcterms:locality</td>
</tr>
<tr>
<td>project</td>
<td>projectResponsiblePartyName</td>
<td>Name of the primary organization responsible for hosting or implementing the project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>foaf:name<br/>proj:hasLeader<br/>prov:entity</td>
</tr>
<tr>
<td>project</td>
<td>projectResponsiblePartyContactEmail</td>
<td>A contact email address of the party (eg. Organisation) that is responsible for implementing/conducting the project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>contactPoint</td>
<td>The principal contact point for the project. This is a class object.</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:n</td>
<td>dcat:contactPoint</td>
</tr>
<tr>
<td>contactPoint</td>
<td>contactName</td>
<td>The name of the agent appointed as the contact for a project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:n</td>
<td>foaf:name</td>
</tr>
<tr>
<td>contactPoint</td>
<td>meansOfContact</td>
<td>The method(s) described for making contact with the project.</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:n</td>
<td> </td>
</tr>
<tr>
<td>contactPoint</td>
<td>contactDetails</td>
<td>Detailed contact information for a project.</td>
<td>text</td>
<td>Mandatory</td>
<td>1:n</td>
<td> </td>
</tr>
<tr>
<td>contactPoint</td>
<td>contactPointType</td>
<td>The type of contact point for a project.</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectMedia</td>
<td>Image(s) and/or other media used to graphically enhance or represent the project. This is a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>projectMedia</td>
<td>projectMediaType</td>
<td>The category of media type representing the type of project media item chosen</td>
<td>vocabulary </td>
<td>Mandatory</td>
<td>1:1</td>
<td>foaf:img</td>
</tr>
<tr>
<td>projectMedia</td>
<td>projectMediaFile</td>
<td>Media file upload representing the type of project media chosen</td>
<td>mediaFile</td>
<td>Mandatory</td>
<td>1:1</td>
<td>foaf:img</td>
</tr>
<tr>
<td>projectMedia</td>
<td>projectMediaCredit</td>
<td>Attribution credit for the logo image or other media</td>
<td>text</td>
<td>Mandatory</td>
<td>1:1</td>
<td>dcterms:bibliographicCitation</td>
</tr>
<tr>
<td>project</td>
<td>projectGeographicLocation</td>
<td>User-defined geospatial representation point location or geographic extent of the project. Point locations are typically represented as map pins and extents as polygons. Uses OGC GeoAPI (09-083r3) standard.<br/>This is a class object.</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:n</td>
<td>ISO19107</td>
</tr>
<tr>
<td>projectGeographicLocation</td>
<td>projectPinLatitude</td>
<td>Latitude coordinate of the point location of the project. Typically this is where the project is hosted, e.g., a home institution. Uses OGC GeoAPI (09-083r3) standard.</td>
<td>decimal</td>
<td>Optional</td>
<td>0:1</td>
<td>ISO19107</td>
</tr>
<tr>
<td>projectGeographicLocation</td>
<td>projectPinLongitude</td>
<td>Longitude  coordinate of the point location of the project. Typically this is where the project is hosted, e.g. a home institution. Uses OGC GeoAPI (09-083r3) standard.</td>
<td>decimal</td>
<td>Optional</td>
<td>0:1</td>
<td>ISO19107</td>
</tr>
<tr>
<td>projectGeographicLocation</td>
<td>projectGeographicCoverage</td>
<td>User-defined geospatial representation(s) of the project area footprint/extent. Coverage is typically represented in a GeoJSON object which has a centroid coordinate (&#39;centre&#39;) and a definition of the boundary of the shape. Uses OGC GeoAPI (09-083r3) standard.</td>
<td>geoObject</td>
<td>Optional</td>
<td>0:n</td>
<td>ISO19107</td>
</tr>
<tr>
<td>projectGeographicLocation</td>
<td>projectGeographicCoverageCentroidLatitude</td>
<td>Latitude coordinate of the centroid of the project extent area. Latitude coordinate in geographic decimal degrees for the center or home base of the project best representing the project&#39;s location as a point. Uses OGC GeoAPI (09-083r3) standard.</td>
<td>decimal</td>
<td>Optional</td>
<td>0:n</td>
<td>ISO19107</td>
</tr>
<tr>
<td>projectGeographicLocation</td>
<td>projectGeographicCoverageCentroidLongitude</td>
<td>Longitude coordinate of the centroid of the project extent area. Longitude coordinate in geographic decimal degrees for the center or home base of the project best representing the project&#39;s location as a point. Uses OGC GeoAPI (09-083r3) standard.</td>
<td>decimal</td>
<td>Optional</td>
<td>0:n</td>
<td>ISO19107</td>
</tr>
<tr>
<td>project</td>
<td>activity</td>
<td>An activity comprises a schema definition which represents a specific data collection protocol and a schema definition for the metadata associated with all protocols. In the context of an activity, these exist as a singular pair. Usage of an activity is always made in the context of an event, ie. A non-persistent time-based usage of an observational data schema. Observational data schemas are domain and protocol specific, and may be published in other repositories. This is a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:n</td>
<td>dcmitype:Event</td>
</tr>
</tbody></table>

## Extension Attributes
**[current approved version: 2.0.0]**

Extension attributes are the fields whose inclusion is not mandatory for all systems that are compliant with PPSR Core. The table below lists all Core Attributes; their field name, a description of how it is used. Every system is encouraged to include these fields to ensure greater interoperability between systems.

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
<td>project</td>
<td>projectExternalId</td>
<td>The identifier of the project in an external database or repository..</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td>dcterms:publisher<br/>prov:wasAttributedTo</td>
</tr>
<tr>
<td>project</td>
<td>cosi:belongsToProgramme</td>
<td>Name of the Programme or campaign that the project is associated with.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td>cosi:belongsToProgramme</td>
</tr>
<tr>
<td>project</td>
<td>projectOriginalRepository</td>
<td>The name of the project database in which a project was first registered or published. Allows traceability of a project in multiple databases to it&#39;s original registration repository.</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectHowToParticipate</td>
<td>Free text description of how people can get involved in the project. Textual instructions for joining the project.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectTask</td>
<td>Free text description of how people can get involved in the project. Textual instructions for joining the project.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td>cosi:hasActivity</td>
</tr>
<tr>
<td>project</td>
<td>projectIntendedOutcomes</td>
<td>A set of described outcomes intended to be achieved by the project.</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td>proj:objective<br/>cosi:hasOutput</td>
</tr>
<tr>
<td>project</td>
<td>projectOutcome</td>
<td>The outcome(s) achieved or delivered by a project.</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td>cosi:hasConclusion</td>
</tr>
<tr>
<td>project</td>
<td>scientificProcessInvolved</td>
<td>Parts of the process of science that participants exercise</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:n</td>
<td>cosi:hasProcedure</td>
</tr>
<tr>
<td>project</td>
<td>numberOfScientificPublications</td>
<td>Number of peer reviewed publications referencing the project and/or project datasets.</td>
<td>integer</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>numberOfOtherPublications</td>
<td>Number of reports/grey literature publications referencing the project and/or project datasets.</td>
<td>integer</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectAdditionalInformation</td>
<td>Supplemental information for any project-specific data administrators want to make available</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td>cosi:hasRelatedMaterial</td>
</tr>
<tr>
<td>project</td>
<td>projectCountry</td>
<td>The country in which the project is being undertaken. This may be multiple countries. Select list of countries. Used for enabling nationalised views of projects in order to make searchability and applicability of projects more nationally relevant for users. Applies the ISO 3166: 2006 standard for country names.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectEquipment</td>
<td>Required or suggested equipment to be used in the project.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td>cosi:hasInstrument</td>
</tr>
<tr>
<td>project</td>
<td>projectExternalLinks</td>
<td>URL for links to any external resources associated with a project. These may include links to project mobile apps, social media pages, etc.</td>
<td>uri</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectPlannedEndDate</td>
<td>The date that the project is planned to end. Applicable for projects operating over a defined period of time. The date on which the project ended or will end. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>date time</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectPlannedStartDate</td>
<td>The date that the project is planned to commence. The date on which the project began or will begin. Uses the ISO 8601:2004 (E) dateTime standard</td>
<td>date time</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectResearchType</td>
<td>Area of research covered by the project (e.g., ecological research)</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td>cosi:hasFieldOfStudy</td>
</tr>
<tr>
<td>project</td>
<td>projectScientificCollaborators</td>
<td>List of scientific collaborators; i.e. scientists or academic departments using the data collected</td>
<td>text</td>
<td>Optional</td>
<td>0:n</td>
<td>cosi:hasInvestigator</td>
</tr>
<tr>
<td>project</td>
<td>projectAssociatedParty</td>
<td>A party associated with the project with a particular association role. This ia a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>projectAssociatedParty</td>
<td>projectAssociatedPartyId</td>
<td>The id of an associated party. This may be a foreign key to the party information stored in another database entity.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectAssociatedParty</td>
<td>projectAssociatedPartyName</td>
<td>Short text name or title of a party (eg. Organisation) associated with the project and performing a role in the project.</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectAssociatedParty</td>
<td>projectUsFederalSponsor</td>
<td>Name(s) of US Federal entity(s) providing funding to the project</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectAssociatedParty</td>
<td>projectAssociatedPartyRole</td>
<td>A role which a party (eg. Organisation) associated with the project undertakes. Each associated party listed should have a role.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>participationFees</td>
<td>An entity for specifying details of participation fees if they are applicable. This is a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>participationFees</td>
<td>participationFeeApplicable</td>
<td>Flag to indicate whether participation fees are applicable.</td>
<td>boolean</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>participationFees</td>
<td>participationFeeAmount</td>
<td>The currency amount for a fee to participate in the project.</td>
<td>decimal</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectFunding</td>
<td>Type(s) and source(s) of funding contributions to the project. This is a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
<tr>
<td>projectFunding</td>
<td>projectFundingSource</td>
<td>Type of name of the contributor(s)of funding to the project</td>
<td>text</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectFunding</td>
<td>projectFundingSourcePercentageAmount</td>
<td>Percentage of funding contribution for each funding source or funding contributor</td>
<td>decimal</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectFunding</td>
<td>projectFundingSourceCurrencyAmount</td>
<td>Actual amount in local country currency of funding contribution for each funding source or funding contributor</td>
<td>decimal</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectFunding</td>
<td>projectFundingSourceType</td>
<td>Type of funding source(s) contributing to the project. This is a class object.</td>
<td>Class</td>
<td>Mandatory</td>
<td>1:1</td>
<td> </td>
</tr>
<tr>
<td>projectFundingSourceType</td>
<td>fundingSourceTypeSubsetA</td>
<td>Funding source type used in Australia.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectFundingSourceType</td>
<td>fundingSourceTypeSubsetB</td>
<td>Funding source type used in the USA.</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectParticipants</td>
<td>Number of project participants. This is a class object.</td>
<td>Class</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectParticipants</td>
<td>projectParticipantsNumberOfActive</td>
<td>Number of active participants based on project&#39;s definition of activity</td>
<td>integer</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectParticipants</td>
<td>projectParticipantsTotalRegistered</td>
<td>Total number of registered participants</td>
<td>integer</td>
<td>Optional</td>
<td>0:1</td>
<td> </td>
</tr>
<tr>
<td>projectParticipants</td>
<td>projectParticipantAge</td>
<td>The age range classe(s) of participants</td>
<td>vocabulary</td>
<td>Optional</td>
<td>0:n</td>
<td> </td>
</tr>
</tbody></table>

## Vocabulary
**[current approved version: 2.0.0]**

The Vocabulary for Project defines enumerations for attributes above. These are controlled lists of defined terms. These terms may be used either as provided in full or as a reduced subset relevant to the purpose for which they are being used. They should not be modified or augmented with additional terms as this would prevent shareability and effective aggregation. 

<table className="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Entity</th>
<th title="Field #2">Attribute Name</th>
<th title="Field #3">Vocabulary terms</th>
<th title="Field #4">Comments</th>
</tr></thead>
<tbody><tr>
<td>project</td>
<td>hasTag</td>
<td>Fees applicable<br/>Suitable for children<br/>Teaching materials available<br/>Do-it-yourself<br/>Participate from home</td>
<td>Check with SciStarter for full listing of tags that they use. Need to ensure that the list is comprehensive and terms are mutually exclusive.</td>
</tr>
<tr>
<td>project</td>
<td>difficultyLevel</td>
<td>Easy<br/>Medium<br/>Hard</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectStatus</td>
<td>Not yet started<br/>Active<br/>Periodically active<br/>On hold<br/>Completed<br/>Abandoned</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectScienceType</td>
<td>Agricultural And Veterinary Sciences - Agriculture, Land And Farm Management<br/>Agricultural And Veterinary Sciences - Animal Production<br/>Agricultural And Veterinary Sciences - Crop And Pasture Production<br/>Agricultural And Veterinary Sciences - Fisheries Sciences<br/>Agricultural And Veterinary Sciences - Forestry Sciences<br/>Agricultural And Veterinary Sciences - Horticultural Production<br/>Art Theory And Criticism<br/>Biological Sciences - Biodiversity<br/>Biological Sciences - Ecology<br/>Biological Sciences - Evolutionary Biology<br/>Biological Sciences - Genetics<br/>Biological Sciences - Microbiology<br/>Biological Sciences - Other Biological Sciences<br/>Biological Sciences - Physiology<br/>Biological Sciences - Plant Biology<br/>Biological Sciences - Zoology<br/>Chemical Sciences - Analytical Chemistry<br/>Chemical Sciences - Inorganic Chemistry<br/>Chemical Sciences - Macromolecular And Materials Chemistry<br/>Chemical Sciences - Medicinal And Biomolecular Chemistry<br/>Chemical Sciences - Organic Chemistry<br/>Chemical Sciences - Physical Chemistry<br/>Chemical Sciences - Theoretical And Computational Chemistry<br/>Earth Sciences - Atmospheric Sciences<br/>Earth Sciences - Geochemistry<br/>Earth Sciences - Geology<br/>Earth Sciences - Geophysics<br/>Earth Sciences - Hydrological Sciences<br/>Earth Sciences - Oceanography<br/>Earth Sciences - Physical Geography And Environmental Geoscience<br/>Engineering - Aerospace Engineering<br/>Engineering - Automotive Engineering<br/>Engineering - Biomedical Engineering<br/>Engineering - Chemical Engineering<br/>Engineering - Civil Engineering<br/>Engineering - Electrical And Electronic Engineering<br/>Engineering - Environmental Engineering<br/>Engineering - Food Sciences<br/>Engineering - Manufacturing Engineering<br/>Engineering - Maritime Engineering<br/>Engineering - Materials Engineering<br/>Engineering - Mechanical Engineering<br/>Engineering - Other Engineering<br/>Engineering - Resources Engineering And Extractive Metallurgy<br/>Environmental Sciences - Ecological Applications<br/>Environmental Sciences - Environmental Science And Management<br/>Environmental Sciences - Soil Sciences<br/>Information And Computing Sciences - Artificial Intelligence And Image Processing<br/>Information And Computing Sciences - Computation Theory And Mathematics<br/>Information And Computing Sciences - Computer Software<br/>Information And Computing Sciences - Distributed Computing<br/>Information And Computing Sciences - Information Systems<br/>Information And Computing Sciences - Library And Information Studies<br/>Language, Communication And Culture - Communication And Media Studies<br/>Language, Communication And Culture - Cultural Studies<br/>Language, Communication And Culture - Language Studies<br/>Language, Communication And Culture - Linguistics<br/>Language, Communication And Culture - Literary Studies<br/>Law And Legal Studies <br/>Mathematical Sciences - Mathematical Physics<br/>Mathematical Sciences - Numerical And Computational Mathematics<br/>Mathematical Sciences - Other Mathematical Sciences<br/>Medical And Health Sciences - Cardiorespiratory Medicine And Haematology<br/>Medical And Health Sciences - Clinical Sciences<br/>Medical And Health Sciences - Complementary And Alternative Medicine<br/>Medical And Health Sciences - Dentistry<br/>Medical And Health Sciences - Human Movement And Sports Science<br/>Medical And Health Sciences - Immunology<br/>Medical And Health Sciences - Medical Biochemistry And Metabolomics<br/>Medical And Health Sciences - Medical Microbiology<br/>Medical And Health Sciences - Medical Physiology<br/>Medical And Health Sciences - Neurosciences<br/>Medical And Health Sciences - Nursing<br/>Medical And Health Sciences - Nutrition And Dietetics<br/>Medical And Health Sciences - Oncology And Carcinogenesis<br/>Medical And Health Sciences - Optometry And Ophthalmology<br/>Medical And Health Sciences - Paediatrics And Reproductive Medicine<br/>Medical And Health Sciences - Pharmacology And Pharmaceutical Sciences<br/>Medical And Health Sciences - Public Health And Health Services<br/>Philosophy And Religious Studies - Applied Ethics<br/>Philosophy And Religious Studies - History And Philosophy Of Specific Fields<br/>Philosophy And Religious Studies - Philosophy<br/>Philosophy And Religious Studies - Religion And Religious Traditions<br/>Physical Sciences - Astronomical And Space Sciences<br/>Physical Sciences - Atomic, Molecular, Nuclear, Particle And Plasma Physics<br/>Physical Sciences - Classical Physics<br/>Physical Sciences - Condensed Matter Physics<br/>Physical Sciences - Optical Physics<br/>Physical Sciences - Other Physical Sciences<br/>Physical Sciences - Quantum Physics<br/>Psychology And Cognitive Sciences - Cognitive Science<br/>Psychology And Cognitive Sciences - Psychology<br/>Statistics <br/>Studies In Human Society - Anthropology<br/>Studies In Human Society - Criminology<br/>Studies In Human Society - Demography<br/>Studies In Human Society - Human Geography<br/>Studies In Human Society - Other Studies In Human Society<br/>Studies In Human Society - Policy And Administration<br/>Studies In Human Society - Political Science<br/>Studies In Human Society - Social Work<br/>Studies In Human Society - Sociology<br/>Technology - Agricultural Biotechnology<br/>Technology - Communications Technologies<br/>Technology - Computer Hardware<br/>Technology - Environmental Biotechnology<br/>Technology - Industrial Biotechnology<br/>Technology - Medical Biotechnology<br/>Technology - Nanotechnology<br/>Technology - Other Technology<br/></td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>unRegions</td>
<td>Africa - Northern Africa (015)<br/>Africa - Sub-Saharan Africa (202)<br/>Americas – South America (005)<br/>Americas – North America (003)<br/>Asia - Central Asia 143)<br/>Asia - Eastern Asia (030)<br/>Asia - South-eastern Asia (035)<br/>Asia - Southern Asia (034)<br/>Asia - Western Asia (145)<br/>Europe - Eastern Europe (151)<br/>Europe - Northern Europe (154)<br/>Europe - Southern Europe (039)<br/>Europe - Western Europe (155)<br/>Oceania - Australia and New Zealand (053)<br/>Oceania - Melanesia (054)<br/>Oceania - Micronesia (057)<br/>Oceania - Polynesia (061)<br/>World (001)</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>scientificProcessInvolved</td>
<td>Annotation<br/>Audio or video recording<br/>Classification or tagging<br/>DIY hacking/making<br/>Data analysis<br/>Data entry<br/>Download software for distributed computing<br/>Finding entities<br/>Geolocation<br/>Identification<br/>Learning<br/>Measurement<br/>Observation<br/>Photography<br/>Problem solving<br/>Sample analysis<br/>Site selection and/or description<br/>Specimen/sample collection<br/>Transcription</td>
<td> </td>
</tr>
<tr>
<td>project</td>
<td>projectCountry</td>
<td>Afghanistan<br/>Åland Islands<br/>Albania<br/>Algeria<br/>American Samoa<br/>Andorra<br/>Angola<br/>Anguilla<br/>Antarctica<br/>Antigua and Barbuda<br/>Argentina<br/>Armenia<br/>Aruba<br/>Australia<br/>Austria<br/>Azerbaijan<br/>Bahamas (the)<br/>Bahrain<br/>Bangladesh<br/>Barbados<br/>Belarus<br/>Belgium<br/>Belize<br/>Benin<br/>Bermuda<br/>Bhutan<br/>Bolivia (Plurinational State of)<br/>Bonaire, Sint Eustatius and Saba<br/>Bosnia and Herzegovina<br/>Botswana<br/>Bouvet Island<br/>Brazil<br/>British Indian Ocean Territory (the)<br/>Brunei Darussalam<br/>                    &quot;Bulgaria&quot;,<br/>                    &quot;Burkina Faso&quot;,<br/>                    &quot;Burundi&quot;,<br/>                    &quot;Cabo Verde&quot;,<br/>                    &quot;Cambodia&quot;,<br/>                    &quot;Cameroon&quot;,<br/>                    &quot;Canada&quot;,<br/>                    &quot;Cayman Islands (the)&quot;,<br/>                    &quot;Central African Republic (the)&quot;,<br/>                    &quot;Chad&quot;,<br/>                    &quot;Chile&quot;,<br/>                    &quot;China&quot;,<br/>                    &quot;Christmas Island&quot;,<br/>                    &quot;Cocos (Keeling) Islands (the)&quot;,<br/>                    &quot;Colombia&quot;,<br/>                    &quot;Comoros (the)&quot;,<br/>                    &quot;Congo (the Democratic Republic of the)&quot;,<br/>                    &quot;Congo (the)&quot;,<br/>                    &quot;Cook Islands (the)&quot;,<br/>                    &quot;Costa Rica&quot;,<br/>                    &quot;Côte d&#39;Ivoire&quot;,<br/>                    &quot;Croatia&quot;,<br/>                    &quot;Cuba&quot;,<br/>                    &quot;Curaçao&quot;,<br/>                    &quot;Cyprus&quot;,<br/>                    &quot;Czechia&quot;,<br/>                    &quot;Denmark&quot;,<br/>                    &quot;Djibouti&quot;,<br/>                    &quot;Dominica&quot;,<br/>                    &quot;Dominican Republic (the)&quot;,<br/>                    &quot;Ecuador&quot;,<br/>                    &quot;Egypt&quot;,<br/>                    &quot;El Salvador&quot;,<br/>                    &quot;Equatorial Guinea&quot;,<br/>                    &quot;Eritrea&quot;,<br/>                    &quot;Estonia&quot;,<br/>                    &quot;Eswatini&quot;,<br/>                    &quot;Ethiopia&quot;,<br/>                    &quot;Falkland Islands (the) [Malvinas]&quot;,<br/>                    &quot;Faroe Islands (the)&quot;,<br/>                    &quot;Fiji&quot;,<br/>                    &quot;Finland&quot;,<br/>                    &quot;France&quot;,<br/>                    &quot;French Guiana&quot;,<br/>                    &quot;French Polynesia&quot;,<br/>                    &quot;French Southern Territories (the)&quot;,<br/>                    &quot;Gabon&quot;,<br/>                    &quot;Gambia (the)&quot;,<br/>                    &quot;Georgia&quot;,<br/>                    &quot;Germany&quot;,<br/>                    &quot;Ghana&quot;,<br/>                    &quot;Gibraltar&quot;,<br/>                    &quot;Greece&quot;,<br/>                    &quot;Greenland&quot;,<br/>                    &quot;Grenada&quot;,<br/>                    &quot;Guadeloupe&quot;,<br/>                    &quot;Guam&quot;,<br/>                    &quot;Guatemala&quot;,<br/>                    &quot;Guernsey&quot;,<br/>                    &quot;Guinea&quot;,<br/>                    &quot;Guinea-Bissau&quot;,<br/>                    &quot;Guyana&quot;,<br/>                    &quot;Haiti&quot;,<br/>                    &quot;Heard Island and McDonald Islands&quot;,<br/>                    &quot;Holy See (the)&quot;,<br/>                    &quot;Honduras&quot;,<br/>                    &quot;Hong Kong&quot;,<br/>                    &quot;Hungary&quot;,<br/>                    &quot;Iceland&quot;,<br/>                    &quot;India&quot;,<br/>                    &quot;Indonesia&quot;,<br/>                    &quot;Iran (Islamic Republic of)&quot;,<br/>                    &quot;Iraq&quot;,<br/>                    &quot;Ireland&quot;,<br/>                    &quot;Isle of Man&quot;,<br/>                    &quot;Israel&quot;,<br/>                    &quot;Italy&quot;,<br/>                    &quot;Jamaica&quot;,<br/>                    &quot;Japan&quot;,<br/>                    &quot;Jersey&quot;,<br/>                    &quot;Jordan&quot;,<br/>                    &quot;Kazakhstan&quot;,<br/>                    &quot;Kenya&quot;,<br/>                    &quot;Kiribati&quot;,<br/>                    &quot;Korea (the Democratic People&#39;s Republic of)&quot;,<br/>                    &quot;Korea (the Republic of)&quot;,<br/>                    &quot;Kuwait&quot;,<br/>                    &quot;Kyrgyzstan&quot;,<br/>                    &quot;Lao People&#39;s Democratic Republic (the)&quot;,<br/>                    &quot;Latvia&quot;,<br/>                    &quot;Lebanon&quot;,<br/>                    &quot;Lesotho&quot;,<br/>                    &quot;Liberia&quot;,<br/>                    &quot;Libya&quot;,<br/>                    &quot;Liechtenstein&quot;,<br/>                    &quot;Lithuania&quot;,<br/>                    &quot;Luxembourg&quot;,<br/>                    &quot;Macao&quot;,<br/>                    &quot;Madagascar&quot;,<br/>                    &quot;Malawi&quot;,<br/>                    &quot;Malaysia&quot;,<br/>                    &quot;Maldives&quot;,<br/>                    &quot;Mali&quot;,<br/>                    &quot;Malta&quot;,<br/>                    &quot;Marshall Islands (the)&quot;,<br/>                    &quot;Martinique&quot;,<br/>                    &quot;Mauritania&quot;,<br/>                    &quot;Mauritius&quot;,<br/>                    &quot;Mayotte&quot;,<br/>                    &quot;Mexico&quot;,<br/>                    &quot;Micronesia (Federated States of)&quot;,<br/>                    &quot;Moldova (the Republic of)&quot;,<br/>                    &quot;Monaco&quot;,<br/>                    &quot;Mongolia&quot;,<br/>                    &quot;Montenegro&quot;,<br/>                    &quot;Montserrat&quot;,<br/>                    &quot;Morocco&quot;,<br/>                    &quot;Mozambique&quot;,<br/>                    &quot;Myanmar&quot;,<br/>                    &quot;Namibia&quot;,<br/>                    &quot;Nauru&quot;,<br/>                    &quot;Nepal&quot;,<br/>                    &quot;Netherlands (the)&quot;,<br/>                    &quot;New Caledonia&quot;,<br/>                    &quot;New Zealand&quot;,<br/>                    &quot;Nicaragua&quot;,<br/>                    &quot;Niger (the)&quot;,<br/>                    &quot;Nigeria&quot;,<br/>                    &quot;Niue&quot;,<br/>                    &quot;Norfolk Island&quot;,<br/>                    &quot;North Macedonia&quot;,<br/>                    &quot;Northern Mariana Islands (the)&quot;,<br/>                    &quot;Norway&quot;,<br/>                    &quot;Oman&quot;,<br/>                    &quot;Pakistan&quot;,<br/>                    &quot;Palau&quot;,<br/>                    &quot;Palestine, State of&quot;,<br/>                    &quot;Panama&quot;,<br/>                    &quot;Papua New Guinea&quot;,<br/>                    &quot;Paraguay&quot;,<br/>                    &quot;Peru&quot;,<br/>                    &quot;Philippines (the)&quot;,<br/>                    &quot;Pitcairn&quot;,<br/>                    &quot;Poland&quot;,<br/>                    &quot;Portugal&quot;,<br/>                    &quot;Puerto Rico&quot;,<br/>                    &quot;Qatar&quot;,<br/>                    &quot;Réunion&quot;,<br/>                    &quot;Romania&quot;,<br/>                    &quot;Russian Federation (the)&quot;,<br/>                    &quot;Rwanda&quot;,<br/>                    &quot;Saint Barthélemy&quot;,<br/>                    &quot;Saint Helena, Ascension and Tristan da Cunha&quot;,<br/>                    &quot;Saint Kitts and Nevis&quot;,<br/>                    &quot;Saint Lucia&quot;,<br/>                    &quot;Saint Martin (French part)&quot;,<br/>                    &quot;Saint Pierre and Miquelon&quot;,<br/>                    &quot;Saint Vincent and the Grenadines&quot;,<br/>                    &quot;Samoa&quot;,<br/>                    &quot;San Marino&quot;,<br/>                    &quot;Sao Tome and Principe&quot;,<br/>                    &quot;Saudi Arabia&quot;,<br/>                    &quot;Senegal&quot;,<br/>                    &quot;Serbia&quot;,<br/>                    &quot;Seychelles&quot;,<br/>                    &quot;Sierra Leone&quot;,<br/>                    &quot;Singapore&quot;,<br/>                    &quot;Sint Maarten (Dutch part)&quot;,<br/>                    &quot;Slovakia&quot;,<br/>                    &quot;Slovenia&quot;,<br/>                    &quot;Solomon Islands&quot;,<br/>                    &quot;Somalia&quot;,<br/>                    &quot;South Africa&quot;,<br/>                    &quot;South Georgia and the South Sandwich Islands&quot;,<br/>                    &quot;South Sudan&quot;,<br/>                    &quot;Spain&quot;,<br/>                    &quot;Sri Lanka&quot;,<br/>                    &quot;Sudan (the)&quot;,<br/>                    &quot;Suriname&quot;,<br/>                    &quot;Svalbard and Jan Mayen&quot;,<br/>                    &quot;Sweden&quot;,<br/>                    &quot;Switzerland&quot;,<br/>                    &quot;Syrian Arab Republic (the)&quot;,<br/>                    &quot;Taiwan (Province of China)&quot;,<br/>                    &quot;Tajikistan&quot;,<br/>                    &quot;Tanzania, the United Republic of&quot;,<br/>                    &quot;Thailand&quot;,<br/>                    &quot;Timor-Leste&quot;,<br/>                    &quot;Togo&quot;,<br/>                    &quot;Tokelau&quot;,<br/>                    &quot;Tonga&quot;,<br/>                    &quot;Trinidad and Tobago&quot;,<br/>                    &quot;Tunisia&quot;,<br/>                    &quot;Turkey&quot;,<br/>                    &quot;Turkmenistan&quot;,<br/>                    &quot;Turks and Caicos Islands (the)&quot;,<br/>                    &quot;Tuvalu&quot;,<br/>                    &quot;Uganda&quot;,<br/>                    &quot;Ukraine&quot;,<br/>                    &quot;United Arab Emirates (the)&quot;,<br/>                    &quot;United Kingdom of Great Britain and Northern Ireland (the)&quot;,<br/>                    &quot;United States Minor Outlying Islands (the)&quot;,<br/>                    &quot;United States of America (the)&quot;,<br/>                    &quot;Uruguay&quot;,<br/>                    &quot;Uzbekistan&quot;,<br/>                    &quot;Vanuatu&quot;,<br/>                    &quot;Venezuela (Bolivarian Republic of)&quot;,<br/>                    &quot;Viet Nam&quot;,<br/>                    &quot;Virgin Islands (British)&quot;,<br/>                    &quot;Virgin Islands (U.S.)&quot;,<br/>                    &quot;Wallis and Futuna&quot;,<br/>                    &quot;Western Sahara*&quot;,<br/>                    &quot;Yemen&quot;,<br/>                    &quot;Zambia&quot;,<br/>                    &quot;Zimbabwe</td>
<td> </td>
</tr>
<tr>
<td>Project</td>
<td>projectResearchType</td>
<td> </td>
<td>These need to be determined and agreed</td>
</tr>
<tr>
<td>contactPoint</td>
<td>meansOfContact</td>
<td>Email<br/>Phone<br/>Website<br/>Physical address</td>
<td> </td>
</tr>
<tr>
<td>contactPoint</td>
<td>contactPointType</td>
<td> </td>
<td>These types need to be determined and agreed</td>
</tr>
<tr>
<td>projectParticipants</td>
<td>projectParticipantAge</td>
<td>Elementary school (6-10)<br/>Middle school (11-13)<br/>Youth/teen (up to 17)<br/>Families<br/>General public<br/>Targeted group</td>
<td>Check whether these categories are appropriate and comprehensive enough.</td>
</tr>
<tr>
<td>projectAssociatedParty</td>
<td>projectUsFederalSponsor</td>
<td>Department of Interior<br/>Department of Commerce<br/>Department of Health and Human Services<br/>Central Intelligence Agency<br/>Department of Defense<br/>Department of Education<br/>Department of Energy<br/>Department of Homeland Security<br/>Department of Housing and Urban Development<br/>Department of Justice<br/>Department of State<br/>Department of Transportation<br/>Department of Veterans Affairs<br/>Department of Labor<br/>Federal Communications Commission<br/>General Services Administration<br/>Intelligence Advanced Research Projects Agency<br/>National Aeronautics and Space Administration<br/>National Archives and Records Administration<br/>National Endowment for the Arts<br/>National Science Foundation<br/>White House<br/>Office of Personnel Management<br/>Peace Corps<br/>Smithsonian Institution<br/>Environmental Protection Agency<br/>US Department of Agriculture<br/>Other</td>
<td>What is the best way to handle categorical lists like this where organisations change names quite frequently?</td>
</tr>
<tr>
<td>projectAssociatedParty</td>
<td>projectAssociatedPartyRole</td>
<td>Agent<br/>Collaborator<br/>Partner<br/>Sponsor/funder<br/>Stakeholder</td>
<td> </td>
</tr>
<tr>
<td>projectFundingSourceType</td>
<td>fundingSourceTypeSubsetA</td>
<td>Public - national<br/>Public - state<br/>Public - local<br/>Public - in-kind<br/>Private - in-kind<br/>Private - industry/corporate<br/>Private - philanthropic<br/>Private - bequeath/other<br/>Private - NGO</td>
<td>This is a fairly generic list and, provided it is comprehensive and representative enough, could serve that purpose for all.</td>
</tr>
<tr>
<td>projectFundingSourceType</td>
<td>fundingSourceTypeSubsetB</td>
<td>NSF Grants<br/>Direct Funding from a Federal Agency<br/>Direct Funding from the Federal Government<br/>Private Partnerships<br/>Museum Partnerships<br/>University Partnerships<br/>Grants from Foundations<br/>Grants from non-NSF Federal Agencies<br/>Other</td>
<td>This is a very specific national list needed for categorical filtering of information. There may be a need for other similare such lists which the model could support by adding as SubsetC, subset D, etc.</td>
</tr>
<tr>
<td>projectMedia</td>
<td>projectMediaType</td>
<td>Image file<br/>Image URL<br/>Audio file<br/>Audio URL<br/>Video file<br/>Video URL</td>
<td> </td>
</tr>
</tbody></table>
