#!/usr/bin/env node

/**
 * Create Web App
 *
 * The source code is the main bin command of create-web-app.
 */

'use strict'

const chalk = require('chalk')

const currentNodeVersion = process.versions.node,
	semver = currentNodeVersion.split('.'),
	major = semver[0]

if (major < 12) {
	console.error(
		chalk.red(`You are running Node ${currentNodeVersion}. \nCreate React App requires Node 12.x or higher. \nPlease update your version of Node.`)
	)
	process.exit(1)
}

require('./bin/create-web-app')
