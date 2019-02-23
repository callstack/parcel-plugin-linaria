const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const { SourceMapConsumer } = require('source-map');
const transform = require('linaria/lib/transform');

const RESULT = Symbol('linaria-transform-result');

class LinariaAsset extends JSAsset {
  constructor(...args) {
    super(...args);
  }

  pretransform() {
    const result = transform(this.contents, {
      filename: this.name,
    });

    this[RESULT] = result;
    this.contents = result.code;

    super.pretransform();
  }

  collectDependencies() {
    const { dependencies } = this[RESULT];

    if (dependencies) {
      dependencies.forEach(dep => {
        this.addDependency(dep);
      });
    }

    super.collectDependencies();
  }

  async generate() {
    const result = this[RESULT];
    const output = (await super.generate()) || {};

    if (result.cssText) {
      output.css = result.cssText;
    }

    return output;
  }
}

module.exports = LinariaAsset;
