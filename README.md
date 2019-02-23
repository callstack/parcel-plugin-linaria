# parcel-plugin-linaria

A plugin to use [Linaria](https://github.com/callstack/linaria) with [Parcel](https://parceljs.org/).

## Installation

```sh
yarn add --dev parcel-plugin-linaria
```

or

```sh
npm install --save-dev parcel-plugin-linaria
```

## Usage

The plugin works without any extra configuration. See [Linaria's docs](https://github.com/callstack/linaria/blob/master/docs/CONFIGURATION.md) if you want to configure the library.

## Limitations

- CSS source maps are not supported because [Parcel doesn't support them](https://github.com/parcel-bundler/parcel/issues/1824).
- The plugin works by extending Parcel's `JSAsset` due to how Parcel works. Any other plugins which do the same might have conflicts.

## License

MIT License
