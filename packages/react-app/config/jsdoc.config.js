/*! jsdoc config  */

module.exports = {
	plugins: ['node_modules/jsdoc-babel'],
	tags: {
		allowUnknownTags: true,
		dictionaries: ['jsdoc', 'closure']
	},
	source: {
		include: ['src'],
		exclude: ['src/vendors/'],
		includePattern: '.+\\.[tj]sx?$',
		excludePattern: '(^|\\/|\\\\)_'
	},
	babel: {
		extensions: ['js', 'jsx', 'ts', 'tsx']
	},
	templates: {
		cleverLinks: true,
		monospaceLinks: true
	},
	opts: {
		encoding: 'utf8',
		destination: './docs/jsdoc/',
		recurse: true,
		template: 'node_modules/docdash'
	}
};