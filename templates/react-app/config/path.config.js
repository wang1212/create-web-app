/* eslint-disable */

/*! path config */

'use strict'

module.exports = (NODE_ENV, is_dev = NODE_ENV === 'development') => ({
	/* app src directory */
	src: require('path').resolve(__dirname, '../src/'),
	/* app build directory */
	build: require('path').resolve(__dirname, '../build/'),
})
