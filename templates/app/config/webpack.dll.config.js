/* eslint-disable */
// https://webpack.js.org/configuration/

/*! External dependencies packaged individually */

'use strict'

// tool
const path = require('path')
const webpack = require('webpack')

module.exports = ({ NODE_ENV, BUILD_DIR, isEnvDevelopment = NODE_ENV === 'development' }) => ({
	mode: NODE_ENV,
	context: path.resolve(__dirname, '../'),
	entry: {
		vendor: Object.keys(require('../package.json').dependencies).filter((name) => !~name.search(/\.css$/)),
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js',
		library: '[name]_lib_[fullhash]',
	},
	plugins: [
		// Moment.js is an extremely popular library that bundles large locale files
		// by default due to how webpack interprets its code. This is a practical
		// solution that requires the user to opt into importing specific locales.
		// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
		// You can remove this if you don't use Moment.js:
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new webpack.DllPlugin({
			context: BUILD_DIR,
			name: '[name]_lib_[fullhash]',
			path: path.join(BUILD_DIR, '[name]-manifest.json'),
		}),
	],
	performance: {
		hints: 'warning',
		assetFilter: (assetFilename) => {
			return isEnvDevelopment ? false : !/vendor/.test(assetFilename)
		},
	},
})
