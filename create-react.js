#! /usr/bin/env node
const commander = require('commander');
const chalk = require('chalk');

commander
.version(require('./package.json').version)
.arguments('<project-directory>') 
.usage(`${chalk.green('<project-directory>')} [options]`) 
.action(name => {
    projectName = name;
})
.option('--verbose', 'print additional logs')
.allowUnknownOption()
.on('--help', () => {
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
    console.log(
      `    A custom ${chalk.cyan('--scripts-version')} can be one of:`
    );
})
commander.parse(process.argv);