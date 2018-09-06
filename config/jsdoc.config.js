/*! jsdoc config  */

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
	plugins: [
		'node_modules/jsdoc-babel'
	],
	babel  : {
		extensions: ['js', 'jsx'],
		presets   : ['@babel/preset-env'],
		plugins   : [
			require('@babel/plugin-syntax-dynamic-import'),
			require('@babel/plugin-proposal-class-properties'),
			require('@babel/plugin-proposal-object-rest-spread')
		],
	},
	templates: {
		cleverLinks   : true,
		monospaceLinks: true
	},
	opts: {
		encoding   : 'utf8',
		destination: './docs/jsdoc/',
		recurse    : true
	}
};