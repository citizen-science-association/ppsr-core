let docusaurusPRD = require('./docusaurus.config');
let docusaurusDEV = {
  ...docusaurusPRD,
  title: `BETA ${docusaurusPRD.title}`,
  noIndex: true, // Defaults to `false`,
  baseUrl: '/ppsr-core/',
};
console.log(docusaurusDEV);
module.exports = docusaurusDEV;
