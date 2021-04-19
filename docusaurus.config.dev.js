let docusaurusPRD = require('./docusaurus.config');
let docusaurusDEV = {
  ...docusaurusPRD,
  title: `BETA ${docusaurusPRD.title}`,
  noIndex: true, // Defaults to `false`
  url: "http://bbudnicki.github.io",
  baseUrl: '/ppsr-core',
};
module.exports = docusaurusDEV;
