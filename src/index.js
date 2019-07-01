/* eslint-disable func-names */

module.exports = function(bundler) {
  const LinariaAsset = require.resolve('./LinariaAsset');

  bundler.addAssetType('js', LinariaAsset);
  bundler.addAssetType('jsx', LinariaAsset);

  bundler.addAssetType('ts', LinariaAsset);
  bundler.addAssetType('tsx', LinariaAsset);
};
