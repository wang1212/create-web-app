# Web App

PWA, Progressive Web App.

## Directory Structure

    App/
    ├── build/
    ├── docs/
    |   └── jsdoc/
    |── config/
    |   |── nginx.conf
    |   ├── path.config.js
    |   ├── webpack.config.js
    |   ├── webpack.dll.config.js
    |   ├── devServer.config.js
    |   ├── jest.config.js
    |   └── jsdoc.config.js
    |── public/
    |   ├── manifest.json
    |   └── index.ejs
    |── scripts/
    |   └── index.js
    |── src/
    |   ├── components/
    |   |   └── shared/
    |   ├── utils/
    |   ├── assets/
    |   ├── vendors/
    |   ├── index.js
    |   └── index.scss
    |── .babelrc.js
    |── .eslintrc.js
    |── .stylelintrc.js
    |── .prettierrc.yml
    |── tsconfig.json
    └── CHANGELOG.md

## Features

-   [SPA](https://en.wikipedia.org/wiki/Single-page_application)
-   [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications) - use [WorkBox](https://developers.google.com/web/tools/workbox/), [workbox-webpack-plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin).
-   [Webpack](https://webpack.js.org/)
-   [Browser-Sync](https://www.browsersync.io/)
-   [Babel](https://babeljs.io/)
-   [TypeScript](http://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [stylelint](https://stylelint.io/)
-   [Prettier](https://prettier.io/)
-   [Jest](https://jestjs.io/)
-   [JSDoc 3](http://usejsdoc.org/)
-   [Nginx](http://nginx.org/)

## Usage

Download all the code of the project to the local.

1.  First, install all the dependencies of the development environment

        git init && npm install

2.  server

    The server has been configured by default. If you use a proxy, you can add it in the configuration file **devServer.config.js**. See the documentation for details.

3.  Start the project (development environment)

        npm run start

4.  Perform code type checking

    For `.ts, .tsx` files, run:

        npm run type-check

    For `.js, .jsx, .ts, .tsx` files, run:

        npm run lint-js

    For `.css, .sass, .scss` files, run:

        npm run lint-css

5.  Perform code testing

        npm run test

6.  Generate jsdoc documentation

        npm run docs

7.  Build the production environment code, the deployment code will be generated in the **build/** directory

        npm run build
