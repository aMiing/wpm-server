const {
    ControlAPI_obj_async
} = require('../database/query')
const {
    v4: uuidv4
} = require('uuid');


// 获取商品列表
const fn_getList = async (ctx, next) => {
    //没有传的情况下默认10条
    let pageSize = typeof(ctx.request.body.pageSize) == "undefined" ? 10 : ctx.request.body.pageSize;
    let pageNo =typeof(ctx.request.body.pageNo) == "undefined"? 0 : ctx.request.body.pageNo - 1;
    ctx.response.head = "text/plain; charset=UTF-8";
    const sql = 'SELECT * FROM goods WHERE deleted=1 ORDER BY createTime DESC limit '+pageNo*pageSize+','+pageSize;
    const total_sql = 'SELECT count(*) FROM goods WHERE deleted=1'; //返回总条数
    try {
        const data = await ControlAPI_obj_async(sql, null)
        const total = await ControlAPI_obj_async(total_sql, null)
        ctx.response.body = {
            code: 200,
            msg: '获取商品列表成功！',
            data:{
                data,
                total:total[0]["count(*)"]
            },
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
    const _row = Array.isArray(row) ? row : [row];
    try {
        _row.forEach(async r => {
            r.uuid = uuidv4();
            r.createTime = new Date();
            r.online = 1;
            await ControlAPI_obj_async(sql, r)
        })
        ctx.response.body = {
            code: 200,
            msg: '新增商品成功！',
            data: _row,
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
        online,
        uuid
    } = row;
    try {
        await ControlAPI_obj_async(sql, [{
            name,
            price,
            author,
            stock,
            online,
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
    const ids = ctx.request.body.uuid;
    const _ids = Array.isArray(ids) ? ids : [ids]
    const sql = `UPDATE goods SET deleted=2 WHERE uuid=?`;
    try {
        _ids.forEach(async (id) => {
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
    'POST /api/goods/getList': fn_getList,
    'POST /api/goods/resetStock': fn_resetStock,
    'POST /api/goods/create': createGoods,
    'POST /api/goods/update': updateGoods,
    'POST /api/goods/delete': deleteGoods,
};