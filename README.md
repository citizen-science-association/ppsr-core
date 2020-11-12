# PPSR Core Data & Metadata Standards Repsository

**THIS REPOSITORY IS STILL UNDER DEVELOPMENT**

#### Note that this repository is the cannonical version of the PPSR-Core Standard.

## Introduction
The PPSR-Core initiative is being coordinated and facilitated as a global initiative under the auspices of the US Citizen Science Association Data and Metadata Working Group. The purpose of this working group is to develop international standards for citizen science data and metadata, with the goal to support, advance, and facilitate data interoperability among and between citizen science projects and other data repositories; and, to promote collaboration in citizen science via the development and/or improvement of international standards for data and metadata.

Major Objectives:
  1.	Develop a formal ontology to describe citizen science, including information on citizen science project metadata, to support research on citizen science, advance practice by demonstrating data quality, and allow different project databases to share information. 
  2.	Link the citizen science ontology to relevant standards describing citizen science data sets, to support discoverability and reuse of citizen generated data.
  3.	Link the citizen science ontology and identified metadata standards to a suite of tools, technologies, and platforms that facilitate data collection and analysis to create a global network for citizen science data collection, curation, and use.  

For further information about the [CSA Data & Metadata Working Group](https://github.com/CitSciAssoc/DMWG-PPSR-Core/wiki/The-CSA-Data-&-Metadata-Working-Group), see the attached wiki page in this repository.

  - [What is the PPSR-Core?](https://github.com/CitSciAssoc/DMWG-PPSR-Core/wiki/About-the-PPSR-Core#what-is-the-ppsr-core)
  - [Governance and Maintenance of the PPSR-Core Standard](https://github.com/CitSciAssoc/DMWG-PPSR-Core/wiki/About-the-PPSR-Core#governance-structure-and-leadership-team)
  - [The PPSR-Core Ontology](https://github.com/CitSciAssoc/DMWG-PPSR-Core/wiki/PPSR-Core-Ontology)
  - [Approach to addressing Data Quality and Quality Assurance Processes through the PPSR Core Standard](https://github.com/CitSciAssoc/DMWG-PPSR-Core/wiki/Approach-to-addressing-Data-Quality-and-Quality-Assurance-Processes-through-the-PPSR-Core-Standard)

## PPSR-Core Artefacts
The standard comprises the following set of artefacts:
### Common Data Model (CDM)
  - **CDM entity relationship diagram** - This graphically describes the relationships between the primary class entities in overall model. [current approved version: 2.0.0]
  - **CDM table of attributes** - This is a tabular representation of the CDM attributes and their definitions. [current approved version: 2.0.0]
  
  ### Project Metadata Model (PMM)
  - **PMM entity relationship diagram** - This graphically describes the relationships between the class entities in the project metadata model. [current approved version: 2.0.0]
  - **PMM (Core Model) table of attributes** - This is a tabular representation of the PMM core model attributes and their definitions. [current approved version: 2.0.0]
  - **PMM (Extension Model) table of attributes** - This is a tabular representation of the PMM extension model attributes and their definitions. [current approved version: 2.0.0]
  - **PMM vocabularies** - These are controlled lists of defined terms for use in relevant vocabulary attributes in the PMM. These terms may be used either as provided in full or as a reduced subset relevant to the purpose for which they are being used. They should not be modified or augmented with additional terms as this would prevent sharability and effective aggregation. [current approved version: 2.0.0]
  
  
  ### Dataset Metadata Model (DMM)
  - **DMM entity relationship diagram** - This graphically describes the relationships between the class entities in the dataset metadata model. [current approved version: 2.0.0]
  - **DMM (Core Model) table of attributes** - This is a tabular representation of the DMM core model attributes and their definitions. [current approved version: 2.0.0]
  - **DMM (Extension Model) table of attributes** - This is a tabular representation of the DMM extension model attributes and their definitions. [current approved version: 2.0.0]
  - **Dataset Metadata Model vocabularies** -  [current approved version: 2.0.0]
  
  ### Observational Data Models (ODM)
  - **Observational Data Models (ODM)** - This is still a work in progress and nothing has been published yet. However, it is intended to comprise a series of domain appropriate sets of attributes and/or schemas which are required for effective and useful aggregation of data for scientific use. An example of this would be the Darwin Core standard used for global biodiversity occurrence data. Other domains also have their specific standards. The ODM will recommend application of relevant existing domain standards where they exist, develop new models where they don't, and will seek to identify and standardise common attributes across domains to enable multi-disciplinary aggregation of datasets on those attributes for cross-disciplinary analysis.
  
  In the meantime it is recommended that you investigate and use existing attribute definitions in common use throughout the domain of interest. Please also contribute your findings back to this repository forum for consideration as we collectively develop the ODM models.