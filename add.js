const co = require('co'); // TJ大神开发的异步流程控制工具，用更舒服的方式写异步代码。
const prompt = require('co-prompt'); // 还是TJ大神的作品……传统的命令行只能单行一次性地输入所有参数和选项，
                                    // 使用这个工具可以自动提供提示信息，并且分步接收用户的输入，体验类似npm init时的一步一步输入参数的过程。
const fs = require('fs');
const chalk = require('chalk');
const inquirer = require('inquirer') // 提供交互式命令
const Thenjs = require('thenjs');
console.log(chalk.blue('Hello world!'));
Thenjs(123).then((res) => {
    console.log(res, 'res')
})
module.exports = () => {
    // co(function *() {
    //     let tplName = yield prompt('Template name: '); // 返回用户输入的内容
    //     console.log(tplName)
    //     let gitUrl = yield prompt('Git https link: ');
    //     console.log(gitUrl)
    //     let branch = yield prompt('Branch: ');
    //     console.log(branch)
    //     console.log(chalk.green('√ Generation completed!'))
    //     process.exit()
    // })
    inquirer.prompt([{
        type: 'list',
        message: 'which template do you need:',
        name: 'template',
        choices: ['normal', 'wap', 'h5']
    }]).then(function (answers) {
        console.log(answers)
        // done();
    })
}