const {
    ControlAPI_obj_async
} = require('../config/query')
const {
    v4: uuidv4
} = require('uuid');


// 获取订单列表
const fn_getList = async (ctx, next) => {
    const range = ctx.request.body;
    ctx.response.head = "text/plain; charset=UTF-8";
    const sql = `SELECT * FROM orders WHERE deleted=1 AND createTime >=FROM_UNIXTIME(${range[0]/1000}) AND createTime <= FROM_UNIXTIME(${range[1]/1000}) ORDER BY createTime desc`;
    try {
        const data = await ControlAPI_obj_async(sql)
        ctx.response.body = {
            code: 200,
            msg: '获取订单列表成功！',
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
// 新增订单
const createOrder = async (ctx, next) => {
    let row = ctx.request.body;
    const sql = 'INSERT INTO orders SET ?';
    const goods = []
    row.purchase.forEach(e => {
        goods.push(e.name + '*' + e.saled)
    })
    const purchase = goods.join(',')
    row = Object.assign({}, row, {
        uuid: uuidv4(),
        purchase
    })
    try {
        await ControlAPI_obj_async(sql, row)
        ctx.response.body = {
            code: 200,
            msg: '新增订单成功！',
        };
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        };
    }
};

// 更新订单信息
const updateOrder = async (ctx, next) => {
    const row = ctx.request.body;
    const sql = `UPDATE orders SET ? WHERE uuid=?`;
    try {
        await ControlAPI_obj_async(sql, [row, row.uuid])
        data = await ControlAPI_obj_async(`SELECT * FROM orders WHERE uuid=?`, row.uuid)
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
// 获取概览数据
const getDataPreview = async (ctx, next) => {
    const row = ctx.request.body;
    const buffer = (temp) => `SELECT SUM(realPayPrice) as volume,COUNT(uuid) as orderCount FROM orders WHERE createTime >=FROM_UNIXTIME(${temp[0]/1000}) AND createTime <= FROM_UNIXTIME(${temp[1]/1000})`
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
const getOrderStatistics = async (ctx, next) => {
    const range = ctx.request.body;
    const sql = `SELECT DATE_FORMAT(createTime, '%Y/%m/%d') as date,COUNT(uuid) as orderCount,SUM(realPayPrice) as volume FROM orders WHERE createTime >=FROM_UNIXTIME(${range[0]/1000}) AND createTime <= FROM_UNIXTIME(${range[1]/1000}) AND deleted = 1 GROUP BY DATE_FORMAT(createTime, '%Y/%m/%d')`;
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
    'POST /api/order/getList': fn_getList,
    'POST /api/order/create': createOrder,
    'POST /api/order/update': updateOrder,
    'POST /api/order/getDataPreview': getDataPreview,
    'POST /api/order/getOrderStatistics': getOrderStatistics,
};