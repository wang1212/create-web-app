const PATH = require('path');

const gulp_config = require('./gulpfile.config');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'),
	UglifyJsPlugin          = require('uglifyjs-webpack-plugin'),
	MiniCssExtractPlugin    = require('mini-css-extract-plugin'),
	OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
	mode        : gulp_config.dev ? 'development'                 : 'production',
	target      : 'web',
	devtool     : gulp_config.map ? 'cheap-module-eval-source-map': 'none',
	watch       : true,
	watchOptions: {
		ignored: /node_modules/
	},
	context: PATH.resolve(__dirname, '../'),
	entry  : {
		app: './src/app.jsx'
	},
	output: {
		path         : gulp_config.dist,
		filename     : gulp_config.dev ? '[name].js': '[name].[chunkhash].js',
		chunkFilename: gulp_config.dev ? '[name].js': '[name].[chunkhash].js'
	},
	module : {
		rules: [
			{
				test   : /\.(js|jsx)$/,
				exclude: /node_modules/,
				use    : [
					{
						loader : 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
							plugins: [
								require('@babel/plugin-syntax-dynamic-import'),
								require('@babel/plugin-proposal-class-properties'),
								require('@babel/plugin-proposal-object-rest-spread')
							],
							sourceMaps: true
						}
					}
				]
			},
			{
				test   : /\.(sa|sc|c)ss$/,
				exclude: /node_modules/,
				use    : [
					gulp_config.dev ? 'style-loader': MiniCssExtractPlugin.loader,
					{
						loader : 'css-loader',
						options: {
							minimize    : true,
							sourceMap   : true,
							importLoader: 2
						}
					},
					{
						loader : 'postcss-loader',
						options: {
							sourceMap: true,
							ident    : 'postcss',
							plugins  : () => [
								require('autoprefixer')({ browsers: ['last 2 versions'] })
							]
						}
					},
					{
						loader : 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use : [
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
			manifest: PATH.join(gulp_config.dist, './vendor-manifest.json')
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/app.html',
			chunks  : ['app', 'commons']
		}),
		new MiniCssExtractPlugin({
			filename     : gulp_config.dev ? '[name].css': '[name].[hash].css',
			chunkFilename: gulp_config.dev ? '[id].css'  : '[id].[hash].css',
		})
	],
	resolve: {
		alias: {
			components: PATH.resolve('./src/components/'),
			reduxs    : PATH.resolve('./src/reduxs/'),
			utils     : PATH.resolve('./src/utils/'),
			vendors   : PATH.resolve('./src/vendors/')
		}
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache    : true,
				parallel : true,
				sourceMap: true
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
					reuseExistingChunk: true,
				},
				/* 	vendor: {
					test    : /node_modules/,
					chunks  : 'initial',
					name    : 'vendor',
					priority: 10,
					enforce : true
				} */
			}
		},
		//runtimeChunk: true
	},
	performance: {
		hints: 'warning',
		/* assetFilter: assetFilename => {
			return !(/vendor/.test(assetFilename));
		} */
	}
};