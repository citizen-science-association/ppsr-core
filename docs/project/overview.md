---
id: overview
slug: /project
title: Project Metadata Model
sidebar_label: Overview
description: Conceptual model of Project (PMM)
hide_table_of_contents: false


---
A Project is an organized effort carefully designed to achieve a particular goal. In the context of PPSR Core; projects leverage public collection of observations for research. As a coordinated cluster of citizen science activities it is the main organizing unit.

The **P**roject **M**etadata **M**odel **(PMM)** is a metadata model that describes projects. Project level metadata provides the organizing framework and context for data collection and tasks associated with a project and allows projects to be discovered and accessed by locations, time periods, themes, suitability, etc. It also enables project owners to explain to the world what their project is aiming to achieve and to encourage people to participate in it. It includes metadata which describes the context and purpose of activities. Key items include:

- Title and description of the project
- Ownership and contact information
- Temporal range of the project
- Spatial range of the project
- Partners and collaborators
- Funding, sponsorship and program alignment of the project
- Public participation and engagement information
- Links to other associated sites and resources
- Graphical elements associated with the project



:::tip Did you know
This model is already being used to share data between: [SciStarter.org](https://scistarter.org/), [CitSci.org](https://www.citsci.org/), [Atlas of Living Australia - BioCollect](https://ala.org.au/biocollect/), & [CitizenScience.gov](https://www.citizenscience.gov/)
:::

## Information Sharing Example

People need to know what citizen science projects are happening in their region. They need to know this to decide which projects to join and which projects are available for them to participant in that are nearby and that are of interest to them. Having information about what projects exist where makes it easy for directories of projects to remain current, up-to-date, and informative for those seeking to join these important citizen science project initiatives.

Project managers need efficient means to share information about their projects with prospective volunteers. These people are busy. They need efficient ways to keep information about their projects up-to-date regardless of where this information is being shared and who is sharing it. For example, the Stream Tracker project may wish to advertise by being listed in the [Wisconsin Citizen Based Monitoring Network](http://wiatri.net/cbm/) and may also use [CitSci.org](https://www.citsci.org/) to host their project. They may also want to be listed in [SciStarter](https://scistarter.org/) as well as the [EU-Citizen.Science](https://eu-citizen.science/) platform. Having these directories all synchronize the information about this project automatically makes it easy for the project manager to change important details about who to contact to learn more. Imagine the joy for the project manager when she/he learns they can simply change their project contact email address in one places and it updates in all places automatically!


## Entity Relationship Diagram
**[current approved version: 2020.0]**

The Project ERD describes the relationships between class entities in the project metadata model. Each project contains a set of [Core Attributes](project/core-attributes.md) which represent the core terms associated with a project. The [Extension Attributes](project/extension-attributes.md) are optional terms associated with a project.  

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Figure 1 Project Metadata Model Entity Relationship Diagram"
  src={useBaseUrl('img/project-erd-2020-0.png')}
/>