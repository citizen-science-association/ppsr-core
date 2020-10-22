---
id: overview
title: Overview
description: Overview of the PPSR Core standard
---

PPSR Core is a set of global, transdisciplinary data and metadata standards for **P**ublic **P**articipation in **S**cientific **R**esearch **(Citizen Science)**. This standard includes: Projects (**P**roject **D**ata **M**odel or **PDM**), Datasets (**D**ataset **D**ata **M**odel, or **DDM**), and Observations (**O**bservation **D**ata **M**odel, or **ODM**). These standards are united, supported, and underlined by a common framework, the **C**ommon **D**ata **M**odel (**CDM**), which illustrates how information is structured within the citizen science domain (figure 1).

import useBaseUrl from '@docusaurus/useBaseUrl';

<img
alt="Docusaurus with Keytar"
src={useBaseUrl('img/ppsr-overview-2020-0.png')}
/>;

## Rationale

Sharing information across databases maximizes everyone’s efforts, getting more “bang for the buck” out of information about citizen science projects everywhere. It leads to current, up-to-date, synchronized project lists and promotes a broader understanding of the global practice of citizen science.

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
          <p>A set of fifteen "core" elements for describing resources. It was originally developed for a digital "library card catalog" for the Web (Wikipedia). It is now commonly used as the basis of metadata for many catalogs.</p>
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
  </div>
