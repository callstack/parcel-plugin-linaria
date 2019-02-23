const { SourceMapGenerator, SourceMapConsumer } = require('source-map');
const CSSPackager = require('parcel-bundler/src/packagers/CSSPackager');

const SOURCEMAP = Symbol('sourcemap');

class LinariaPackager extends CSSPackager {
  constructor(...args) {
    super(...args);

    this[SOURCEMAP] = new SourceMapGenerator({
      file: this.bundle.name,
      sourceRoot: '/',
    });
  }

  async addAsset(asset) {
    if (asset.generated.css.map) {
      const consumer = await new SourceMapConsumer(asset.generated.css.map);

      this[SOURCEMAP].applySourceMap(consumer);
    }

    // eslint-disable-next-line no-param-reassign
    asset.generated.css = asset.generated.css.toString();

    await super.addAsset(asset);
  }

  async end() {
    console.log(this[SOURCEMAP].toString());
    this.dest.write(
      `\n\n/*# sourceMappingURL=data:application/json;base64,${Buffer.from(
        this[SOURCEMAP].toString() || ''
      ).toString('base64')}*/`
    );

    await this.dest.end();
  }
}

module.exports = LinariaPackager;
