const accessTokens = {
    admin: 'admin-accessToken',
    editor: 'editor-accessToken',
    test: 'test-accessToken',
}


const fn_register = async (ctx, next) => {
    let {
        password,
        phone,
        phoneCode,
        username,
    } = ctx.request.body;
    const accessToken = accessTokens[username]
    if (accessToken) {
        ctx.response.body = {
            code: 500,
            msg: '帐户已存在，换个用户名试试吧！',
        }
    } else {
        ctx.response.body = {
            code: 200,
            msg: '创建账号成功！请登录！'
        }
    }
};


module.exports = {
    'POST /api/register': fn_register,
};