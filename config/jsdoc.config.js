/*! jsdoc config  */

const babel_config = require('../.babelrc.js');


module.exports = {
	tags: {
		allowUnknownTags: true,
		dictionaries    : ['jsdoc', 'closure']
	},
	source: {
		include       : ['src'],
		exclude       : ['src/vendors/'],
		includePattern: '.+\\.(js|jsx)$',
		excludePattern: '(^|\\/|\\\\)_'
	},
	plugins: ['node_modules/jsdoc-babel'],
	babel  : {
		extensions: ['js', 'jsx'],
		presets   : babel_config.presets,
		plugins   : babel_config.plugins
	},
	templates: {
		cleverLinks   : true,
		monospaceLinks: true
	},
	opts: {
		encoding   : 'utf8',
		destination: './docs/jsdoc/',
		recurse    : true,
		template   : 'node_modules/docdash'
	}
};