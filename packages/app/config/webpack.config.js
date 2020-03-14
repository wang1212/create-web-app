/* eslint-disable */

/*! webpack config */

'use strict'

const app_info = require('../public/manifest.json')

// tool
const path = require('path')
const webpack = require('webpack')

// webpack plugins
const CopyWebpackPlugin = require('copy-webpack-plugin'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin = require('mini-css-extract-plugin'),
	OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = ({ NODE_ENV, SRC_DIR, BUILD_DIR, is_dev = NODE_ENV === 'development' }) => ({
	mode: NODE_ENV,
	target: 'web',
	devtool: is_dev ? 'cheap-module-eval-source-map' : 'none',
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	context: path.resolve(__dirname, '../'),
	entry: {
		app: SRC_DIR + 'app.js'
	},
	output: {
		path: BUILD_DIR,
		filename: is_dev ? '[name].js' : '[name].[chunkhash].js',
		chunkFilename: is_dev ? '[name].js' : '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.worker\.js$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'worker-loader'
					}
				]
			},
			{
				test: /\.[tj]sx?$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				exclude: /node_modules/,
				use: [
					is_dev ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: is_dev,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: is_dev,
							ident: 'postcss',
							plugins: () => [require('postcss-preset-env')]
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.html$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src', 'img:data-src']
						}
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							disable: is_dev,
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							optipng: {
								enabled: false
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4
							},
							gifsicle: {
								interlaced: false
							},
							webp: {
								quality: 75
							}
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: '.',
			manifest: path.join(BUILD_DIR, './vendor-manifest.json')
		}),
		new CopyWebpackPlugin([
			{
				from: './public/*.!(ejs)',
				to: '.',
				flatten: true,
				cache: true
			},
			{
				from: './src/vendors',
				to: './vendors',
				cache: true
			}
		]),
		new HtmlWebpackPlugin({
			chunks: ['app', 'commons'],
			filename: 'index.html',
			template: './public/index.ejs',
			templateParameters: {
				title: app_info.name,
				description: app_info.description,
				favicon: 'favicon.ico',
				manifest: 'manifest.json',
				vendor: 'vendor.js'
			}
		}),
		new MiniCssExtractPlugin({
			filename: is_dev ? '[name].css' : '[name].[hash].css',
			chunkFilename: is_dev ? '[id].css' : '[id].[hash].css'
		}),
		new BundleAnalyzerPlugin(),
		new WorkboxPlugin.GenerateSW({
			maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
			additionalManifestEntries: [
				{ url: 'vendor-manifest.json', revision: app_info._version },
				{ url: 'vendor.js', revision: app_info._version }
			],
			runtimeCaching: [
				{
					urlPattern: /^https:\/\/fonts\.googleapis\.com/,
					handler: 'StaleWhileRevalidate',
					options: {
						cacheName: 'google-fonts-stylesheets'
					}
				},
				{
					urlPattern: /^https:\/\/fonts\.gstatic\.com/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'google-fonts-webfonts',
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
			utils: path.resolve('./src/utils/'),
			vendors: path.resolve('./src/vendors/')
		}
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: is_dev
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 30000,
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
		hints: 'warning',
		assetFilter: assetFilename => {
			return is_dev ? false : !/vendor/.test(assetFilename)
		}
	}
})
