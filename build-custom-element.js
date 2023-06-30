const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angular-portlet-blog-detail/runtime.js',
    './dist/angular-portlet-blog-detail/polyfills.js',
    './dist/angular-portlet-blog-detail/main.js'
  ];
  await fs.ensureDir('angular-elements-build');
  await fs.removeSync('angular-elements-build/blog-detail.js');
  await concat(files, 'angular-elements-build/blog-detail.js');

  await fs.copy('./src/app/app.component.css', 'angular-elements-build/styles.css');
})();
