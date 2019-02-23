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
    assets: ['css.js', 'css.js', 'cx.js', 'index.js'],
    childBundles: [
      {
        type: 'css',
        assets: ['css.js'],
      },
      {
        type: 'map',
        assets: ['css.js', 'css.js', 'cx.js', 'index.js'],
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
    childBundles: [
      {
        type: 'map',
      },
      {
        type: 'css',
        assets: ['styled.js'],
      },
    ],
  });
});

it('bundles combined file', async function() {
  const bundle = await bundleFile(
    path.join(__dirname, '..', '__fixtures__', 'index.js')
  );

  assertBundleTree(bundle, {
    name: 'index.js',
    childBundles: [
      {
        type: 'css',
        assets: ["css.js", "styled.js"],
      },
      {
        type: 'map',
      },
    ],
  });
});
