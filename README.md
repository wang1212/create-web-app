# Create Web App

<!-- ![MINZIPPED SIZE](https://badgen.net/bundlephobia/minzip/@wang1212/create-web-app) -->

![LICENSE](https://badgen.net/github/license/wang1212/create-web-app)
[![NPM VERSION](https://badgen.net/npm/v/@wang1212/create-web-app)](https://www.npmjs.com/package/@wang1212/create-web-app)
![DOWNLOAD](https://badgen.net/npm/dt/@wang1212/create-web-app)
![LAST COMMIT](https://badgen.net/github/last-commit/wang1212/create-web-app)
![GITHUB PACKAGE CI](https://img.shields.io/github/workflow/status/wang1212/create-web-app/Node.js%20Package?label=ci/package%20publish)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7bc62c3b5faa4607a923339003583253)](https://www.codacy.com/gh/wang1212/create-web-app/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wang1212/create-web-app&utm_campaign=Badge_Grade)

English | [简体中文](./README.zh-CN.md)

:coffee: Create [PWA（Progressive Web App）](https://web.dev/progressive-web-apps/) project development environment startup configuration.

_**This package is now pure ESM, read [this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).**_

_**Starting with version `0.3.0`, [flow.js][0] will no longer be used, and [typescript][1] will be used instead.**_

[0]: https://flow.org/ 'Flow: A Static Type Checker for JavaScript'
[1]: http://www.typescriptlang.org/ 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript'

## Template type

Support the following types:

- javascript
- react.js（or [Official](https://create-react-app.dev/)）

`javascript` type builds a PWA that doesn't depend on any development framework, while `react.js` type builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

## Usage

- You don't need to install the package on your computer, you can use it and run:

  ```bash
  npm init @wang1212/web-app
  npx @wang1212/create-web-app // same as the previous line
  ```

- You can also install the package on your computer, use it to run:

  ```bash
  // install this package
  npm install -g @wang1212/create-web-app

  // now, use it to create a web app project
  create-web-app
  ```

Note: `create-web-app` has an alias `create-pwa`.

## Details

For more information, read `templates/*app/README.md` file contents.

## Development Guidelines

### Git Commit Message Format

Adopt [community commit format best practices](https://www.conventionalcommits.org/):

```bash
# Before
git commit

# Now
npm run commit
```

_This constraint relies on tools [commitizen](http://commitizen.github.io/cz-cli/) and [commitlint](https://commitlint.js.org/) provided by the community._

### npm publish

The version management of this module adopts the specifications recommended by the community [Semantic Versioning](https://semver.org/). Follow version changes and maintain a **CHANGELOG.md**([Learn why](https://keepachangelog.com/)).

```bash
# Update version and generate changelog before publishing to npm repository
npm run release # npm run release -- --first-release
# Or, preview
npm run release -- --dry-run

# Then
npm publish # npm publish --access public
```

_These jobs are done with the help of [standard-version](https://github.com/conventional-changelog/standard-version) tool provided by the community._

## Related

If you want to develop a node module package (library), maybe you can take a look:

> [create-lib-starter](https://github.com/wang1212/create-lib-starter)

Or, other similar things:

> [awesome-template](https://github.com/wang1212/awesome-template)
