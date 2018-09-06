/*! Path config */

const NODE_ENV = process.env.NODE_ENV || 'production';

const SRC_DIR = './src/',
	DIST_DIR = NODE_ENV === 'production' ? require('path').resolve(__dirname, '../dist/') : 'D:\\nginx-1.13.10\\webapps\\App\\';

module.exports = {
	dev: !(NODE_ENV === 'production'),
	map: !(NODE_ENV === 'production'),
    
	src : SRC_DIR,
	dist: DIST_DIR,

	vendors: {
		src : SRC_DIR + 'vendors/**/!(_|README)*',
		dist: DIST_DIR + '/vendors/'
	},

	view: {
		src: SRC_DIR + '**/!(_)*.html'
	},
	js: {
		src: SRC_DIR + '**/!(_)*.js'
	},
	scss: {
		src: SRC_DIR + '**/!(_)*.scss'
	},
	img: {
		src: SRC_DIR + '**/!(_)*.{png,jpg,jpeg,gif}'
	},
	json: {
		src: SRC_DIR + '**/!(_)*.json'
	}
};