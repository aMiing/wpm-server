// 引入jwt token工具
const JwtUtil = require('../utils/jwt');
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
    console.log('id', id)
    if (id === 'err') {
        ctx.response.body = {
            code: 403,
            msg: '登录过期',
        }
        return false;
    }
    try {
        const sql = `SELECT permissions,name FROM user WHERE id='${id}'`
        const result = await ControlAPI_obj_async(sql)
        const {
            permissions,
            name
        } = JSON.parse(JSON.stringify(result))[0];
        ctx.response.body = {
            code: 200,
            msg: 'success',
            data: {
                permissions: JSON.parse(permissions),
                username: name,
                'avatar': 'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
            },
        }
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        }
    }
};

module.exports = {
    'POST /api/userInfo': fn_userinfo,
};