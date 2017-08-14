'use strict'
const exec = require('child_process').exec
const information = require('../information')
const chalk = require('chalk')
const fs = require('fs')
const rpc = require('./replaceContent')
const rename = require('./rename')
const root = require('../../config').root;


// 读取用户输入在information.json中的参数
let projectName = information['projectName']
let gitUrl = information['gitUrl']
let publicPath = information['publicPath']

// 将output publicPath写入webpack.config.js
rpc(root + '/internals/webpack/webpack.config.js', 'publicPath', publicPath)

// git 命令
let pushStr = `git remote rm origin && git remote add origin ${gitUrl} && git push -u origin master `

console.log(chalk.white('\n push...'))

exec(pushStr, (error, stdout, stderr) => {
    if (error) {
        console.log(error)
        process.exit()
    }
    console.log(chalk.green('\n √ push completed!'))
    process.exit()
})

// rename 
rename(projectName)

