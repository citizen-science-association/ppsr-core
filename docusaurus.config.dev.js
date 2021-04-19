let docusaurusPRD = require('./docusaurus.config');
let docusaurusDEV = {
  ...docusaurusPRD,
  title: `BETA ${docusaurusPRD.title}`,
  noIndex: true, // Defaults to `false`
  url: "https://bbudnicki.github.io",
  baseUrl: '/ppsr-core/',
  organizationName: 'bbudnicki',
};
module.exports = docusaurusDEV;
