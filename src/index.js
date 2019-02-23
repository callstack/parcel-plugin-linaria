/* eslint-disable func-names */

module.exports = function(bundler) {
  bundler.addAssetType('js', require.resolve('./LinariaAsset'));
  bundler.addPackager('css', require.resolve('./LinariaPackager'));
};
