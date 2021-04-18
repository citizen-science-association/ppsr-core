---
id: core-attributes
title: Project Core Attributes
sidebar_label: Core Attributes
description: Core Attributes from Project (PMM)
hide_table_of_contents: true
---

**[current approved version: 2020.0]**

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
