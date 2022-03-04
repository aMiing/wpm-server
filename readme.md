## 运行准备

- 下载安装 nodejs[!https://nodejs.org/zh-cn/] 环境, 推荐 v12+

## 数据库软件下载

- 下载 mysql, 墙内高速下载镜像[!http://mirrors.ustc.edu.cn/mysql-ftp/Downloads/]
- 安装按照提示一路 next
- 配置数据库用户名密码

## 创建数据库实例

- 在 config.global.js 里面配置好用户信息，和将要创建的数据库名称
- 执行 node init.js 会运行初始化脚本，生成数据表

## 项目运行

node app.js

项目正常启动， 运行端口 3000

## 访问

浏览器输入 http://localhost:3000/ 即可

## 建议

- 可以使用 pm2 来启动项目，方便管理

## 完成
