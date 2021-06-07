---
id: implementation
title: Project Implementation approach
sidebar_label: Implementation
description: Project Implementation approach for creating a JSON Schema
hide_table_of_contents: false
---
On this page we describe one way of implementing PPSR Core, i.e. to use its terms and definitions to actually provide access to citizen science project descriptions. We explain how already available project descriptions (for example a collection of citizen science projects that all provide data about birds) could be made available using PPRS Core. This can be useful if you want to share your project descriptions with others, or to avoid the development of a new data structure/format when building your own collection of projects.

Our description consists of two parts:
- First, we create the data structure (or the data format). In this part, we decided to use JSON Schema, which currently is the most used way of describing online data structures. In order to consider the latest version of PPSR Core, we suggest an automated approach to create a compliant JSON Schema from the recent Excel file describing the standard.
- Then, we illustrate how an existing project collection (here, citizen science projects related to environmental policies) is provided structured according to the format that we just created. We provide the results in JSON - in a way that allows to check automatically if the descriptions follow the previously defined formatting rules. This automated check is important to ensure that our descriptions are structured in the right (standard) way.

The tool that we use to provide our examples is free and open to re-use. In this way, it is possible for everyone who has the right skills to replicate our examples – or to modify them for their own purposes.

## 1. Transformation of the PPSR Core Project Metadata Model to JSON Schema

It is important to maintain synchronicity of resources (documentation, visualizations, schemas, etc.) describing or implementing the PPSR Core standard. For this reason, a single source (master) of the PPSR Core specification should be consistently used for all derived resources (documentation, visualizations, schemas, etc.) to be automatically generated from it.

