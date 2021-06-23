const axios = require('axios');
const fs = require('fs')
const createFolder = require('./createFolder')
const path = require("path")
const fromMap = {
    'cs': 'CSDN',
    'js': '简书',
    'cn': '博客园',
    'xy': '咸鱼',
    'gh': 'Github',
}

async function writeLogs(ctx, from = '') {
    const today = (new Date().toLocaleDateString()).split('/').join('-');
    const log_dir = 'Data' + path.sep + 'logs' + path.sep + today + '_logs.txt';
    createFolder(log_dir)
    const time = new Date().toLocaleString();
    const ip = getClientIP(ctx.request);
    const {
        data: {
            city,
            province
        }
    } = await getPos(ip);
    fs.appendFile(log_dir,
        '登录时间：[' + time + ']' + '\n 访问ip:' + ip + '\n 地理位置: ' + province + ',' + city + '\n 来源：' + fromMap[from] || from + '\n----------------------------\n',
        function (error) {
            error && console.log(error)
        })
}

function getClientIP(req) {
    let ip = req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.ip ||
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress || ''
    if (ip) {
        ip = ip.replace('::ffff:', '')
    }
    return ip;
};

function getPos(ip) {
    const url = 'https://restapi.amap.com/v3/ip?ip=' + ip + '&key=0242a619c9de44968f3cb7a4ce02f687'
    return axios.get(url)
}

module.exports = writeLogs