const {
    ControlAPI_obj_async
} = require('../config/query')
const {
    v4: uuidv4
} = require('uuid');


// 获取商品列表
const fn_getList = async (ctx, next) => {
    ctx.response.head = "text/plain; charset=UTF-8";
    const sql = 'SELECT * FROM goods WHERE deleted=1';
    try {
        const data = await ControlAPI_obj_async(sql, null)
        ctx.response.body = {
            code: 200,
            msg: '获取商品列表成功！',
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
// 新增商品
const createGoods = async (ctx, next) => {
    const sql = 'INSERT INTO goods SET ?';
    const row = ctx.request.body;
    row.uuid = uuidv4();
    try {
        await ControlAPI_obj_async(sql, row)
        data = await ControlAPI_obj_async(`SELECT * FROM goods WHERE uuid=?`, row.uuid)
        ctx.response.body = {
            code: 200,
            msg: '新增商品成功！',
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

// 更新商品信息
const updateGoods = async (ctx, next) => {
    const row = ctx.request.body;
    const sql = `UPDATE goods SET? WHERE uuid=?`;
    const {
        name,
        price,
        author,
        stock,
        type,
        uuid
    } = row;
    try {
        await ControlAPI_obj_async(sql, [{
            name,
            price,
            author,
            stock,
            type
        }, uuid])
        data = await ControlAPI_obj_async(`SELECT * FROM goods WHERE uuid=?`, uuid)
        ctx.response.body = {
            code: 200,
            msg: '更新商品信息成功！',
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
// 删除商品
const deleteGoods = async (ctx, next) => {
    const ids = ctx.request.body.uuid.split(',');
    const sql = `UPDATE goods SET deleted=2 WHERE uuid=?`;
    try {
        ids.forEach(async (id) => {
            await ControlAPI_obj_async(sql, id)
        });
        ctx.response.body = {
            code: 200,
            msg: '删除商品成功！',
        };
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        };
    }
};

// 重置商品库存
const fn_resetStock = async (ctx, next) => {
    // 更新数据库
    const body = ctx.request.body;
    try {
        Object.keys(body).forEach(async (e) => {
            const ele = body[e]
            const sql = `UPDATE goods SET stock=? WHERE uuid=?`;
            await ControlAPI_obj_async(sql, [ele.stock, ele.uuid])
        })
        ctx.response.body = {
            code: 200,
            msg: '更新库存成功！'
        }
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: err
        }
    }
}


module.exports = {
    'GET /api/goods/getList': fn_getList,
    'POST /api/goods/resetStock': fn_resetStock,
    'POST /api/goods/create': createGoods,
    'POST /api/goods/update': updateGoods,
    'POST /api/goods/delete': deleteGoods,
};