/* eslint-disable */

/*! start dev */

'use strict'

// env
const NODE_ENV = (process.env.NODE_ENV || 'production').trim()

// configs
const pathConfig = require('../config/path.config.js')(NODE_ENV)
const serverConfig = require('../config/devServer.config')

// * Use del to delete files in the external project directory
const del = require('del')

// webpack tool
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

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

		const compiler = webpack(
			require('../config/webpack.config')({
				NODE_ENV,
				SRC_DIR: pathConfig.src,
				BUILD_DIR: pathConfig.build,
			})
		)

		// dev server config
		const devServer = new WebpackDevServer(compiler, {
			...serverConfig,
			contentBase: pathConfig.build,
			stats: {
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
			},
		})

		// * '0.0.0.0' makes all ips accessible
		devServer.listen(serverConfig.port, '0.0.0.0', (err) => {
			if (err) {
				return console.log(err)
			}

			console.log('Starting the development server...\n')
		})

		// exit
		;[('SIGINT', 'SIGTERM')].forEach(function (sig) {
			process.on(sig, function () {
				devServer.close()
				process.exit()
			})
		})
	})
	.catch((err) => {
		// eslint-disable-next-line
		console.log(err.message)
	})
