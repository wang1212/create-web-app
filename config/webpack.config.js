const PATH = require('path');

const path_config = require('./path.config.js');

const webpack = require('webpack');

const CopyWebpackPlugin = require('copy-webpack-plugin'),
	HtmlWebpackPlugin       = require('html-webpack-plugin'),
	UglifyJsPlugin          = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin    = require('mini-css-extract-plugin'),
	OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
	ImageminPlugin          = require('imagemin-webpack-plugin').default,
	ImageminJpeg            = require('imagemin-jpeg-recompress'),
	BundleAnalyzerPlugin    = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	WorkboxPlugin           = require('workbox-webpack-plugin');


module.exports = {
	mode: path_config.dev ? 'development' : 'production',
	target: 'web',
	devtool: path_config.map ? 'cheap-module-eval-source-map' : 'none',
	watch: true,
	watchOptions: {
		ignored: /node_modules/
	},
	context: PATH.resolve(__dirname, '../'),
	entry: {
		app: './src/app.js'
	},
	output: {
		path: path_config.dist,
		filename: path_config.dev ? '[name].js' : '[name].[chunkhash].js',
		chunkFilename: path_config.dev ? '[name].js' : '[name].[chunkhash].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							sourceMaps: path_config.dev
						}
					}
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use: [
					path_config.dev
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: path_config.dev,
							importLoaders: 2
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: path_config.dev,
							ident: 'postcss',
							plugins: () => [
								require('autoprefixer')({
									browsers: ['last 2 versions']
								})
							]
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: path_config.dev
						}
					}
				]
			},
			{
				test: /\.(html)$/,
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
				test: /\.(png|jpg|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader',
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
			context: '.',
			manifest: PATH.join(path_config.dist, './vendor-manifest.json')
		}),
		new CopyWebpackPlugin([
			{
				from: './public',
				to: '.',
				cache: true
			},
			{
				from: './src/vendors',
				to: './vendors',
				cache: true
			}
		]),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/tmp_index.html',
			chunks: ['app', 'commons']
		}),
		new MiniCssExtractPlugin({
			filename: path_config.dev ? '[name].css' : '[name].[hash].css',
			chunkFilename: path_config.dev ? '[id].css' : '[id].[hash].css'
		}),
		new ImageminPlugin({
			disable: path_config.dev,
			optipng: {
				optimizationLevel: 7
			},
			gifsicle: {
				optimizationLevel: 3,
				interlaced: true
			},
			jpegtran: null,
			svgo: {
				plugins: [{ removeViewBox: true }, { cleanupIDs: false }]
			},
			pngquant: {},
			plugins: [ImageminJpeg()]
		}),
		new BundleAnalyzerPlugin(),
		new WorkboxPlugin.GenerateSW({
			importWorkboxFrom: 'local',
			importsDirectory: 'wb-assets',
			maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
			globDirectory: path_config.dist,
			globPatterns: ['vendor-manifest.json', 'vendor.js'],
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
		alias: {
			components: PATH.resolve('./src/components/'),
			reduxs: PATH.resolve('./src/reduxs/'),
			utils: PATH.resolve('./src/utils/'),
			vendors: PATH.resolve('./src/vendors/')
		}
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: path_config.dev
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
			return path_config.dev ? false : !/vendor/.test(assetFilename);
		}
	}
};