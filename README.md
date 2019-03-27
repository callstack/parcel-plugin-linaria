# parcel-plugin-linaria

[![Build Status][build-badge]][build]
[![Code Coverage][coverage-badge]][coverage]
[![Version][version-badge]][package]
[![MIT License][license-badge]][license]

[![PRs Welcome][prs-welcome-badge]][prs-welcome]
[![Chat][chat-badge]][chat]
[![Sponsored by Callstack][callstack-badge]][callstack]

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

## Made with ❤️ at Callstack

`parcel-plugin-linaria` is an open source project and will always remain free to use. If you think it's cool, please star it 🌟. [Callstack](https://callstack.com) is a group of React and React Native geeks, contact us at [hello@callstack.com](mailto:hello@callstack.com) if you need any help with these or just want to say hi!

<!-- badges -->
[build-badge]: https://img.shields.io/circleci/project/github/callstack/parcel-plugin-linaria/master.svg?style=flat-square
[build]: https://circleci.com/gh/callstack/parcel-plugin-linaria
[coverage-badge]: https://img.shields.io/codecov/c/github/callstack/parcel-plugin-linaria.svg?style=flat-square
[coverage]: https://codecov.io/github/callstack/parcel-plugin-linaria
[version-badge]: https://img.shields.io/npm/v/parcel-plugin-linaria.svg?style=flat-square
[package]: https://www.npmjs.com/package/parcel-plugin-linaria
[license-badge]: https://img.shields.io/npm/l/parcel-plugin-linaria.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[prs-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome]: http://makeapullrequest.com
[chat-badge]: https://img.shields.io/discord/426714625279524876.svg?style=flat-square&colorB=758ED3
[chat]: https://discord.gg/zwR2Cdh
[callstack-badge]: https://callstack.com/images/callstack-badge.svg
[callstack]: https://callstack.com/open-source/?utm_source=github.com&utm_medium=referral&utm_campaign=linaria&utm_term=readme
