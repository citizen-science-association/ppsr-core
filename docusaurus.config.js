module.exports = {
  title: 'PPSR Core',
  tagline: 'A Data Standard for Public Participation in Scientific Research (Citizen Science)',
  url: 'https://bbudnicki.github.io',
  baseUrl: '/docusaurus/',
  onBrokenLinks: 'throw',
  favicon: 'img/csafavicon.png',
  organizationName: 'BBudnicki', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass'],
  themeConfig: {
    navbar: {
      title: 'PPSR Core',
      logo: {
        alt: 'CSA Logo',
        src: 'img/csalogo192.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Documents',
          position: 'left',
        },
        {
          to: 'docs/contribute',
          activeBasePath: 'docs/contribute',
          label: 'Contribute',
          position: 'left',
        },
        {
          to: 'docs/team',
          activeBasePath: 'docs/team',
          label: 'About',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/BBudnicki/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    sidebarCollapsible: false,
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: 'docs/',
            },
            {
              label: 'Common',
              to: 'docs/common',
            },
            {
              label: 'Project',
              to: 'docs/project',
            },
            {
              label: 'Dataset',
              to: 'docs/dataset',
            },
            {
              label: 'Observation',
              to: 'docs/observation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/CitSciAssoc/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/CitSciAssoc',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UChTgtIf9BqiEpWiczvH0jbA',
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/citizen-science-association",

            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/BBudnicki/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'CSA Logo',
        src: 'img/csalogo192.png',
        href: 'https://www.citizenscience.org/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Citizen Science Assocaition`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          homePageId: 'overview',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/BBudnicki/docusaurus/edit/master/',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            //remarkPlugins: [require('./src/plugins/remark-npm2yarn')],

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/BBudnicki/docusaurus/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  
};
