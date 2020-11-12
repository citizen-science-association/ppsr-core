---
id: technical
title: Technical
description: How the PPSR website was built
---

This website is hosted for free by [GitHub Pages](https://docs.github.com/en/github/working-with-github-pages) which is a static site hosting solution. The scaffolding for this site is based on [Docusaurus Version 2.0](https://v2.docusaurus.io/docs/) which takes Markdown and JavaScript files and generates static HTML.

Please direct questions about the technical underpinnings of this site to Brandon Budnicki.

:::tip GIT Training
If you are not familiar with GIT we recommend playing [Learn Git Branching](https://learngitbranching.js.org/) to learn the fundamentals in an interactive way (2 hours). Additionally the [The GitHub GIT Cheat Sheet](https://github.github.com/training-kit/downloads/github-git-cheat-sheet/) covers common commands (20 minutes)
:::

### Main file types
- Markdown - [Docusaurus version](https://v2.docusaurus.io/docs/markdown-features/)
    - **.md** which is plain markdown
    - **.mdx** which is used for markdown and adds additional processing to allow importing JavaScript
- JavaScript 
    - **.js** used for [ReactJS](https://reactjs.org/docs/getting-started.html) components or special pages that require additional styling
- JSON
    - **.json** used to store raw data

### Folder Structure
The site follows the same standard [Docusaurus](https://v2.docusaurus.io/docs/creating-pages/) structure.

```jsx title="Commonly changed files"
/root
    /blog           - news & articles specific to PPSR core
    /docs           - .md and .mdx pages that contain the standard. These get versioned!
    /src
        /pages      - special pages like the homepage
        /components - ReactJS components
    /static/json    - JSON Schema files

```

---
## Running Locally
This software can be run locally on your machine for testing purposes or creating larger changes. This will work on Windows, OSX, or Linux. The process is described in Docusaurus [Installation](https://v2.docusaurus.io/docs/installation) except that you will be using an existing GitHub repository instead of "scaffolding" a new one.

### Prerequisite Software
#### Required
These requirements are the same for all [Docusaurus](https://v2.docusaurus.io/docs/installation) sites
- [GIT-SCM](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to clone, merge, and submit pull requests. To check for this software run this command from the terminal

        git --version

- [NPM](https://nodejs.org/en/download/)  Version > 10.15.1 to build the software and run locally. To check for this software run this command from the terminal

        node -v

- A plaintext editor for exiting files. **Do not use Microsoft Word** Ses below for recommendation

#### Recommended
We recommend the following additional tools to aid in content editing & ease of use. Install these if you are not experienced with software development, they will make your life easier.
- [Visual Studio Code](https://code.visualstudio.com/) a plain text editor and development environment available for free on Windows, OSx, or Linux
- [GitHub Desktop](https://desktop.github.com/) a friendly user interface for GIT-SCM
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) a GitHub management extension for VS Code.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) extension for VS Code

### Step by Step
After installing the Prerequisite Software:
1. Clone the repository from github.com/citizen-science-association/ppsr-core using the command line or GitHub Desktop

        git clone https://github.com/citizen-science-association/ppsr-core.git
        

2. Open a terminal / command line in the root folder of your repository and run 

        npm run start

3. Your browser should automatically open to http://localhost:3000/ppsr-core/

:::info
Any changes you save will immediately cause the page to refresh and be visible
:::



---
## Publishing Process
After all changes have been merged into the master branch, the publishing process can being. This follows the [standard deployment](https://v2.docusaurus.io/docs/deployment) process for Docusaurus, specifically for the [GitHub pages process](https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages).

Use this command to deploy to the live site. 
```bash title="linux / OSx"
GIT_USER=<GITHUB_USERNAME> npm run deploy
```
```sh title="windows"
cmd /C "set GIT_USER=<GITHUB_USERNAME>&& npm run deploy"
```

:::info
Changes should appear within 30 seconds. Be sure to do a hard refresh of the page, locally cache files from the public site might show the old site.
:::



