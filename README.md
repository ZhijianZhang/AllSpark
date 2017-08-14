# AllSpark 

## Scene：

git仓库中clone了一个种子项目，在种子项目的基础上继续进行我们的开发。

通常来说，种子项目与实际项目的不同点有以下几个：

- project name 
- git url
- some config 

AllSpark(火种)做的就是在项目开始之前，用户将上述几点信息写入information.json中，执行命令，AllSpark自动以下的工作：

- clean git repo
- git push
- rename project name
- alter config

**so you can get a new customized project inherited from the seed project more quickly。**

