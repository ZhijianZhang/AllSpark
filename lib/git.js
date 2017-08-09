'use strict'
const execSync = require('child_process').execSync;
const spawnSync = require('child_process').spawnSync;
const chalk = require('chalk')

let pushStr = `rm -rf .git && git init && git add . `

execSync(pushStr)
console.log(chalk.green('\√ git init && add completed!'))


// git commit -m "first commit"
spawnSync('git', ['commit', '-m', 'first commit'], { stdio: ['pipe', process.stdout, process.stderr] });
console.log(chalk.green('√ commit completed!'))

// git remote add origin ${gitUrl}
let addStr = `git remote add origin https://git.coding.net/MrJCoding/project-a.git`
execSync(addStr)
console.log(chalk.green('\n √ git remote add origin completed!'))

// git push -u origin master
spawnSync('git', ['push', '-u', 'origin', 'master'], { stdio: ['pipe', process.stdout, process.stderr] });
console.log(chalk.green('√ push completed!'))
