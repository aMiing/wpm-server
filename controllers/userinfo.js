// 引入jwt token工具
const JwtUtil = require('../utils/jwt');
const fs = require('fs')
const axios = require('axios');
const path = require('path')
const {
    ControlAPI_obj_async
} = require('../config/db')
// 获取用户基本信息，返回登录状态
const fn_userinfo = async (ctx, next) => {
    const {
        accessToken
    } = ctx.request.body
    let jwt = new JwtUtil(accessToken);
    let id = jwt.verifyToken();
    if (id === 'err') {
        ctx.response.body = {
            code: 403,
            msg: '登录过期',
        }
        return false;
    }
    try {
        const sql = `SELECT permissions,name,sys_name,sys_logo FROM user WHERE id='${id}'`
        const data = await ControlAPI_obj_async(sql)
        // const {
        //     permissions,
        //     name
        // } = JSON.parse(JSON.stringify(result))[0];
        ctx.response.body = {
            code: 200,
            msg: 'success',
            data: Object.assign(data[0], {
                permissions: JSON.parse(data[0].permissions),
                // sys_logo: '../customer-upload/' + data[0].sys_logo,
                'avatar': 'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
            }),
        }
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        }
    }

    writeLog(ctx)
    console.log('id为：', id, '的用户登录成功！')
};

async function writeLog(ctx) {
    const log_dir = __dirname.slice(0, -22) + 'logs/login_logs.txt'
    const time = new Date().toLocaleString();
    const ip = getClientIP(ctx.request);
    const {
        data: {
            city,
            province
        }
    } = await getPos(ip);
    console.log(city, province)
    fs.appendFile(log_dir,
        '登录时间：[' + time + ']' + '\n 访问ip:' + ip + '\n 地理位置: ' + province + ',' + city + '\n----------------------------\n',
        function (error) {
            if (error) {
                console.log('日志写入失败', error)
            } else {
                console.log('日志写入成功了')
            }
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

async function fn_updateSysInfo(ctx) {
    const {
        sys_name,
        sys_logo
    } = ctx.request.body;
    const accessToken = ctx.request.headers.accesstoken;
    let jwt = new JwtUtil(accessToken);
    let id = jwt.verifyToken();
    const sql = `UPDATE user SET sys_name='${sys_name}', sys_logo='${sys_logo}' WHERE id='${id}'`
    try {
        await ControlAPI_obj_async(sql)
        ctx.response.body = {
            code: 200,
            msg: 'success'
        }
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err
        }
    }

}



module.exports = {
    'POST /api/userInfo': fn_userinfo,
    'POST /api/updateSysInfo': fn_updateSysInfo,
};