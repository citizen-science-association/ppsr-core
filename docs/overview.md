---
id: overview
title: Overview
slug: /
description: Overview of the PPSR Core standard
---

PPSR Core is a set of global, transdisciplinary data and metadata standards for **P**ublic **P**articipation in **S**cientific **R**esearch **(Citizen Science)**. This standard includes: 
- Project Metadata Model or (**PMM**)
- Dataset Metadata Model, (**DMM**)
- Observation Data Model (**ODM**)

These standards are united, supported, and underlined by a common framework, the Common Data Model (**CDM**), which illustrates how information is structured within the citizen science domain (figure 1).

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
  alt="PPSR Core overview"
src={useBaseUrl('img/ppsr-overview-2020-1.png')}
/>;

## Rationale

Sharing information across databases maximizes everyone’s efforts, getting more “bang for the buck” out of information about citizen science projects everywhere. It leads to current, up-to-date, synchronized project lists and promotes a broader understanding of the global practice of citizen science.

## How to Use
PPSR-Core  may be used as individual component schemas, as partial combinations of schemas or in it’s entirety as a set of schemas coupled together by the [Common Data Model](/docs/common/) schema. Your choice of configuration will be determined by the use case(s) applicable to your situation. 

For example, if you already have a projects catalog, or are planning to develop one, the [Project Metadata Model](/docs/project/) will be applicable for you. This may be sufficient if it is simply a stand-alone catalog to aid in the discovery and sharing of projects, but if you also want to provide information about datasets associated with projects you will also want to use the [Dataset Metadata Model](/docs/dataset/) schema.

If you are developing a single project web and/or mobile app to collect data, you’ll need to use the [PMM](/docs/project/), [DMM](/docs/dataset/) and domain-specific [ODM](/docs/observation/) profile combination, coupled together in accordance with the [CDM](/docs/common/) schema.

If you currently operate or are planning to develop a platform for collecting data for multiple projects, then the full PPSR-Core schema will be applicable to you.

The standard is currently only available in human-readable format on this website and it is recommended that you develop or retrofit your schema to reflect the architecture of the schema as published in this site. The PPSR-Core team is currently working on machine readable formats for download as JSON, JSON-LD, XML and RDF-S and these will be published on this website as they become available.


## Other Standards

The PPSR-Core is not setting out to create a new data standard for the sake of creating a new standard. Instead it aims to unify a suite of existing data and metadata standards and ontologies into a standardized framework for application in the citizen science domain. In this respect it either uses the terms already applied in existing standards or provides attribute-level mappings between terms used in the PPSR-Core and equivalent terms used in other applicable standards (sometimes several). Where the PPSR context requires it or where there is no equivalent term available in other applicable standards, this standard will specify new attribute terms in the ppsr namespace.


  <div class="row margin-top--lg">
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">Dublin Core Metadata Element Set</h3>
          <div className="margin-bottom--md text--bold text--primary">
            dct / dcterms / dcmitype
          </div>
          <p>A set of fifteen "core" elements for describing resources. It was originally developed for a digital "library card catalog" for the Web (Wikipedia). It is now commonly used as the basis of metadata for many catalogs.</p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="https://dublincore.org/specifications/dublin-core/dcmi-terms/"
          >
            Metadata Website
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">Darwin Core Terms</h3>
          <div className="margin-bottom--md text--bold text--primary">
            dwc / dwcterms
          </div>
          <p>Darwin Core is an extension of Dublin Core for biodiversity informatics. It is meant to provide a stable standard reference for sharing information on biological diversity.</p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="http://rs.tdwg.org/dwc/terms.htm"
          >
            TDWG Website
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">Core Ontology of Scientific Investigation</h3>
          <div className="margin-bottom--md text--bold text--primary">
            cosi
          </div>
          <p>An ontology for the representation of scientific investigations. It includes classes of attributes for describing research activities and associated publications.</p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="http://oneo.net/cosi"
          >
            Website
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">Data Catalog Vocabulary</h3>
          <div className="margin-bottom--md text--bold text--primary">
            dcat
          </div>
          <p>An RDF vocabulary designed to facilitate interoperability between data catalogs published on the Web. By using DCAT to describe datasets in catalogs, publishers increase discoverability and enable applications to consume metadata from multiple catalogs.</p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="https://www.w3.org/TR/vocab-dcat/"
          >
            W3.org Specification
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">PROVenance Interchange Ontology </h3>
          <div className="margin-bottom--md text--bold text--primary">
            prov
          </div>
          <p>A set of Dublin Core extensions of the W3C PROVenance Interchange Ontology (PROV-O) </p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="https://www.w3.org/ns/prov"
          >
            W3.org Specification
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">Friend of a Friend Ontology</h3>
          <div className="margin-bottom--md text--bold text--primary">
            foaf
          </div>
          <p>A machine-readable ontology describing persons, their activities and their relations to other people and objects. Anyone can use FOAF to describe themselves. FOAF allows groups of people to describe social networks without the need for a centralised database. 
          </p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="http://xmlns.com/foaf/0.1/"
          >
            Official Specification
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none">ISO 19115 Geographic information — Metadata</h3>
          <div className="margin-bottom--md text--bold text--primary">
            ISO 19115
          </div>
          <p>
          An internationally-adopted schema for describing geographic information and services. It provides information about the identification, the extent, the quality, the spatial and temporal schema, spatial reference, and distribution of digital geographic data.  
          </p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="https://www.iso.org/obp/ui/#iso:std:iso:19115:ed-1:v1:en"
          >
            V1 Official ISO Standard
          </a>
        </div>
      </div>    
    </div>
    <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none"> OGC Oberservations and Measurements</h3>
          <div className="margin-bottom--md text--bold text--primary">
          om
          </div>
          <p>The O&M standard provides a generic structure and database naming principles for any kind of observation or measurement and is generally applicable across all ODM domain profiles in which observations and/or measurements are applicable in the ODM schema.</p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="https://www.ogc.org/standards/om/"
          >
            Website
          </a>
        </div>
      </div>    
    </div>
      <div class="col col--6 margin-bottom--lg">
      <div className="card card--full-height shadow--tl">
        <div className="card__body">
          <h3 className="margin--none"> OGC Earth Observations GeoJSON</h3>
          <div className="margin-bottom--md text--bold text--primary">
          eo-geojson
          </div>
          <p>The EO GeoJSON standard defines the JSON encoding format for a range of geometry features derived from the OGC Simple Features specification. It is applicable for all of the geometry objects in the PPSR-Core standard across the PMM, DMM and ODM schemas.</p>
        </div>
        <div  className="card__footer">
          <a class="button button--outline button--info"
          target="_blank"
          href="https://www.ogc.org/standards/eo-geojson"
          >
            Website
          </a>
        </div>
      </div>    
    </div>
  </div>
