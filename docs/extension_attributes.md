---
id: extension_attributes
title: Extension Attributes
sidebar_label: Additional Attributes
description: Extension Attributes from Project (PMM)
hide_table_of_contents: true
---

**[current approved version: 2020.0]**

Extension attributes are the fields whose inclusion is not mandatory for all systems that are compliant with PPSR Core. The table below lists all Extension Attributes; their field name, a description of how it is used. Every system is encouraged to include these fields to ensure greater interoperability between systems.

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
