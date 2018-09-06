/* Base */
const gulp = require('gulp'),
	watch = require('gulp-watch');

/* Tool */
const clean = require('gulp-clean'),
	plumber = require('gulp-plumber'),
	notify  = require('gulp-notify'),
	rename  = require('gulp-rename'),
	order   = require('gulp-order'),
	concat  = require('gulp-concat'),
	gulpif  = require('gulp-if');

const babel = require('gulp-babel'),
	sass = require('gulp-sass');

const sourcemaps = require('gulp-sourcemaps'),
	js_uglify        = require('gulp-uglify'),
	css_clean        = require('gulp-clean-css'),
	css_autoprefixer = require('gulp-autoprefixer'),
	image_min        = require('gulp-imagemin'),
	image_min_jpeg   = require('imagemin-jpeg-recompress'),
	image_min_png    = require('imagemin-pngquant');

/* File System */
const fs = require('fs'),
	path = require('path');

/* Path */
const CONFIG = require('./gulpfile.config');

/** 
 * Tools Function
 */
exports.clean = function (src) {
	return gulp.src(src, { read: false })
		.pipe(clean({ force: true }));
};

/**
 * Monitoring file changes
 * 
 * @param {Object} [options={
 * 'src'       : null,
 * 'dist'      : null,
 * 'callback'  : null,
 * 'events'    : null,
 * 'build_file': null,
 * 'order'     : null
 * 'cb'        : null
 * }]
 * @returns 
 */
exports.watch = function (options = {
	'src'       : null,
	'dist'      : null,
	'callback'  : null,
	'events'    : null,
	'build_file': null,
	'order'     : null,
	'cb'        : null
}) {

	return watch(options.src, options.callback.bind(null, {
		'src'       : options.src,
		'dist'      : options.dist,
		'build_file': options.build_file,
		'order'     : options.order,
		'cb'        : options.cb
	}))
		.on('add', function (file) {
			options.events && options.events.add && options.events.add.apply(this, [file, options.src, options.dist]);

			console.log('[' + new Date().toLocaleTimeString() + '] ' + file + ' was created, task running...');
		})
		.on('change', function (file) {
			options.events && options.events.change && options.events.change.apply(this, [file, options.src, options.dist]);

			console.log('[' + new Date().toLocaleTimeString() + '] ' + file + ' was changed, task running...');
		})
		.on('unlink', function (file) {
			options.events && options.events.unlink && options.events.unlink.apply(this, [file, options.src, options.dist]);

			console.log('[' + new Date().toLocaleTimeString() + '] ' + file + ' was deleted, task running...');
		});

};

/**
 * JS file compression
 * 
 * @param {String} _src
 * @param {String} _dist
 */
exports.js_min = function (param) {

	// js
	gulp.src(param.src)
		.pipe(plumber({
			errorHandler: notify.onError({
				message: 'Error: <%= error.message %>',
				title  : 'Error running js minify!'
			})
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulpif(CONFIG.map, sourcemaps.init()))
		.pipe(babel({
			presets: ['env', 'flow', 'react'],
			plugins: [
				'syntax-dynamic-import',
				'transform-class-properties',
				'transform-object-rest-spread'
			]
		}))
		.pipe(gulpif(!CONFIG.dev, js_uglify()))
		.pipe(gulpif(CONFIG.map, sourcemaps.write('.')))
		.pipe(gulp.dest(param.dist));

};

/**
 * Js file compression merge
 * 
 * @param {String} _src
 * @param {String} _dist
 * @param {String} _file 
 * @param {Array} _order 
 */
exports.js_concat_min = function (param) {
	// js
	gulp.src(param.src)
		.pipe(plumber({
			errorHandler: notify.onError({
				message: 'Error: <%= error.message %>',
				title  : 'Error running js concat && minify!'
			})
		}))
		.pipe(order(param.order))
		.pipe(gulpif(CONFIG.map, sourcemaps.init()))
		.pipe(babel({
			presets: ['env', 'react']
		}))
		.pipe(concat(param.build_file))
		.pipe(gulpif(!CONFIG.dev, js_uglify()))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulpif(CONFIG.map, sourcemaps.write('.')))
		.pipe(gulp.dest(param.dist));

};

/**
 * Scss compiled into css file
 * 
 * @param {String} _src 
 * @param {String} _dist 
 */
exports.scss_2_css = function (param) {
	// Sass
	gulp.src(param.src)
		.pipe(plumber({
			errorHandler: notify.onError({
				message: 'Error: <%= error.message %>',
				title  : 'Error running Sass to CSS!'
			})
		}))
		.pipe(gulpif(CONFIG.map, sourcemaps.init()))
		.pipe(sass())
		.pipe(css_autoprefixer({
			browsers: ['last 2 versions'],
			cascade : false
		}))
		.pipe(css_clean({ compatibility: 'ie8' }))
		.pipe(rename(function (path) {
			path.dirname = path.dirname.replace('scss', 'css');
		}))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulpif(CONFIG.map, sourcemaps.write('.')))
		.pipe(gulp.dest(param.dist));

};

/** 
 * Image Compression
 * 
 * @param {String} _src
 * @param {String} _dist
 */
exports.img_min = function (param) {
	// Image
	gulp.src(param.src)
		.pipe(plumber({
			errorHandler: notify.onError({
				message: 'Error: <%= error.message %>',
				title  : 'Error running img minify!'
			})
		}))
		.pipe(gulpif(!CONFIG.dev, image_min([
			image_min.gifsicle({ interlaced: true }),
			/* image_min.jpegtran({ progressive: true }), */
			image_min_jpeg(),
			/* image_min.optipng({ optimizationLevel: 7 }), */
			image_min_png(),
			image_min.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			})
		])))
		.pipe(gulp.dest(param.dist));

};

/**
 * File copy
 * 
 * @param {String} _src
 * @param {String} _dist
 */
exports.mapping = function (param) {
	gulp.src(param.src)
		.pipe(gulp.dest(param.dist));
};

/** 
 * Evnets
 */
exports.min_unlink = function (file, _src, _dist) {
	var filePath = _dist + path.relative(_src.split('*')[0], file).replace(/\.(js|css)/, '.min.$1');

	fs.existsSync(filePath) && fs.unlinkSync(filePath);
	fs.existsSync(filePath + '.map') && fs.unlinkSync(filePath + '.map');
};

exports.mapping_unlink = function (file, _src, _dist) {
	var filePath = _dist + path.relative(_src.split('*')[0], file);

	fs.existsSync(filePath) && fs.unlinkSync(filePath);
};

exports.sass_unlink = function (file, _src, _dist) {
	var filePath = _dist + path.relative(_src.split('*')[0], file).replace(/\.scss/, '.min.css');

	fs.existsSync(filePath) && fs.unlinkSync(filePath);
	fs.existsSync(filePath + '.map') && fs.unlinkSync(filePath + '.map');
};