const axios = require('axios');
const fs = require('fs')
const createFolder = require('./createFolder')

// writeLog(ctx)
async function writeLogs(ctx) {
    const today = (new Date().toLocaleDateString()).split('/').join('-');
    const log_dir = 'Data/logs/' + today + '_logs.txt';
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
        '登录时间：[' + time + ']' + '\n 访问ip:' + ip + '\n 地理位置: ' + province + ',' + city + '\n----------------------------\n',
        function (error) {
            console.log('日志写入失败', error)
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