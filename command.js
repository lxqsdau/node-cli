#! /usr/bin/env node
console.log('liu-test-cli脚手架');
const commander = require('commander'); // 是一个提供用户命令行输入和参数解析的强大功能
const cmd = require('node-cmd'); // 处理多个命令
const download = require('download-git-repo'); // 下载git

// Options:
// 能够初始化自定义的参数对象，设置关键字和描述，同时还可以设置读取用户输入的参数
commander.version(require('./package.json').version)
    .option('-a, --aaa', 'aaaaa') // 执行liu-test-cli --help 输出的描述
    .option('-b, --bbb', 'bbbbb')
    .option('-c, --ccc [name]', 'ccccc')
    
// command 该方法能够在命令行增加一个命令。用户在执行此命令后，能够执行回调中的逻辑。
commander
    .command('init <extensionId>')
    .description('init extension project')
    .action((extensionId) => {
        id = extensionId;
        console.log(`init Extension Project "${extensionId}"`);
        cmd.get(
            `
                mkdir tmp
            `, (err, data) => {
                console.log(err, data);
                if (!err) {
                    download('lxqsdau/node-cli/', 'tmp', (err) => {
                        console.log(err)
                    })
                }
            }
        )
        
        // todo something you need
        /*
        cmd.get('ls', (err, data) => {
            // console.log(err, data); // null 'LICENSE\nREADME.md\ncommand.js\n'
            console.log('the current dir contains these files :\n', data)
        })
        */
        // cmd.get(
        //     `
        //         mkdir tmp
        //         mkdir tmp/source-file
        //         touch tmp/source-file/index.css
        //         curl -o tpm/command.js https://github.com/lxqsdau/node-cli/command.js
        //     `, (err, data) => {
        //         console.log(err, data)
        //         if (!err) {
        //             console.log('init success');
        //             return;
        //         }
        //     }
        // )
    });
commander
.command('add')
.description('Add a new template')
.alias('a')
.action(() => {
    require('./add')()
})

commander.parse(process.argv); // 执行这个才能有效果
// 命令liu-test-cli -a || liu-test-cli --aaa
// 输出 liu-test-cli脚手架 aaa
if (commander.aaa) {
    console.log('aaa');
}

if (commander.bbb) {
    console.log('bbb');
}
// 命令：liu-test-cli --ccc 刘玄清
// 输出 
// liu-test-cli脚手架
// ccc 刘玄清
if (commander.ccc) {
    console.log('ccc', commander.ccc); // 没有name输出：ccc true
}
/***
 * mkdir -p
 * mkdir -p a/b  如果a目录不存在，直接执行mkdir a/b 会报错，而加上-p，a不存在则先创建a目录，再创建下面的b目录
 * curl
 * curl https://wwww.baidu.com 下载单个文件，输出到shell
 * curl -o tmp/index.html https://wwww.baidu.com  下载文件到指定目录
 */