/* eslint-disable */
// https://webpack.js.org/configuration/

/*! webpack config */

'use strict'

const appInfo = require('../public/manifest.json')

// tool
const path = require('path')
const webpack = require('webpack')

// webpack plugins
const WorkerPlugin = require('worker-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const safePostCssParser = require('postcss-safe-parser')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const postcssNormalize = require('postcss-normalize')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = ({ NODE_ENV, SRC_DIR, BUILD_DIR, isEnvDevelopment = NODE_ENV === 'development', isEnvProduction = !isEnvDevelopment }) => ({
	mode: isEnvDevelopment ? 'development' : 'production',
	// Stop compilation early in production
	bail: isEnvProduction,
	target: 'web',
	devtool: isEnvDevelopment ? 'cheap-module-eval-source-map' : 'none',
	watch: isEnvDevelopment,
	watchOptions: {
		ignored: /node_modules/,
	},
	context: path.resolve(__dirname, '../'),
	entry: {
		app: path.join(SRC_DIR, '/index.js'),
	},
	output: {
		// The build folder.
		path: BUILD_DIR,
		filename: isEnvDevelopment ? '[name].js' : '[name].[contenthash:8].js',
		// TODO: remove this when upgrading to webpack 5
		futureEmitAssets: true,
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
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					parser: safePostCssParser,
				},
				cssProcessorPluginOptions: {
					preset: ['default', { minifyFontValues: { removeQuotes: false } }],
				},
			}),
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
		extensions: ['.ts', '.js', '.mjs', '.json'],
		alias: {
			components: path.resolve('./src/components/'),
			utils: path.resolve('./src/utils/'),
			assets: path.resolve('./src/assets/'),
			vendors: path.resolve('./src/vendors/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.([tj]s|mjs)$/i,
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
							attributes: {
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
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
					{
						loader: 'image-webpack-loader',
						options: {
							disable: isEnvDevelopment,
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 75,
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: path.join(BUILD_DIR, './vendor-manifest.json'),
		}),
		new WorkerPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './public/*.!(ejs)',
					to: '.',
					flatten: true,
					cacheTransform: true,
				},
				{
					from: './src/assets',
					to: './assets',
					cacheTransform: true,
				},
				{
					from: './src/vendors',
					to: './vendors',
					cacheTransform: true,
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
		new BundleAnalyzerPlugin(),
	].filter(Boolean),
	// Some libraries import Node modules but don't use them in the browser.
	// Tell webpack to provide empty mocks for them so importing them works.
	node: {
		module: 'empty',
		dgram: 'empty',
		dns: 'mock',
		fs: 'empty',
		http2: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
	},
	performance: {
		hints: 'warning',
		assetFilter: (assetFilename) => {
			return isEnvDevelopment ? false : !/vendor/.test(assetFilename)
		},
	},
})
