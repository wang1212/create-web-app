/* eslint-disable */

/*! build */

'use strict'

// env
const NODE_ENV = (process.env.NODE_ENV || 'production').trim()

// configs
const pathConfig = require('../config/path.config.js')(NODE_ENV)

// * Use del to delete files in the external project directory
const del = require('del')

// webpack tool
const webpack = require('webpack')

// first, clean build dir
del([pathConfig.build], { force: true })
	.then(() => {
		// eslint-disable-next-line
		console.log('--------- Clean up the build directory is complete ! -----------\n')

		// webpack
		return new Promise((resolve, reject) => {
			/* 1. External dependence */
			webpack(
				require('../config/webpack.dll.config')({
					NODE_ENV,
					BUILD_DIR: pathConfig.build,
				}),
				(err, stats) => {
					err && reject(err)

					// eslint-disable-next-line
					console.log(
						stats.toString({
							colors: true,
							modules: false,
							children: false,
						})
					)

					resolve(200)
				}
			)
		})
	})
	.then((data) => {
		/* 2. Business code */
		if (data !== 200) throw new Error(data)

		webpack(
			require('../config/webpack.config')({
				NODE_ENV,
				SRC_DIR: pathConfig.src,
				BUILD_DIR: pathConfig.build,
			}),
			(err, stats) => {
				if (err) throw new Error(data)

				// eslint-disable-next-line
				console.log(
					stats.toString({
						colors: true,
						assetsSort: 'chunks',
						modules: false,
						children: false,
						excludeAssets: [
							/vendors/,
							/assets/,
							(assetName) => {
								return ['manifest.json', 'robots.txt', 'favicon.ico', 'logo192.png', 'logo512.png'].includes(assetName)
							},
						],
					})
				)

				console.log('\n')
				console.log('Finished, build successful! :)')

				// exit
				process.exit()
			}
		)
	})
	.catch((err) => {
		// eslint-disable-next-line
		console.log(err.message)
	})
