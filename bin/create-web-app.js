#!/usr/bin/env node

/**
 * Create Web App
 *
 * The source code is the bin command of create-web-app | create-pwa.
 */
import process from 'node:process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import chalk from 'chalk';
import fse from 'fs-extra';
import inquirer from 'inquirer';
import ora from 'ora';

const APP_TYPE = {
  JS: { text: 'javascript', value: 'app' },
  REACT: { text: 'react.js', value: 'react-app' },
};

function error_exit(dirname) {
  fse.removeSync(path.resolve(process.cwd(), dirname));
  process.exit();
}

function filter_file(src, dest) {
  // ! /node_modules/ - only use local test
  return !src.match(/(\.gitkeep$)/);
}

async function start() {
  const answers = await inquirer
    .prompt([
      {
        name: 'type',
        type: 'list',
        message: 'Please choose the type:',
        choices: [
          { name: APP_TYPE.JS.text, value: APP_TYPE.JS.value },
          { name: APP_TYPE.REACT.text, value: APP_TYPE.REACT.value },
        ],
      },
      {
        name: 'project_name',
        type: 'input',
        message: 'Enter project name:',
        default: 'my-web-app',
      },
    ])
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });

  const shared_template = fileURLToPath(new URL(`../templates/shared`, import.meta.url));
  const template = fileURLToPath(new URL(`../templates/${answers.type}`, import.meta.url));

  // ----------------------------------------------------------------

  console.log(`\n Current working directory: ${chalk.cyan(process.cwd())} \n`);

  // ----------------------------------------------------------------

  const spinner = ora('Create web app starting...').start();

  // * STEP 1: Create Project Directory
  try {
    spinner.start('Create the project directory...');

    await fse.mkdir(answers.project_name);

    spinner.succeed(`${chalk.green('Successful,')} project directory ${chalk.cyan(answers.project_name)} has been created.`);
  } catch (err) {
    spinner.fail();
    console.error(chalk.red(err.message));
    process.exit();
  }

  // * STEP 2: Build Project Directory
  try {
    spinner.start('Build project directory structure and configuration files...');

    await fse.copy(template, answers.project_name, { filter: filter_file });
    await fse.copy(path.join(shared_template, '.gitignore.txt'), path.join(answers.project_name, '.gitignore'));

    // update package name with project name
    const package_json_file = path.resolve(process.cwd(), answers.project_name, 'package.json');
    let package_json_file_content = await fse.readFile(package_json_file, 'utf8');
    package_json_file_content = package_json_file_content.replace(/"name"\s*:\s*".*?"\s*,/, `"name": "${answers.project_name}",`);

    await fse.writeFile(package_json_file, package_json_file_content);

    spinner.succeed(`${chalk.green('Successful,')} project directory structure and configuration files are ready.`);
  } catch (err) {
    spinner.fail();
    console.error(chalk.red(err.message));
    error_exit(answers.project_name);
  }

  // * STEP 3: All Ready
  console.log(chalk.green('Everything is ready! \n'));

  console.log(` For more information, read the ${chalk.cyan('README.md')} file in your project directory. \n`);

  console.log(chalk.yellow(`Now, run "cd ${answers.project_name} && npm install", \n then run "npm start" to start developing your PWA! Haha...`));
}

start();
