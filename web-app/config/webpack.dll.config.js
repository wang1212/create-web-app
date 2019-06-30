/*! External dependencies packaged individually */

'use strict';

// node tool
const path = require('path');

// webpack tool
const webpack = require('webpack');


module.exports = ({
	NODE_ENV,
	BUILD_DIR,
	is_dev = NODE_ENV === 'development'
}) => ({
	mode: NODE_ENV,
	context: path.resolve(__dirname, '../'),
	entry: {
		vendor: Object.keys(require('../package.json').dependencies)
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js',
		library: '[name]_lib_[hash]'
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]_lib_[hash]',
			path: path.join(BUILD_DIR, '[name]-manifest.json')
		})
	],
	performance: {
		hints: 'warning',
		assetFilter: assetFilename => {
			return is_dev ? false : !/vendor/.test(assetFilename);
		}
	}
});