The PPSR core implementation issues include, among others, PPSR Core [serializations](https://en.wikipedia.org/wiki/Serialization), and we currently focus on JSON Schema based ones. In particular, we describe the automatic transformation to JSON Schema of the excel file (.xlsx) describing the PPSR Core Project Metadata Model, resulting in an implementation of the standard. The automatic transformation procedure we have described can also help to implement future versions of the standard by automatically generating the implementation structure (in JSON Schema).

The input PPSR Project Metadata Model has been downloaded from the following web page: [https://core.citizenscience.org/docs/project/](https://core.citizenscience.org/docs/project/). Our main concern was to implement the [“Core attributes”](https://core.citizenscience.org/docs/project-core-attributes) and the matching [“Vocabulary”](https://core.citizenscience.org/docs/project/vocabulary) of this model in JSON Schema.

We use an ETL (Extract Transform Load) tool to create the transformations to JSON Schema and to JSON Data. For this purpose, we selected the widely used open-source tool Pentaho Data Integration (PDI) that can be downloaded from https://sourceforge.net/projects/pentaho/.

Using the Pentaho graphical user interface (Spoon), a workflow was created that generates from the Excel table (input data) a JSON Schema (output data) - see also Figure 1. Spoon empowers the user to inspect the input data, to transform the data, and to export the newly generated data in supported formats.

import useBaseUrl from '@docusaurus/useBaseUrl';

<a href={useBaseUrl('img/etl_pentaho_json-schema.png')} target="_blank">
    <img alt="ETL Pentaho JSON Schema" src={useBaseUrl('img/etl_pentaho_json-schema.png')}/>
</a>
<div align="center">Figure 1. Transformation of PPSR Project Metadata Model (Core attributes and Vocabulary) in JSON Schema with Pentaho Data Integration</div>
&nbsp;

JSON Schema is a powerful tool to annotate and validate the structure of JSON documents. The most basic schema is a blank JSON object, which constrains nothing, allows anything, and describes nothing. Adding validation keywords to the schema applies constraints on an instance. It is those additions that make a JSON Schema a valuable resource for structuring data in agreed (standard) ways.

Below we list some constraints and example implementations in JSON Schema for the PPSR Core Project Metadata Model:


### “type” keyword
To restrict values to a specific type a “type” keyword is in use. The “type” keyword is fundamental to JSON Schema. The JSON Schema defines the following basic types: string, numeric types (integer, number), object, boolean, null.

Example:

    "projectId": {
        "$id": "#/properties/Project/properties/projectId",
        "label": "projectId",
        "definition": "Globally unique identifier (GUID) for the project. System generated.",
        "type": "string"
    }


### “format” keyword

The “format” keyword allows for basic semantic validation on certain kinds of string values that are commonly used, e.g., for date and time the format in use can be: “date-time”, “date”, “time”; for email addresses “email”, for hostnames “hostname”, and etc.

Example:

    "projectDateCreated": {
        "$id": "#/properties/Project/properties/projectDateCreated",
        "label": "projectDateCreated",
        "definition": "The date and time that the record was created in the database. Uses the ISO 8601:2004 (E) dateTime standard",
        "type": "string",
        "format": "date-time"
    }


### “properties” keyword

The properties (key-value pairs) on an object are defined using the properties keyword. The value of properties is an object, where each key is the name of a property and each value is a JSON schema used to validate that property.

<u>“additionalProperties” keyword/ “patternProperties” keyword</u>

The additionalProperties keyword is used to control the handling of extra content, that is, properties whose names are not listed in the properties keyword. If not restricted, any additional properties are allowed. additionalProperties can restrict the object so that it either has no additional properties that were not explicitly listed, or it can specify a schema for any additional properties on the object.

Sometimes that is not enough, and you may want to restrict the names of the extra properties, or you may want to say that, given a particular kind of name, the value should match a particular schema. That is where patternProperties comes in: it is a new keyword that maps from regular expressions to schemas. If an additional property matches a given regular expression, it must also validate against the corresponding schema.

Example:

    "patternProperties": {
        "^difficultyLevel$": {
            "label": "difficultyLevel",
            "definition": "Assessed class of project difficulty for untrained participants to undertake. (...)
            "type": "string",
            "enum": [
                "Easy",
                "Medium",
                "Hard"
            ]
        }
    }


### “required” keyword

By default, the properties defined by the properties keyword are not required. However, one can provide a list of required properties using the required keyword.

Example:

    "required": [
        "contactPoint",
        "projectGeographicLocation",
        "projectMedia",
        "language",
        "projectAim",
        "projectDescription",
        "projectDuration",
        "projectDateCreated",
        "projectLastUpdatedDate",
        "projectId",
        "projectName",
        "projectResponsiblePartyContactEmail",
        "projectResponsiblePartyName",
        "projectScienceType",
        "projectStatus",
        "projectStartDate"
    ]


### “enum” keyword

The enum keyword is used to restrict a value to a fixed set of values. It must be an array with at least one element, where each element is unique.

Example:

    "projectStatus": {
        "$id": "#/properties/Project/properties/projectStatus",
        "label": "projectStatus",
        "definition": "The activity status of the project.",
        "type": "string",
        "enum": [
            "Not yet started",
            "Active",
            "Periodically active",
            "On hold",
            "Completed",
            "Abandoned"
        ]
    }


### combining schemas

JSON Schema includes a few keywords for combining schemas. Combining schemas may be as simple as allowing a value to be validated against multiple criteria at the same time.

The keywords used to combine schemas are:
* allOf: Must be valid against all of the subschemas
* anyOf: Must be valid against any of the subschemas
* oneOf: Must be valid against exactly one of the subschemas

In the PPSR Project Metadata Model the keyword “oneOf” was used, to validate the attributes projectEndDate and projectDuration. In case the attribute projectEndDate has a value “Unknown” then the attribute projectDuration, as a mandatory attribute, needs to have the value “Unknown” as well. If the attribute projectEndDate is of “format” keyword “date-time" then the value of the attribute projectDuration needs to be of “format” keyword “duration”.

Example for “oneOf” keyword used:

    "oneOf": [
        {
            "if": {
            "properties": {
                "projectEndDate": {
                    "type": "string",
                    "pattern": "^Unknown$"
                    }
                }
            },
            "then": {
                "properties": {
                    "projectDuration": {
                        "pattern": "^Unknown$"
                        }
                    }
                },
            "else": {
                "properties": {
                    "projectEndDate": {
                        "format": "date-time"
                    },
                    "projectDuration": {
                        "format": "duration"
                    }
                }
            }
        }
    ]


## 2. Example of Citizen Science data description compliant to the PPSR Core Project Metadata Model to JSON Schema
In this part, we provide an example of Citizen Science data description that is compliant to the implementation of PPSR Core in JSON Schema (i.e. the JSON data description validates against the automatically created JSON Schema).

To test the generated JSON Schema and to check the implemented restrictions, a JSON Data file was generated. The data used as input is the inventory of 512 Citizens Science (CS) projects relevant for environmental policies that the Joint Research Centre (JRC) is collecting and managing (["An inventory of citizen science activities for environmental policies"](https://data.jrc.ec.europa.eu/dataset/jrc-citsci-10004)).
 
First, as the model of the CS Inventory is not the same as the one of PPSR, a transformation between the data models needed to be done – which consists of attribute renaming, attribute addition, value mapping. The transformation was again performed using Pentaho (see also Figure 2).

<a href={useBaseUrl('img/etl_pentaho_json-data.png')} target="_blank">
    <img alt="Transformation of the CS Inventory in JSON Data" src={useBaseUrl('img/etl_pentaho_json-data.png')}/>
</a>
<div align="center">Figure 2. Transformation of the CS Inventory in JSON Data with Pentaho Data Integration</div>
&nbsp;


When creating both the JSON Schema based on the PPSR Project Metadata Model and a compliant JSON Data file a standard online tool can be use for validating if the created data file matches the actual JSON Schema: https://www.jsonschemavalidator.net/.

Supporting materials are available from our GitHub repository [“machinereadable”](https://github.com/citizen-science-association/ppsr-core/tree/master/machinereadable) that contains the following:

1.	Input - folder with the input data used in the workspaces  
    a. PPSR metadata model: 1_Project_Metadata_Model.xlsx  
    b. Inventory of 512 environmental citizen science projects: Inventory of environmental citizen science projects_anonymised.xlsx
2.	Output - folder where the output data from the workspaces are stored  
3.	Output_ORIGINAL - folder with the output data already generated  
    a. Generated JSON Schema for PPSR model: PPSR_JSONSchema.js  
    b. Generated JSON Data for 512 projects of CS Inventory, based on the PPSR model: CSInventrory_JSON.js  
4.	Workspaces - folder with workspaces for Pentaho Spoon DI  
    a. Workspace for generating JSON Schema from PPSR model: 1_PPSR_Transformation_XLS2JSONSchema.ktr  
    b. Workspace for generating JSON Data for CS Inventory: 2_PPSR_CSInventory_JSON.ktr
 
The Pentaho Spoon Data Integration can be downloaded from the following ["sourceforge.net link"](
https://sourceforge.net/projects/pentaho/files/Pentaho%208.2/client-tools/pdi-ce-8.2.0.0-342.zip/download?use_mirror=netcologne&download=&failedmirror=jztkft.dl.sourceforge.net).
