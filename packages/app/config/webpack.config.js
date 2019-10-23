/*! webpack config */

'use strict'

const app_info = require('../public/manifest.json')

// tool
const path = require('path')
const webpack = require('webpack')

// webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin'),
	HtmlWebpackPlugin       = require('html-webpack-plugin'),
	UglifyJsPlugin          = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin    = require('mini-css-extract-plugin'),
	OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	ImageminPlugin          = require('imagemin-webpack-plugin').default,
	ImageminJpeg            = require('imagemin-jpeg-recompress'),
	BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	WorkboxPlugin           = require('workbox-webpack-plugin')


module.exports = ({
	NODE_ENV,
	SRC_DIR,
	BUILD_DIR,
	is_dev = NODE_ENV === 'development'
}) => ({
	mode        : NODE_ENV,
	target      : 'web',
	devtool     : is_dev ? 'cheap-module-eval-source-map': 'none',
	watch       : true,
	watchOptions: {
		ignored: /node_modules/
	},
	context: path.resolve(__dirname, '../'),
	entry  : {
		app: SRC_DIR + 'app.js'
	},
	output: {
		path         : BUILD_DIR,
		filename     : is_dev ? '[name].js': '[name].[chunkhash].js',
		chunkFilename: is_dev ? '[name].js': '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test   : /\.worker\.js$/,
				exclude: /node_modules/,
				use    : [
					{
						loader: 'worker-loader'
					}
				]
			},
			{
				test   : /\.[tj]sx?$/,
				exclude: /node_modules/,
				use    : [
					{
						loader : 'babel-loader',
						options: {
							cacheDirectory: true,
						}
					}
				]
			},
			{
				test   : /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use    : [
					is_dev ? 'style-loader': MiniCssExtractPlugin.loader,
					{
						loader : 'css-loader',
						options: {
							sourceMap    : is_dev,
							importLoaders: 2
						}
					},
					{
						loader : 'postcss-loader',
						options: {
							sourceMap: is_dev,
							ident    : 'postcss',
							plugins  : () => [
								require('postcss-preset-env')
							]
						}
					},
					'sass-loader'
				]
			},
			{
				test   : /\.html$/,
				exclude: /node_modules/,
				use    : [
					{
						loader : 'html-loader',
						options: {
							attrs: ['img:src', 'img:data-src']
						}
					}
				]
			},
			{
				test   : /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				use    : [
					{
						loader : 'url-loader',
						options: {
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context : '.',
			manifest: path.join(BUILD_DIR, './vendor-manifest.json')
		}),
		new CopyWebpackPlugin([
			{
				from   : './public/*.!(ejs)',
				to     : '.',
				flatten: true,
				cache  : true
			},
			{
				from : './src/vendors',
				to   : './vendors',
				cache: true
			}
		]),
		new HtmlWebpackPlugin({
			chunks            : ['app', 'commons'],
			filename          : 'index.html',
			template          : './public/index.ejs',
			templateParameters: {
				title      : app_info.name,
				description: app_info.description,
				favicon    : 'favicon.ico',
				manifest   : 'manifest.json',
				vendor     : 'vendor.js'
			}
		}),
		new MiniCssExtractPlugin({
			filename     : is_dev ? '[name].css': '[name].[hash].css',
			chunkFilename: is_dev ? '[id].css'  : '[id].[hash].css'
		}),
		new ImageminPlugin({
			disable: is_dev,
			optipng: {
				optimizationLevel: 7
			},
			gifsicle: {
				optimizationLevel: 3,
				interlaced       : true
			},
			jpegtran: null,
			svgo    : {
				plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
			},
			pngquant: {},
			plugins : [ImageminJpeg()]
		}),
		new BundleAnalyzerPlugin(),
		new WorkboxPlugin.GenerateSW({
			importWorkboxFrom            : 'local',
			importsDirectory             : 'wb-assets',
			maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
			globDirectory                : BUILD_DIR,
			globPatterns                 : ['vendor-manifest.json', 'vendor.js'],
			runtimeCaching               : [
				{
					urlPattern: /^https:\/\/fonts\.googleapis\.com/,
					handler   : 'StaleWhileRevalidate',
					options   : {
						cacheName: 'google-fonts-stylesheets'
					}
				},
				{
					urlPattern: /^https:\/\/fonts\.gstatic\.com/,
					handler   : 'CacheFirst',
					options   : {
						cacheName        : 'google-fonts-webfonts',
						cacheableResponse: {
							statuses: [0, 200]
						},
						expiration: {
							maxAgeSeconds: 60 * 60 * 24 * 365
						}
					}
				}
			]
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
		alias: {
			components: path.resolve('./src/components/'),
			utils     : path.resolve('./src/utils/'),
			vendors   : path.resolve('./src/vendors/')
		}
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache    : true,
				parallel : true,
				sourceMap: is_dev
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks            : 'initial',
					minChunks         : 2,
					maxInitialRequests: 5,
					minSize           : 30000,
					reuseExistingChunk: true
				}
				/* 	vendor: {
					test    : /node_modules/,
					chunks  : 'initial',
					name    : 'vendor',
					priority: 10,
					enforce : true
				} */
			}
		}
		//runtimeChunk: true
	},
	performance: {
		hints      : 'warning',
		assetFilter: assetFilename => {
			return is_dev ? false: !/vendor/.test(assetFilename)
		}
	}
})