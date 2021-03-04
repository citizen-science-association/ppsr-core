module.exports = {
  title: 'PPSR Core',
  tagline: 'A Data Standard for Public Participation in Scientific Research (Citizen Science)',
  url: 'https://core.citizenscience.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/csafavicon.png',
  organizationName: 'citizen-science-association', // Usually your GitHub org/user name.
  projectName: 'ppsr-core', // Usually your repo name.
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
          label: 'About',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/citizen-science-association/ppsr-core',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    sidebarCollapsible: true,
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
            {
              label: 'Implementation',
              to: 'docs/implementation',
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
              href: 'https://github.com/citizen-science-association/ppsr-core',
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
            'https://github.com/citizen-science-association/ppsr-core/edit/master/',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
            //remarkPlugins: [require('./src/plugins/remark-npm2yarn')],

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
          'https://github.com/citizen-science-association/ppsr-core/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  
};
