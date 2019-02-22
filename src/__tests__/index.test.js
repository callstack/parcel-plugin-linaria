const Bundler = require('parcel-bundler');
const assertBundleTree = require('parcel-assert-bundle-tree');
const path = require('path');
const LinariaPlugin = require('../index');

const bundleFile = async filename => {
  const bundler = new Bundler(filename, {
    outDir: path.join(__dirname, '..', '__output__'),
    sourceMaps: true,
    watch: false,
    cache: false,
    hmr: false,
    logLevel: 0,
  });

  await LinariaPlugin(bundler);

  const bundle = await bundler.bundle();

  return bundle;
};

it('bundles file with css tag', async function() {
  const bundle = await bundleFile(
    path.join(__dirname, '..', '__fixtures__', 'css.js')
  );

  assertBundleTree(bundle, {
    name: 'css.js',
    assets: ['css.js'],
    childBundles: [
      {
        type: 'css',
        assets: ['css.js'],
      },
    ],
  });
});

it('bundles file with styled tag', async function() {
  const bundle = await bundleFile(
    path.join(__dirname, '..', '__fixtures__', 'styled.js')
  );

  assertBundleTree(bundle, {
    name: 'styled.js',
    assets: ['styled.js'],
    childBundles: [
      {
        type: 'css',
        assets: ['styled.js'],
      },
    ],
  });
});
