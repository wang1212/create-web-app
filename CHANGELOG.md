# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.7.4](https://github.com/wang1212/create-web-app/compare/v0.7.3...v0.7.4) (2022-08-30)


### Bug Fixes

* **deps:** update dependency inquirer to v9 ([#68](https://github.com/wang1212/create-web-app/issues/68)) ([beadc5a](https://github.com/wang1212/create-web-app/commit/beadc5a90450a4cf14585919c2c0d12f66bc9984))

### [0.7.3](https://github.com/wang1212/create-web-app/compare/v0.7.2...v0.7.3) (2022-05-08)


### Features

* **templates:** add `source-map-loader` loader to debug third-party libraries :sparkles: ([062fdae](https://github.com/wang1212/create-web-app/commit/062fdae349e8be49e17bfe6f7f8f2637a04e1a98))


### Bug Fixes

* upgrade fs-extra from 10.0.0 to 10.1.0 ([d6128ff](https://github.com/wang1212/create-web-app/commit/d6128ff6c5a84b1f4d72a7824849544de228c751))

### [0.7.2](https://github.com/wang1212/create-web-app/compare/v0.7.1...v0.7.2) (2022-04-30)

### Features

- **templates:** upgrade `eslint` to v8
- **templates:** upgrade `stylelint` to v14
- **templates:** upgrade `jest` to v28

### Bug Fixes

- **templates:** downgrade fork-ts-checker plugin version :arrow_down: ([71ab5f3](https://github.com/wang1212/create-web-app/commit/71ab5f331715231b7daff0298f4a99fecaf2f1d2))
- upgrade inquirer from 8.2.0 to 8.2.2 ([#38](https://github.com/wang1212/create-web-app/issues/38)) ([7cc3796](https://github.com/wang1212/create-web-app/commit/7cc3796cfa45587ff18cc78c19c3fbac534e29bf))
- upgrade ora from 6.0.1 to 6.1.0 ([#39](https://github.com/wang1212/create-web-app/issues/39)) ([09c7bd8](https://github.com/wang1212/create-web-app/commit/09c7bd8c77efc79c3cc9192e9ee4a952bd69df0e))

### v0.7.1 (2022-04-14)

- feat(templates): let `babel-loader` compile third-party dependencies :wrench: ef54a8c
- chore(templates): simplify webpack stats output log :art: b7844e6
- build(templates): `image-webpack-loader` is not enabled by default :heavy_minus_sign: 4e3ffe9
- feat(templates): add `fork-ts-checker-webpack-plugin` to do type check :sparkles: ba21022

https://github.com/wang1212/create-web-app/compare/v0.7.0...v0.7.1

## v0.7.0 (2022-01-02)

**This package is now pure ESM, read https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c.**

- feat: convert command line parameters to interactive command line :recycle: 99a9e5e
- feat(templates): add `eslint-plugin-tsdoc` plugin :sparkles: e1567f8
- build(templates): replace polyfill solution with `usage` mode :zap: 1569d00
- docs: update changelog 8375509

https://github.com/wang1212/create-web-app/compare/v0.6.4...v0.7.0

## v0.6.4 (2021-09-22)

- perf(templates): add `web-vitals` to collect performance information :sparkles: c776958

https://github.com/wang1212/create-web-app/compare/v0.6.3...v0.6.4

## v0.6.3 (2021-09-21)

- chore(templates): add a polyfill solution based on `core-js@3` :ambulance: 65e9521
- build(templates): remove `postcss-safe-parser` :wastebasket: 748882e

https://github.com/wang1212/create-web-app/compare/v0.6.2...v0.6.3

## v0.6.2 (2021-08-31)

- style(templates): add eslint-plugin-sonarjs ✨
- style(templates): add eslint-config-airbnb ✨
- build(templates): add eslint-formatter-pretty to beautify output 🤡
- build(templates): add css-minimizer-webpack-plugin tool ➕
- update dependences version

View all changes https://github.com/wang1212/create-web-app/compare/v0.6.0...v0.6.2

## v0.6.0 (2021-05-19)

- **build(templates): add commitlint to lint commit message 034087d**
- **build(templates): remove webpack file path alias 037f605**
- update dependences version

View all changes https://github.com/wang1212/create-web-app/compare/v0.5.0...v0.6.0

## v0.5.0 (2020-11-09)

- Update
  - **webpack** (v4.x to v5.x)

View all dependent version update information https://github.com/wang1212/create-web-app/compare/v0.4.4...v0.5.0

## v0.4.4 (2020-10-13)

- Add
  - **cssnano**

View all dependent version update information https://github.com/wang1212/create-web-app/compare/v0.4.0...v0.4.4

## v0.4.0 (2020-09-08)

- Add
  - **stylelint**

View all dependent version update information https://github.com/wang1212/create-web-app/compare/v0.3.18...v0.4.0

## v0.3.18 (2020-07-29)

- Add
  - **worker-plugin**
- Remove
  - worker-loader

View all dependent version update information https://github.com/wang1212/create-web-app/compare/v0.3.16...v0.3.18

## v0.3.16 (2020-07-13)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

- Add
  - **webpack-dev-server**
  - **react-refresh**
  - **@pmmmwh/react-refresh-webpack-plugin**
  - **sass**
- Remove
  - **browser-sync**
  - **node-sass**

View all dependent version update information https://github.com/wang1212/create-web-app/compare/v0.3.15...v0.3.16#diff-fec80d78410a2faa5a637f0d4ad97899

## v0.3.13 (2020-06-29)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

- Add
  - **husky**
  - **lint-staged**

View all dependent version update information https://github.com/wang1212/create-web-app/compare/v0.3.12...v0.3.13#diff-fec80d78410a2faa5a637f0d4ad97899

## v0.3.12 (2020-06-16)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

- Remove
  - redux
  - redux-thunk
- Add
  - **@rematch/core**

View all dependent version update information https://github.com/wang1212/create-web-app/commit/bc714f2887680da12d9804f3d9f9448de2a132e8#diff-028d8f9376632ac5c219d6b7d8f4abab

## v0.3.11 (2020-05-17)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

[0]: https://github.com/terser/terser
[1]: https://github.com/mishoo/UglifyJS2

- Update
  - react-router-dom -> ^5.2.0 (react-app)
  - @babel/core -> ^7.9.6
  - @typescript-eslint/parser -> ^2.33.0
  - **copy-webpack-plugin -> ^6.0.0**
  - **eslint -> ^7.0.0**
  - jest -> ^26.0.1
  - **postcss-normalize -> ^9.0.0**
  - prettier -> 2.0.5
  - typescript -> ^3.9.2

View all dependent version update information https://github.com/wang1212/create-web-app/commit/4a6036e93791c8bddb9099cbf5e7924639db503f#diff-028d8f9376632ac5c219d6b7d8f4abab

## v0.3.2 (2020-03-23)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

> **Use [terser][0] instead of [uglify-js][1].**

[0]: https://github.com/terser/terser
[1]: https://github.com/mishoo/UglifyJS2

- Add
  - **terser-webpack-plugin**
  - **@babel/plugin-proposal-class-properties**
  - **postcss-safe-parser**
  - **postcss-normalize**
  - **postcss-flexbugs-fixes**
- Update
  - react -> ^16.13.1 (react-app)
  - react-jss -> ^10.1.1 (react-app)
  - @babel/core -> ^7.9.0
  - **html-webpack-plugin -> ^4.0.0**
  - html-loader -> ^1.0.0
  - file-loader -> ^6.0.0
  - url-loader -> ^4.0.0
  - prettier -> 2.0.1
- Remove
  - **uglifyjs-webpack-plugin**

## v0.3.0 (2020-03-14)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

> **Deprecated [flow.js][0] and use [typescript][1] instead.**

[0]: https://flow.org/ 'Flow: A Static Type Checker for JavaScript'
[1]: http://www.typescriptlang.org/ 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript'

- Add
  - **@typescript-eslint/parser**
  - **@typescript-eslint/eslint-plugin**
  - **image-webpack-loader**
- Update
  - react -> ^16.13.0 (react-app)
  - regenerator-runtime -> ^0.13.5
  - @babel/core -> ^7.8.7
  - webpack -> ^4.42.0
- Remove
  - **babel-eslint**
  - **@babel/preset-flow**
  - **flow-bin**
  - **flow-typed**
  - **imagemin-jpeg-recompress**
  - **imagemin-webpack-plugin**

## v0.2.9 (2020-02-27)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

- Update
  - @loadable/component -> ^5.12.0（react app）
  - react-redux -> ^7.2.0（react app）
  - @babel/core -> ^7.8.4
  - babel-eslint -> ^10.1.0
  - babel-jest -> ^25.1.0
  - docdash -> ^1.2.0
  - eslint -> ^6.8.0
  - flow-bin -> ^0.119.1
  - flow-typed -> ^3.0.0
  - jest -> ^25.1.0
  - typescript -> ^3.8.2
  - **workbox-webpack-plugin -> ^5.0.0**

## v0.2.8 (2019-12-19)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

- Add
  - **prettier**
  - **eslint-config-prettier**
  - **eslint-plugin-prettier**
- Update
  - @babel/core -> ^7.7.7
  - eslint -> ^6.7.2
  - flow-bin -> ^0.114.0
  - typescript -> ^3.7.3
  - webpack -> ^4.41.4
  - url-loader -> ^3.0.0

## v0.2.7 (2019-11-18)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Changelog

- Update
  - react -> ^16.12.0
  - @babel/core -> ^7.7.2
  - eslint -> ^6.6.0
  - flow-bin -> ^0.112.0
  - typescript -> ^3.7.2

## v0.2.6 (2019-10-24)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### ChangeLogs

- Add
  - **regenerator-runtime**
  - **@loadable/component** (react app)
  - **eslint-plugin-react-hooks** (react app)
- Update
  - react -> ^16.11.0
  - react-router-dom -> ^5.1.2
  - @babel/core -> ^7.6.4
  - @babel/preset-react -> ^7.6.3
  - eslint -> ^6.5.1
  - flow-bin -> ^0.110.0
  - sass-loader -> ^8.0.0
  - style-loader -> ^1.0.0
  - webpack -> ^4.41.2
- Remove
  - **@babel/plugin-proposal-class-properties** (web app)

## v0.2.2-create-web-app (2019-07-09)

- **create web app** - Builds PWA that doesn't depend on any development framework.
- **create react app** - Builds PWA based on React framework ecosystems such as React.js, Redux.js, and React Router.

### Change Logs

**Note:** The previous _`generic web app`_ and _`react web app`_ have been merged and are no longer updated independently.

- Add
  - **@babel/preset-typescript**
  - **postcss-preset-env**
- Update
  - flow-bin -> ^0.102.0
- Remove
  - **ts-loader**
  - **autoprefixer**

## v0.2.0-web-app (2019-07-01)

**generic web app** - Suitable for any project that does not use a framework.

**Note:** The previous **generic** was renamed to **web-app**.

- add
  - **worker-loader**
  - **typescript**
  - **ts-loader**
- update
  - webpack -> ^4.35.0
  - url-loader -> ^2.0.0
  - css-loader -> ^3.0.0
  - jsdoc -> ^3.6.2
  - jest -> ^24.8.0
  - flow-bin -> ^0.101.1
  - eslint -> ^6.0.1

## v0.1.4-generic (2019-05-05)

**generic** - Suitable for any project that does not use a framework.

- add
  - **flow-bin**
  - **flow-typed**
  - **@babel/preset-flow**
  - **jest**
  - **workbox-webpack-plugin**
- update
  - webpack -> ^4.30.0
  - @babel/core -> ^7.4.4
  - del -> "^4.1.1
  - webpack-bundle-analyzer -> ^3.3.2

## v0.1.7-with-react (2019-03-25)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development.

- update
  - react -> ^16.8.5
  - @babel/core -> ^7.4.0

## v0.1.6-with-react (2019-03-20)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development.

- add
  - **jest**
  - **babel-jest**
- update
  - react-router-dom -> ^5.0.0
  - flow-bin -> ^0.95.1
- remove
  - **lodash**
  - **reactstrap**

## v0.1.5-with-react (2019-03-11)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development.

- add
  - **workbox-webpack-plugin**
- remove
  - **offline-plugin**

## v0.1.4-with-react (2019-03-01)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development.

- add
  - **offline-plugin**
- update
  - react -> ^16.8.4
  - @babel/core -> ^7.3.4
  - webpack -> ^4.29.6
  - flow-bin -> ^0.94.0
  - del -> ^4.0.0
  - copy-webpack-plugin -> ^5.0.0

## v0.1.3-generic (2019-02-25)

**generic** - Suitable for any project that does not use a framework.

- add
  - **html-loader**
- update
  - webpack -> ^4.29.5
  - @babel/core -> ^7.3.3
  - css-loader -> ^2.1.0
  - file-loader -> ^3.0.1
  - imagemin-jpeg-recompress -> ^6.0.0

## v0.1.3-with-react (2018-12-28)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development.

- add
  - **html-loader**
  - **webpack-bundle-analyzer**
- update
  - react -> ^16.7.0
  - react-redux -> ^6.0.0
  - webpack -> ^4.28.2
  - flow-bin -> ^0.89.0
  - css-loader -> ^2.1.0
  - file-loader -> ^3.0.1
  - imagemin-jpeg-recompress -> ^6.0.0

## v0.1.2-generic (2018-11-23)

**generic** - Suitable for any project that does not use a framework.

- add
  - **del**
  - **webpack-bundle-analyzer**
- update
  - webpack -> ^4.26.0
- remove
  - **gulp**
  - **gulp-clean**

## v0.1.2-with-react (2018-11-07)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development.

- add
  - **del**
- update
  - webpack -> ^4.25.1
  - flow-bin -> ^0.85.0
- remove
  - **gulp**
  - **gulp-clean**

## v0.1.1-with-react (2018-10-25)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development

- add
  - **copy-webpack-plugin**
  - **imagemin-webpack-plugin**
  - **axios**
  - **lodash**
- update
  - webpack -> ^4.23.0
  - react -> ^16.6.0
  - flow-bin -> ^0.83.0
- remove
  - **gulp-imagemin**

## v0.1.1-generic (2018-10-23)

**generic** - Suitable for any project that does not use a framework.

- add
  - **imagemin-webpack-plugin**
- update
  - webpack -> ^4.22.0
- remove
  - **gulp-imagemin**

## v0.1.0-generic (2018-10-22)

**generic** - Suitable for any project that does not use a framework.

- add
  - **mini-css-extract-plugin**
  - **optimize-css-assets-webpack-plugin**
  - **copy-webpack-plugin**
- update
  - webpack -> ^4.21.0
  - @babel/core -> ^7.1.2
- remove
  - **extract-text-webpack-plugin**

## v0.1.0-with-react (2018-09-29)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development

- add
  - **mini-css-extract-plugin**
  - **optimize-css-assets-webpack-plugin**
- update
  - react -> ^16.5.2
  - @babel/core -> ^7.1.2
  - webpack -> ^4.20.2
  - flow-bin -> ^0.81.0
- remove
  - **extract-text-webpack-plugin**

## v0.0.3-with-react (2018-09-14)

**React.js** - Suitable for applications that rely on react.js and redux && react-router development

- add package **react-router-dom** and **react-loadable**

- update
  - react -> 16.5.1
  - webpack -> 4.19.0
  - flow -> 0.80.0

## v0.0.2-with-react (2018-09-11)

**React.js** - Suitable for applications that rely on react.js and redux development

- add jsdoc template **docdash**

## v0.0.2-generic (2018-09-11)

**generic** - Suitable for all types of projects

- add jsdoc template **docdash**

## v0.0.1-with-react (2018-09-09)

**React.js** - Suitable for applications that rely on react.js and redux development

## v0.0.1-generic (2018-09-06)

**generic** - Suitable for all types of projects
