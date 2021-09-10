const {
    ControlAPI_obj_async
} = require('../database/query')

// 获取特权列表
const getPrivilege = async (ctx, next) => {
    const sql = 'SELECT * FROM privilege WHERE id=1';
    try {
        const data = await ControlAPI_obj_async(sql, null)
        ctx.response.body = {
            code: 200,
            msg: '获取特权列表成功！',
            data,
        };
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        };
    }
};
// 更新
const setPrivilege = async (ctx, next) => {
    const sql = `UPDATE privilege SET ? WHERE id=1`;
    const row = ctx.request.body;
    try {
        await ControlAPI_obj_async(sql, row)
        ctx.response.body = {
            code: 200,
            msg: '更新成功！',
        };
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        };
    }
};


module.exports = {
    'GET /api/privilege/getPrivilege': getPrivilege,
    'POST /api/privilege/setPrivilege': setPrivilege,
};