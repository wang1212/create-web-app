/*! Path config */

const NODE_ENV = process.env.NODE_ENV || 'production';

const SRC_DIR = './src/',
	DIST_DIR = NODE_ENV === 'production' ? require('path').resolve(__dirname, '../build/') : 'D:\\nginx-1.13.10\\webapps\\App\\';

module.exports = {
	dev: !(NODE_ENV === 'production'),
	map: !(NODE_ENV === 'production'),

	src : SRC_DIR,
	dist: DIST_DIR
};