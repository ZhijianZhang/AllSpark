'use strict'
const fs = require('fs');
const chalk = require('chalk')

module.exports = (pathName, param, value) => {
    let data
    try {
        data = fs.readFileSync(pathName, 'utf8')
    } catch (e) {
        console.log("e:" + e)
    }
    // /(.*publicPath: ')(.+)('.*)/;
    let s = "(.*" + param + ": ')(.+)('.*)"
    console.log("s:" + s)
    let publicPathReg = new RegExp(s)
    console.log(data.toString().search(publicPathReg))
    let afterData = data.toString().replace(publicPathReg, function (match, group1, group2, group3) {
        console.log(match)
        return group1 + value + group3;
    })
    // console.log(afterData)

    fs.writeFile(pathName, afterData, 'utf8', (err) => {
        if (err) console.log(err)
        console.log(chalk.green('success!'))
        console.log('\n')
    })
}

// function replaceJson(pathName, param, value) {
//     let data
//     try {
//         data = fs.readFileSync(pathName, 'utf8')
//     } catch (e) {
//         console.log("e:" + e)
//     }
//     // /(.*publicPath: ')(.+)('.*)/;
//     let s = "(.*" + param + ": ')(.+)('.*)"
//     console.log("s:" + s)
//     let publicPathReg = new RegExp(s)
//     console.log(data.toString().search(publicPathReg))
//     let afterData = data.toString().replace(publicPathReg, function (match, group1, group2, group3) {
//         console.log(match)
//         return group1 + value + group3;
//     })
//     // console.log(afterData)

//     fs.writeFile(pathName, afterData, 'utf8', (err) => {
//         if (err) console.log(err)
//         console.log(chalk.green('success!'))
//         console.log('\n')
//     })
// }

// replaceJson('webpack.config.js', 'publicPath', 'replaceValue');

