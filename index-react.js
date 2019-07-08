#!/usr/bin/env node

/**
 * Create React Web App
 *
 * The source code is the main bin command of create-react-app.
 */

'use strict';

const chalk = require('chalk');

const currentNodeVersion = process.versions.node,
	semver = currentNodeVersion.split('.'),
	major = semver[0];


if (major < 8) {
	console.error(
		chalk.red(
			`You are running Node ${currentNodeVersion}. \nCreate React App requires Node 8 or higher. \nPlease update your version of Node.`
		)
	);
	process.exit(1);
}

require('./bin/create-react-app');