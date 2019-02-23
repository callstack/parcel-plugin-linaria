module.exports = function(bundler) {
  bundler.addAssetType('js', require.resolve('./LinariaAsset'));
};
