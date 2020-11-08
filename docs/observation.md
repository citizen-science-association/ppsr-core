---
id: observation
title: Observation Data Model
sidebar_label: Observation (ODM)
description: Observation Data Model (ODM)

---

An observation record is a collection of information associated with a unique data collection activity or event. The information (attribute data) comprising a record is generally based on something that has been seen, heard, noticed or provided by a survey participant. A collection of observation records comprises a dataset.

The **O**bservation **D**ata **M**odel describes a number of “profiles” for particular domains (or areas of science) and “Core” sets of attributes which must be included for particular types of surveys. These Core attribute sets can apply across multiple, but not necessarily all, domain profiles. The diagram below provides a graphical representation of how this works. 

The purpose of defining “core” attributes for domain profiles is to enable data from different datasets to be aggregated for larger scale analysis than is possible with individual datasets. When attributes are common across different domain profiles, different datasets from within that group of domain profiles can be joined to enable analysis and insights which are otherwise impossible to achieve – core attributes enable cross-domain dataset joining. Owing to the potentially infinite variability and complexity of survey requirements it is possible that core attributes for one set of profiles may not include a required attribute that is included as a core attribute for a different set of profiles. In this case the latter may be adopted by the survey needing to use it, instead of creating a completely new and different attribute extension for the profile needing it.

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="Docusaurus with Keytar"
  src={useBaseUrl('img/observation-schematic-2020-0.png')}
/>



ODM domain profiles will use existing domain-specific data standards as much as possible, where they exist. The table below provides profiles for current known domain standards and indicates where such standards either do not yet exist of if they do, they have not yet been discovered by the PPSR-Core team. Development of these profiles is still a work in progress and the PPSR-Core project team is continuing to develop new profiles and refine existing ones. We are particularly keen to have expert domain-based knowledge contributing to this process, especially in domain areas which are under-represented and not well described. Please see our [contribute page](/docs/contribute) to get involved

