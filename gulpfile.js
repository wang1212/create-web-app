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
gulp.task('default', ['clean', 'copy', 'minify', 'webpack']);

/* Clean */
gulp.task('clean', function () {
	return DEV.clean(CONFIG.dist);
});

/* Copy */
gulp.task('copy', ['copy:vendors', /* 'copy:html',  */'copy:json']);

gulp.task('copy:vendors', ['clean'], function () {

	DEV.mapping({
		'src' : CONFIG.vendors.src,
		'dist': CONFIG.vendors.dist
	});

	return DEV.watch({
		'src'     : CONFIG.vendors.src,
		'dist'    : CONFIG.vendors.dist,
		'callback': DEV.mapping,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.mapping_unlink
		}
	});

});

gulp.task('copy:html', ['clean'], function () {

	DEV.mapping({
		'src' : CONFIG.view.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.view.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.mapping,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.mapping_unlink
		}
	});
});

gulp.task('copy:json', ['clean'], function () {

	DEV.mapping({
		'src' : CONFIG.json.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.json.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.mapping,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.mapping_unlink
		}
	});
});

/* Minify */
gulp.task('minify', [/* 'minify:js', 'minify:sass2css', */'minify:img']);

gulp.task('minify:js', ['clean'], function () {

	DEV.js_min({
		'src' : CONFIG.js.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.js.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.js_min,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.min_unlink
		}
	});
});

gulp.task('minify:sass2css', ['clean'], function () {

	DEV.scss_2_css({
		'src' : CONFIG.scss.src,
		'dist': CONFIG.dist
	});

	return DEV.watch({
		'src'     : CONFIG.scss.src,
		'dist'    : CONFIG.dist,
		'callback': DEV.scss_2_css,
		'events'  : {
			'change': browser_sync.reload,
			'unlink': DEV.sass_unlink
		}
	});

});

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