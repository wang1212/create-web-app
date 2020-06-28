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
    |── .eslintrc.json
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
-   [Prettier](https://prettier.io/)
-   [Jest](https://jestjs.io/)
-   [JSDoc 3](http://usejsdoc.org/)
-   [Nginx](http://nginx.org/)

## Usage

Download all the code of the project to the local.

1.  First, install all the dependencies of the development environment

        npm install

2.  server

    If you use a reverse proxy, you need to install nginx locally, the configuration file is in **config/nginx.conf**, start nginx:

        start nginx

    If you do not use a reverse proxy, you can change the configuration of the [BrowserSync](https://www.browsersync.io/) plugin in **scripts/index.js**.

3.  Start the project (development environment)

        npm run start

4.  Perform code type checking

    For `.ts, .tsx` files, run:

        npm run type-check

    For all files, run:

        npm run lint

5.  Perform code testing

        npm run test

6.  Generate jsdoc documentation

        npm run docs

7.  Build the production environment code, the deployment code will be generated in the **build/** directory

        npm run build
