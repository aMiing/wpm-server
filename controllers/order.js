const {
    ControlAPI_obj_async
} = require('../config/db')
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
        goods.push(e.name+'*'+e.saled)
    })
    const purchase = goods.join(',')
    row = Object.assign({}, row, {uuid: uuidv4(),purchase })
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
    console.log('update', row)
    const sql = `UPDATE orders SET name='${row.name}',price='${row.price}',stock='${row.stock||0}',author='${row.author}',type='${row.type}',online='${row.online || 0}' WHERE uuid='${row.uuid}'`;
    try {
        await ControlAPI_obj_async(sql, row)
        data = await ControlAPI_obj_async(`SELECT * FROM orders WHERE uuid='${row.uuid}'`)
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

module.exports = {
    'POST /api/order/getList': fn_getList,
    'POST /api/order/create': createOrder,
    'POST /api/order/update': updateOrder,
};