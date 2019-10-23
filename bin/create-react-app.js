#!/usr/bin/env node

/**
 * Create Web App
 *
 * The source code is the bin command of create-react-app | create-rpwa.
 */

'use strict';

const chalk = require('chalk'),
	fse  = require('fs-extra'),
	path = require('path');

const app = path.resolve(__dirname, '../packages/react-app/'),
	args = process.argv.slice(2),
	project_name = args[0] == null ? 'react-web-app' : args[0];

function error_exit () {
	fse.removeSync(path.resolve(process.cwd(), project_name));
	process.exit();
}

function filter_file (src, dest) {
	return !src.match(/node_modules|\.gitkeep$/);
}

// start

console.log(`\n Current working directory: ${chalk.cyan(process.cwd())} \n`);

console.log(chalk.blue('> Create web app starting...\n'));

if (args[0] == null) {
	console.log(`${chalk.red(' Note:')} The project name is not explicitly specified, default is ${chalk.cyan(project_name)}. \n`);
} else {
	console.log(` The specified project name is ${chalk.cyan(project_name)}. \n`);
}


/**
 * - Step: Create project dir
 */
console.log(chalk.blue(`> Step: Create the project directory... \n`));

try {
	fse.mkdirSync(project_name);
} catch (err) {
	console.error(chalk.red(err.message));
	process.exit();
}

console.log(`${chalk.green(' Successful,')} project directory ${chalk.cyan(project_name)} has been created. \n`);


/**
 * - Step: Build project dir structure
 */
console.log(chalk.blue(`> Step: Build project directory structure and configuration files... \n`));

try {
	fse.copySync(app, project_name, { filter: filter_file });

	// update package name with project name
	let file_str = fse.readFileSync(path.resolve(process.cwd(), project_name, 'package.json'), 'utf8');

	file_str = file_str.replace(/"name"\s*:\s*"web-app-with-react"\s*,/, `"name": "${project_name}",`);

	fse.writeFileSync(path.resolve(process.cwd(), project_name, 'package.json'), file_str);
} catch (err) {
	console.error(chalk.red(err.message));
	error_exit();
}

console.log(`${chalk.green(' Successful,')} project directory structure and configuration files are ready. \n`);

/**
 * - Step: All ready
 */
console.log(chalk.blue('> Step: Everything is ready. \n'));

console.log(` For more information, read the ${chalk.cyan('README.md')} file in your project directory. \n`);

console.log(chalk.green(' Now, start developing your PWA with React.js! Haha...'));