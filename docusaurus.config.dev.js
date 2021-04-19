let docusaurusPRD = require('./docusaurus.config');
let docusaurusDEV = {
  ...docusaurusPRD,
  title: `BETA ${docusaurusPRD.title}`,
  noIndex: true, // Defaults to `false`
};
module.exports = docusaurusDEV;
