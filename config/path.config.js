/*! path config */

'use strict';


module.exports = (NODE_ENV, is_dev = NODE_ENV === 'development') => ({
	/* app src directory */
	src: './src/',
	/* app build directory */
	build: is_dev
		? 'D:\\nginx\\webapps\\App\\'
		: require('path').resolve(__dirname, '../build/'),
	/* server proxy */
	proxy: 'http://localhost:8181/App/'
});