//what this does: it updates file names in manifest.
//why it is there: it is quite tricky to configure react-rewired to omit hash
//in output files' names. It was much faster to write a small helper instead.
const fs = require('fs');
const assetManifestPath = './build/asset-manifest.json';
const mainManifestPath = './build/manifest.json';
const assetManifest = require(assetManifestPath);
const mainManifest = require(mainManifestPath);

const mainJS = assetManifest.files['main.js'];
const backJSKey = Object.keys(assetManifest.files).find((key) =>
  key.match(/^background\.[^.]+\.js$/),
);
const backJS = assetManifest.files[backJSKey];
mainManifest.content_scripts[0].js = [mainJS];
mainManifest.background.service_worker = backJS;

fs.writeFile(mainManifestPath, JSON.stringify(mainManifest, null, 2), function writeJSON(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully updated content script');
  }
});
