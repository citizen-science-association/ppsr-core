---
id: contribute
title: Contribute
description: Help build PPSR Core

---


We welcome your contributions to PPSR Core. This site is maintained by a diverse group of volunteers through the Citizen Science Association [Data & Meta Data Working Group](https://www.citizenscience.org/get-involved/working-groups/data-and-metadata-working-group/). This website serves as the canonical version. We keep track of our work within GitHub (no developer experience required). Proposed changes are made through GitHub pull requests and through the issue tracker. When our workgroup meets we review the pull requests to make decisions on inclusion within PPSR Core.

**Thank you to all our contributors!**


---

## Data & Meta Data Meetings


Our working group frequently meets to review changes. To join our mailing list and get involved with meetings please contact:

**PPSR Specific mailing list**
```
corer@citizenscience.org
```
**Citizen Science Association Data & Metadata Working Group**
```
data_cochair@citizenscience.org
```

---


## Contributing through GitHub

This standard is maintained in a GitHub repository. Don't worry, deep understanding of GitHub is not required, **you don't have to be a programmer**.

You will need to be logged into a free [GitHub](https://github.com/) account to make changes. We maintain a [technical page](technical) if you want to help with more the technical aspects or understand how this site was built.


### Editing An Existing Page

Editing any page is simple. At the bottom of each page is a "edit this page" link that will take you from the website to that file within our repository GitHub.

### Page Syntax
This site is build using Docusaurus. [Docusaurus Markdown](https://docusaurus.io/docs/markdown-features) is an extension of the [standard Markdown syntax](https://daringfireball.net/projects/markdown/syntax).[This quickstart](https://guides.github.com/features/mastering-markdown/) guide includes styling for headers, tables, URL linking, and font formatting.

### Proposing changes
Anyone is welcome to propose changes to the standard. Those changes will go through the PPSR Core review process based on its scope. After you have edited an existing page OR added a new one, the bottom of the file will have a "Propose changes" section. Please include a [good description](https://chris.beams.io/posts/git-commit/). Explain **why** the change is needed.
- The first textbox is a change summary (required). This appears in the list of all changes to a page.
- The second text box is for additional details. This is helpful for providing context if the change requires review & approval by the PPSR Core team

**Examples**

```
Added Living Atlas example to Project

Living atlas uses this schema. We received permission to use them as an example of a project.
```
```
Fixed typos on homepage
```
Next you will click the propose changes button. This will create a copy of the PPSR Core website code tied to your GitHub account. Multiple changes from different pages can then be grouped together into a pull request. For simple changes, you can immediately create that pull request. The pull request will then appear on [github.com/citizen-science-association/ppsr-core/pulls](https://github.com/citizen-science-association/ppsr-core/pulls) where it can then go through the review process.


## Editing the Schema


The various model schemas and field definitions are maintained in a working document. As this is updated, periodically a delegate from the Model Governance Committee will trigger an extract-transform process which produces a JSON Schema file output, increments the version number within the **PPSR-Core Github repository TODO**, and gets published to this website. In time, other machine-readable derivative formats will also be produced and made available for download.

Should you wish to request a change to any of the Schema models, please submit an issue in the Github repository and tag it as a “Change request” together with the applicable schema model.



## Reporting Issues


Minor issues & questions may be reported through the GitHub issue tracker. We use it to keep track of small tasks. For larger concerns, please join one of our meetings.

