/* Base */
const gulp         = require('gulp');
const webpack      = require('webpack');
const browser_sync = require('browser-sync').create();

browser_sync.init({
	open : false,
	proxy: 'http://localhost:8181/App/'
});

/* path config */
const CONFIG = require('./config/gulpfile.config');

/* Dev */
const DEV = require('./config/gulpfile.dev');

/**
 *  Task
 */
gulp.task('default', ['clean', 'minify', 'webpack']);

/* Clean */
gulp.task('clean', function () {
	return DEV.clean(CONFIG.dist);
});

/* Minify */
gulp.task('minify', ['minify:img']);

gulp.task('minify:img', ['clean'], function () {

	DEV.img_min({
		'src' : CONFIG.img.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.img.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.img_min,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.mapping_unlink
		}
	});

});

/* Webpack */
gulp.task('webpack', ['clean'], function () {

	new Promise((resolve, reject) => {
		/* External dependence */
		webpack(require('./config/webpack.dll.config'), (err, stats) => {
			err && reject(err);

			console.log(stats.toString({
				colors      : true,
				modules     : false,
				children    : false,
				chunks      : false,
				chunkModules: false
			}));

			resolve(200);
		});
	})
		.then(data => {
			if (data === 200) {
				/* Business code */
				webpack(require('./config/webpack.config'), (err, stats) => {
					if (err) {
						return err;
					}

					console.log(stats.toString({
						colors      : true,
						modules     : false,
						children    : false,
						chunks      : false,
						chunkModules: false
					}));

					browser_sync.reload();
				});
			}
		})
		.catch(err => {
			console.log(err.message);
		});

});