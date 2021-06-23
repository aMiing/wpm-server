const {
    ControlAPI_obj_async
} = require('../config/query')
const {
    v4: uuidv4
} = require('uuid');


// 获取订单列表
const fn_getList = async (ctx, next) => {
    ctx.response.head = "text/plain; charset=UTF-8";
    const sql = `SELECT * FROM vip WHERE deleted=1 ORDER BY createTime desc`;
    try {
        const data = await ControlAPI_obj_async(sql)
        ctx.response.body = {
            code: 200,
            msg: '获取会员列表成功！',
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
// 新增会员
const create = async (ctx, next) => {
    let row = ctx.request.body;
    const sql = 'INSERT INTO vip SET ?';
    row = Object.assign({
        uuid: uuidv4(),
    }, row)
    try {
        await ControlAPI_obj_async(sql, row)
        const data = await ControlAPI_obj_async(`SELECT * FROM vip WHERE uuid=?`, row.uuid)
        ctx.response.body = {
            code: 200,
            msg: '新增会员成功！',
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

// 更新会员信息
const update = async (ctx, next) => {
    const row = ctx.request.body;
    delete row.createTime;
    const sql = `UPDATE vip SET ? WHERE uuid=?`;
    try {
        await ControlAPI_obj_async(sql, [row, row.uuid])
        const data = await ControlAPI_obj_async(`SELECT * FROM vip WHERE uuid=?`, row.uuid)
        ctx.response.body = {
            code: 200,
            msg: '更新订单信息成功！',
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

// 删除会员
const deleteItem = async (ctx, next) => {
    const ids = ctx.request.body.uuid.split(',');
    const sql = `UPDATE vip SET deleted=2 WHERE uuid=?`;
    try {
        ids.forEach(async (id) => {
            await ControlAPI_obj_async(sql, id)
        });
        ctx.response.body = {
            code: 200,
            msg: '删除会员成功！',
        };
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        };
    }
};
// 获取概览数据
const getDataPreview = async (ctx, next) => {
    const row = ctx.request.body;
    const buffer = (temp) => `SELECT SUM(realPayPrice) as volume,COUNT(uuid) as orderCount FROM vip WHERE createTime >=FROM_UNIXTIME(${temp[0]/1000}) AND createTime <= FROM_UNIXTIME(${temp[1]/1000})`
    const sqlArr = []
    row.parames.forEach(e => {
        sqlArr.push(buffer(e))
    })

    try {
        const data = await ControlAPI_obj_async(sqlArr.join(';'))
        ctx.response.body = {
            code: 200,
            msg: '获取信息成功！',
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
// 数据统计
const getviptatistics = async (ctx, next) => {
    const range = ctx.request.body;
    const sql = `SELECT DATE_FORMAT(createTime, '%Y/%m/%d') as date,COUNT(uuid) as orderCount,SUM(realPayPrice) as volume FROM vip WHERE createTime >=FROM_UNIXTIME(${range[0]/1000}) AND createTime <= FROM_UNIXTIME(${range[1]/1000}) AND deleted = 1 GROUP BY DATE_FORMAT(createTime, '%Y/%m/%d')`;
    try {
        const data = await ControlAPI_obj_async(sql)
        ctx.response.body = {
            code: 200,
            msg: '获取信息成功！',
            data,
        };
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        };
    }
}

module.exports = {
    'POST /api/vip/getList': fn_getList,
    'POST /api/vip/create': create,
    'POST /api/vip/update': update,
    'POST /api/vip/delete': deleteItem,
    'POST /api/vip/getDataPreview': getDataPreview,
    'POST /api/vip/getviptatistics': getviptatistics,
};