## Information Sharing Example
Scientists and platform managers need to share scientific observations about the world. They need to do so to advance science and decision making. And they may also need to do so to leverage the unique strengths of various platforms to improve data quality. For example, a project on [CitSci.org](https://www.citsci.org/) might ask its volunteers to collect species occurrence observations of a rare butterfly. But they also need to crowd source the identification of this specific rare butterfly. Imagine their delight when they learn they can automatically share observations submitted to their CitSci project and have these appear on [iNaturalist](https://www.inaturalist.org/) and then have this online community verify the taxonomic identity of the butterfly observation to make this observation become deemed as “Research Grade.” Then, their delight grows when they learn that all Research Grade observations are automatically shared with the [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/). Now we have observations submitted to one platform becoming verified on another, sent back to the original platform so it can be represented as Research Grade, and also being sent to the go-to-source for global biodiversity data worldwide.

## Future Work
It is intended to comprise a series of domain appropriate sets of attributes and/or schemas which are required for effective and useful aggregation of data for scientific use. An example of this would be the Darwin Core standard used for global biodiversity occurrence data. Other domains also have their specific standards. The ODM will recommend application of relevant existing domain standards where they exist, develop new models where they don't, and will seek to identify and standardize common attributes across domains to enable multi-disciplinary aggregation of datasets on those attributes for cross-disciplinary analysis.

<table class="table table-bordered table-hover table-condensed">
<thead><tr><th title="Field #1">Domain area (type of science)</th>
<th title="Field #2">ODM Core attribute set</th>
<th title="Field #3">Domain Profile standard(s)</th>
</tr></thead>
<tbody><tr>
<td>Agricultural And Veterinary Sciences - Agriculture, Land And Farm Management</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Agricultural And Veterinary Sciences - Animal Production</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Agricultural And Veterinary Sciences - Crop And Pasture Production</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Agricultural And Veterinary Sciences - Fisheries Sciences</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Agricultural And Veterinary Sciences - Forestry Sciences</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Agricultural And Veterinary Sciences - Horticultural Production</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Art Theory And Criticism</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Biodiversity</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td><a href="https://dwc.tdwg.org/terms/">Darwin Core</a></td>
</tr>
<tr>
<td> </td>
<td> </td>
<td><a href="https://www.tdwg.org/standards/ac/">Audubon Core</a></td>
</tr>
<tr>
<td> </td>
<td> </td>
<td><a href="https://www.ogc.org/standards/om">Observations and Measurements</a></td>
</tr>
<tr>
<td>Biological Sciences - Ecology</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td><a href="https://eml.ecoinformatics.org/">Ecological Metadata Language - EML</a></td>
</tr>
<tr>
<td> </td>
<td> </td>
<td><a href="https://dwc.tdwg.org/terms/">Darwin Core</a></td>
</tr>
<tr>
<td> </td>
<td> </td>
<td><a href="https://www.tdwg.org/standards/ac/">Audubon Core</a></td>
</tr>
<tr>
<td> </td>
<td> </td>
<td><a href="https://www.ogc.org/standards/om">Observations and Measurements</a></td>
</tr>
<tr>
<td>Biological Sciences - Evolutionary Biology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Genetics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Microbiology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Other Biological Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Physiology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Plant Biology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Biological Sciences - Zoology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Analytical Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Inorganic Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Macromolecular And Materials Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Medicinal And Biomolecular Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Organic Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Physical Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Chemical Sciences - Theoretical And Computational Chemistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Atmospheric Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Geochemistry</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Geology</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Geophysics</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Hydrological Sciences</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Oceanography</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Earth Sciences - Physical Geography And Environmental Geoscience</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Aerospace Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Automotive Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Biomedical Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Chemical Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Civil Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Electrical And Electronic Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Environmental Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Food Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Manufacturing Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Maritime Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Materials Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Mechanical Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Other Engineering</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Engineering - Resources Engineering And Extractive Metallurgy</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Environmental Sciences - Ecological Applications</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td> </td>
</tr>
<tr>
<td>Environmental Sciences - Environmental Science And Management</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a> </td>
<td> </td>
</tr>
<tr>
<td>Environmental Sciences - Soil Sciences</td>
<td><a href="https://dwc.tdwg.org/terms/#event">Event Core</a></td>
<td> </td>
</tr>
<tr>
<td>Information And Computing Sciences - Artificial Intelligence And Image Processing</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Information And Computing Sciences - Computation Theory And Mathematics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Information And Computing Sciences - Computer Software</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Information And Computing Sciences - Distributed Computing</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Information And Computing Sciences - Information Systems</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Information And Computing Sciences - Library And Information Studies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Language, Communication And Culture - Communication And Media Studies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Language, Communication And Culture - Cultural Studies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Language, Communication And Culture - Language Studies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Language, Communication And Culture - Linguistics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Language, Communication And Culture - Literary Studies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Law And Legal Studies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Mathematical Sciences - Mathematical Physics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Mathematical Sciences - Numerical And Computational Mathematics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Mathematical Sciences - Other Mathematical Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Cardiorespiratory Medicine And Haematology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Clinical Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Complementary And Alternative Medicine</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Dentistry</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Human Movement And Sports Science</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Immunology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Medical Biochemistry And Metabolomics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Medical Microbiology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Medical Physiology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Neurosciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Nursing</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Nutrition And Dietetics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Oncology And Carcinogenesis</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Optometry And Ophthalmology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Paediatrics And Reproductive Medicine</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Pharmacology And Pharmaceutical Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Medical And Health Sciences - Public Health And Health Services</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Philosophy And Religious Studies - Applied Ethics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Philosophy And Religious Studies - History And Philosophy Of Specific Fields</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Philosophy And Religious Studies - Philosophy</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Philosophy And Religious Studies - Religion And Religious Traditions</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Astronomical And Space Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Atomic, Molecular, Nuclear, Particle And Plasma Physics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Classical Physics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Condensed Matter Physics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Optical Physics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Other Physical Sciences</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Physical Sciences - Quantum Physics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Psychology And Cognitive Sciences - Cognitive Science</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Psychology And Cognitive Sciences - Psychology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Statistics</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Anthropology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Criminology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Demography</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Human Geography</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Other Studies In Human Society</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Policy And Administration</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Political Science</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Social Work</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Studies In Human Society - Sociology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Agricultural Biotechnology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Communications Technologies</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Computer Hardware</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Environmental Biotechnology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Industrial Biotechnology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Medical Biotechnology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Nanotechnology</td>
<td> </td>
<td> </td>
</tr>
<tr>
<td>Technology - Other Technology</td>
<td> </td>
<td> </td>
</tr>
</tbody></table>