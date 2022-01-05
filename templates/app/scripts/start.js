/* eslint-disable */

/*! start dev */

'use strict';

// env
const NODE_ENV = (process.env.NODE_ENV || 'production').trim();

// configs
const pathConfig = require('../config/path.config.js')(NODE_ENV);
const serverConfig = require('../config/devServer.config');

// * Use del to delete files in the external project directory
const del = require('del');

// webpack tool
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// first, clean build dir
del([pathConfig.build], { force: true })
  .then(() => {
    console.log('--------- Clean up the build directory completed! -----------\n');

    // webpack
    return new Promise((resolve, reject) => {
      /* 1. External dependence */
      webpack(
        require('../config/webpack.dll.config')({
          NODE_ENV,
          BUILD_DIR: pathConfig.build,
        }),
        (err, stats) => {
          if (err) {
            console.error(err.stack || err);
            if (err.details) {
              console.error(err.details);
            }
            reject(err);
            return;
          }

          const info = stats.toJson();

          if (stats.hasErrors()) {
            console.error(info.errors);
            reject(info.errors);
            return;
          }

          if (stats.hasWarnings()) {
            console.warn(info.warnings);
          }

          console.log(
            stats.toString({
              // https://webpack.js.org/configuration/stats/#stats-presets
              colors: true,
              preset: 'minimal',
            })
          );

          console.log('DLL has been compiled. \n');

          resolve(200);
        }
      );
    });

    //
  })
  .then((data) => {
    /* 2. Business code */
    if (data !== 200) throw new Error(data);

    const compiler = webpack(
      require('../config/webpack.config')({
        NODE_ENV,
        SRC_DIR: pathConfig.src,
        BUILD_DIR: pathConfig.build,
      }),
      () => {}
    );

    const devServer = new WebpackDevServer(
      {
        ...serverConfig,
        static: {
          directory: pathConfig.build,
          serveIndex: true,
        },
        devMiddleware: {
          ...(serverConfig.devMiddleware || {}),
          stats: {
            // https://webpack.js.org/configuration/stats/#stats-presets
            colors: true,
            preset: 'minimal',
          },
        },
      },
      compiler
    );

    devServer.start();

    ['SIGINT', 'SIGTERM'].forEach(function (sig) {
      process.on(sig, function () {
        devServer.close();
        process.exit();
      });
    });
  })
  .catch((err) => {
    console.error(err);
  });
