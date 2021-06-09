// 引入jwt token工具
const JwtUtil = require('../utils/jwt');

const {
    ControlAPI_obj_async
} = require('../config/query')

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
};


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