/* eslint-disable */
// https://webpack.js.org/configuration/

/*! webpack config */

'use strict';

const appInfo = require('../public/manifest.json');

// tool
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const WorkerPlugin = require('worker-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const postcssNormalize = require('postcss-normalize');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = ({ NODE_ENV, SRC_DIR, BUILD_DIR, isEnvDevelopment = NODE_ENV === 'development', isEnvProduction = !isEnvDevelopment }) => ({
  mode: isEnvDevelopment ? 'development' : 'production',
  // Stop compilation early in production
  bail: isEnvProduction,
  target: 'web',
  devtool: isEnvDevelopment ? 'eval-cheap-module-source-map' : false,
  watch: isEnvDevelopment,
  watchOptions: {
    ignored: /node_modules/,
  },
  context: path.resolve(__dirname, '../'),
  entry: {
    app: path.join(SRC_DIR, '/index.tsx'),
  },
  output: {
    // The build folder.
    path: BUILD_DIR,
    filename: isEnvDevelopment ? '[name].js' : '[name].[contenthash:8].js',
    // There are also additional JS chunk files if you use code splitting.
    chunkFilename: isEnvDevelopment ? '[name].chunk.js' : '[name].[chunkhash:8].chunk.js',
    // https://webpack.js.org/configuration/output/#outputpublicpath
    // publicPath: ''
    // Point sourcemap entries to original disk location (format as URL on Windows)
    devtoolModuleFilenameTemplate: isEnvProduction
      ? (info) => path.relative(SRC_DIR, info.absoluteResourcePath).replace(/\\/g, '/')
      : isEnvDevelopment && ((info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    // this defaults to 'window', but by setting it to 'this' then
    // module chunks which are built will work in web workers as well.
    globalObject: 'this',
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          mangle: {
            safari10: true,
          },
          output: {
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
      }),
      // This is only used in production mode
      new CssMinimizerPlugin(),
    ],
    // Automatically split vendor and commons
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    // Keep the runtime chunk separated to enable long term caching
    // https://github.com/facebook/create-react-app/issues/5358
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
      // multiple entry points
      // name: 'single',
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    // Alias will cause IntelliSense to be invalid.
    // Although it can be fixed, it will increase configuration complexity and cause a series of problems.
    // alias: {
    // 	components: path.resolve('./src/components/'),
    // 	models: path.resolve('./src/models/'),
    // 	utils: path.resolve('./src/utils/'),
    // 	assets: path.resolve('./src/assets/'),
    // 	vendors: path.resolve('./src/vendors/'),
    // },
  },
  module: {
    rules: [
      {
        test: /\.([tj]sx?|mjs)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              compact: isEnvProduction,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
          isEnvDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: isEnvDevelopment,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isEnvDevelopment,
              postcssOptions: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: [
                  require('cssnano')({
                    preset: 'default',
                  }),
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                  // Adds PostCSS Normalize as the reset css with default options,
                  // so that it honors browserslist config in package.json
                  // which in turn let's users customize the target behavior as per their needs.
                  postcssNormalize(),
                ],
              },
            },
          },
          'sass-loader',
        ],
        // See https://github.com/webpack/webpack/issues/6571
        sideEffects: true,
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: {
                list: [
                  {
                    tag: 'img',
                    attribute: 'src',
                    type: 'src',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src',
                  },
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(bmp|gif|png|jpe?g|svg)$/i,
        exclude: /node_modules/,
        // https://webpack.js.org/guides/asset-modules/
        type: 'asset',
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 8 * 1024, // 8kb
        //   },
        // },
        use: [
          // install https://github.com/tcoopman/image-webpack-loader#install
          // {
          //   loader: 'image-webpack-loader',
          //   options: {
          //     disable: isEnvDevelopment,
          //     mozjpeg: {
          //       progressive: true,
          //       quality: 65,
          //     },
          //     optipng: {
          //       enabled: false,
          //     },
          //     pngquant: {
          //       quality: [0.65, 0.9],
          //       speed: 4,
          //     },
          //     gifsicle: {
          //       interlaced: false,
          //     },
          //     webp: {
          //       quality: 75,
          //     },
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: BUILD_DIR,
      manifest: path.join(BUILD_DIR, './vendor-manifest.json'),
    }),
    new WorkerPlugin(),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        enabled: false,
      },
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}', // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
      },
      issue: {
        exclude: (issue) => issue.severity === 'warning',
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public/*.!(ejs)',
          to: '[name][ext]',
          transform: { cache: true },
        },
        {
          from: './src/assets/',
          to: './assets/',
          transform: { cache: true },
        },
        {
          from: './src/vendors/',
          to: './vendors/',
          transform: { cache: true },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      chunks: ['app'],
      filename: 'index.html',
      template: './public/index.ejs',
      templateParameters: {
        title: appInfo.name,
        description: appInfo.description,
        favicon: 'favicon.ico',
        manifest: 'manifest.json',
        vendor: 'vendor.js',
      },
    }),
    isEnvDevelopment && new ReactRefreshWebpackPlugin(),
    // This is necessary to emit hot updates (currently CSS only):
    isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
    // File systems of different operating systems handle case differently, forcing case sensitivity
    isEnvDevelopment && new CaseSensitivePathsPlugin(),
    isEnvProduction &&
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
      }),
    isEnvProduction &&
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        exclude: [/\.map$/, /asset-manifest\.json$/],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
        additionalManifestEntries: [
          { url: 'vendor-manifest.json', revision: appInfo._version },
          { url: 'vendor.js', revision: appInfo._version },
        ],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      }),
    isEnvProduction && new BundleAnalyzerPlugin(),
  ].filter(Boolean),
  performance: {
    hints: 'warning',
    assetFilter: (assetFilename) => {
      return isEnvDevelopment ? false : !/vendor/.test(assetFilename);
    },
  },
});
