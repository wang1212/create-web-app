/* eslint-disable */

/*! starter && build */

'use strict'

// env
const NODE_ENV = (process.env.NODE_ENV || 'production').trim()

// path config
const path_config = require('../config/path.config.js')(NODE_ENV)

/** Use del to delete files in the external project directory () */
const del = require('del')

// webpack tool
const webpack = require('webpack')

// hot server
const browser_sync = require('browser-sync').create()

// server
browser_sync.init(path_config.proxy)

del([path_config.build], { force: true })
	.then(() => {
		// eslint-disable-next-line
		console.log('--------- Clean up the build directory is complete ! -----------\n')

		// webpack
		return new Promise((resolve, reject) => {
			/* 1. External dependence */
			webpack(
				require('../config/webpack.dll.config')({
					NODE_ENV,
					BUILD_DIR: path_config.build
				}),
				(err, stats) => {
					err && reject(err)

					// eslint-disable-next-line
					console.log(
						stats.toString({
							colors: true,
							modules: false,
							children: false,
							chunks: false,
							chunkModules: false
						})
					)

					resolve(200)
				}
			)
		})
	})
	.then(data => {
		if (data === 200) {
			/* 2. Business code */
			webpack(
				require('../config/webpack.config')({
					NODE_ENV,
					SRC_DIR: path_config.src,
					BUILD_DIR: path_config.build
				}),
				(err, stats) => {
					if (err) {
						throw err
					}

					// eslint-disable-next-line
					console.log(
						stats.toString({
							colors: true,
							modules: false,
							children: false,
							chunks: false,
							chunkModules: false
						})
					)

					browser_sync.reload()
				}
			)
		}
	})
	.catch(err => {
		// eslint-disable-next-line
		console.log(err.message)
	})
