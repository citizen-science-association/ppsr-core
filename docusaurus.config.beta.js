let docusaurusPRD = require('./docusaurus.config');
let docusaurusBETA = {
  ...docusaurusPRD,
  title: `BETA ${docusaurusPRD.title}`,
  noIndex: true, // Defaults to `false`,
  url: "https://bbudnicki.github.io",
  baseUrl: '/ppsr-core/',
  organizationName: 'bbudnicki',
};
module.exports = docusaurusBETA;
