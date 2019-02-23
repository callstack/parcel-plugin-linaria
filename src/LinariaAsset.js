const path = require('path');
const Module = require('module');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');
const transform = require('linaria/lib/transform');

const RESULT = Symbol('linaria-transform-result');

class LinariaAsset extends JSAsset {
  async pretransform() {
    if (!/node_modules/.test(this.name)) {
      const result = transform(this.contents, {
        filename: this.name,
      });

      this[RESULT] = result;
      this.contents = result.code;
      this.ast = null;
    } else {
      this[RESULT] = {};
    }

    await super.pretransform();
  }

  collectDependencies() {
    const { dependencies } = this[RESULT];

    if (dependencies) {
      dependencies.forEach(dep => {
        try {
          const resolved = Module._resolveFilename(dep, {
            id: this.name,
            filename: this.name,
            paths: Module._nodeModulePaths(path.dirname(this.name)),
          });

          this.addDependency(resolved, { includedInParent: true });
        } catch (e) {
          console.warn(
            `Failed to add dependency '${dep}' for ${this.name}`,
            e
          );
        }
      });
    }

    super.collectDependencies();
  }

  async generate() {
    const result = this[RESULT];
    const output = (await super.generate()) || {};

    if (result.cssText) {
      output.css = result.cssText;

      if (this.options.sourceMaps) {
        output.css += `/*# sourceMappingURL=data:application/json;base64,${Buffer.from(
          result.cssSourceMapText || ''
        ).toString('base64')}*/`;
      }
    }

    return output;
  }
}

module.exports = LinariaAsset;
