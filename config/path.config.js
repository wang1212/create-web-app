/*! Path config */

const NODE_ENV = process.env.NODE_ENV || 'production';

const SRC_DIR = './src/',
	DIST_DIR = NODE_ENV === 'production' ? require('path').resolve(__dirname, '../dist/') : 'D:\\nginx-1.15.5\\webapps\\App\\';

module.exports = {
	dev: !(NODE_ENV === 'production'),
	map: !(NODE_ENV === 'production'),

	src : SRC_DIR,
	dist: DIST_DIR
};