const { Asset } = require('parcel-bundler');
const { SourceMapConsumer } = require('source-map');
const transform = require('linaria/lib/transform');

class LinariaAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
  }

  pretransform() {
    this.transformedResult = transform(this.contents, {
      filename: this.name,
    });
  }

  collectDependencies() {
    const { dependencies } = this.transformedResult;

    if (dependencies) {
      dependencies.forEach(dep => {
        this.addDependency(dep);
      });
    }
  }

  generate() {
    const result = this.transformedResult;

    if (result.code === this.contents) {
      return;
    }

    const output = [
      {
        type: 'js',
        value: result.code,
        sourceMap: this.options.sourceMaps ? result.sourceMap : undefined,
      },
    ];

    if (result.cssText) {
      output.push({
        type: 'css',
        value: result.cssText,
        sourceMap: this.options.sourceMaps
          ? new SourceMapConsumer(result.cssSourceMapText)
          : undefined,
      });
    }

    return output;
  }
}

module.exports = LinariaAsset;
