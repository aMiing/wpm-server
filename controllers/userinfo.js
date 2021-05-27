
// 获取用户基本信息，返回登录状态
const fn_userinfo = async (ctx, next) => {
    const {
        accessToken
    } = ctx.request.body
    let permissions = ['admin']
    let username = 'admin'
    if ('admin-accessToken' === accessToken) {
        permissions = ['admin']
        username = 'admin'
    }
    if ('editor-accessToken' === accessToken) {
        permissions = ['editor']
        username = 'editor'
    }
    if ('test-accessToken' === accessToken) {
        permissions = ['admin', 'editor']
        username = 'test'
    }

    ctx.response.body = {
        code: 200,
        msg: 'success',
        data: {
            permissions,
            username,
            'avatar': 'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
        },
    }
};

module.exports = {
    'POST /api/userInfo': fn_userinfo,
};