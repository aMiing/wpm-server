const { mock } = require('mockjs')

const List = []
const count = 888
let num = 0
for (let i = 0; i < count; i++) {
    List.push(
        mock({
            uuid: '@uuid',
            img: `https://picsum.photos/120/90?random=${num++}`,
            title: '@ctitle',
            description: '@csentence',
            // 'status|1': ['on', 'off'],
            author: '@cname', //厂商
            datetime: '@datetime',
            pageViews: '@integer(0, 5000)',
            switch: '@boolean',
            price: '@integer(80,99)',
            saled: 0,
        })
    )
}

// 获取商品列表
const fn_getList = async (ctx, next) => {
    ctx.response.head = "text/plain; charset=UTF-8";
    ctx.response.body = {
        code: 200,
        msg: 'success',
        totalCount: count,
        data: List,
    };
};
// 重置商品库存
const fn_resetStock = async (ctx, next) => {
    // 更新数据库
    try {
        // await resetDatasetStock()
        ctx.response.body = {
            code: 200,
            msg: '重置库存成功！'
        }
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: err
        }
    }
}
// 上下架操作
const doOffOrOn = async (ctx, next) => {
    const goods = ctx.request.body;
    try {
        // await resetDatasetStock()
        ctx.response.body = {
            code: 200,
            msg: (goods.switch?'上':'下')+'下架操作成功！'
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
    'POST /api/goods/doOffOrOn': doOffOrOn,
    
};