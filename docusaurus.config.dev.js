let docusaurusPRD = require('./docusaurus.config');
let docusaurusDEV = {
  ...docusaurusPRD,
  title: `DEV ${docusaurusPRD.title}`,
  noIndex: true, // Defaults to `false`
};
console.log(docusaurusDEV);
module.exports = docusaurusDEV;
