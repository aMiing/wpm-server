const accessTokens = {
    admin: 'admin-accessToken',
    editor: 'editor-accessToken',
    test: 'test-accessToken',
}

var fn_publicKey = async (ctx, next) => {
    ctx.response.body = {
        code: 200,
        msg: 'success',
        data: {
            mockServer: true,
            publicKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBT2vr+dhZElF73FJ6xiP181txKWUSNLPQQlid6DUJhGAOZblluafIdLmnUyKE8mMHhT3R+Ib3ssZcJku6Hn72yHYj/qPkCGFv0eFo7G+GJfDIUeDyalBN0QsuiE/XzPHJBuJDfRArOiWvH0BXOv5kpeXSXM8yTt5Na1jAYSiQ/wIDAQAB',
        },
    }
};


const fn_login = async (ctx, next) => {
    let {
        username,
        password
    } = ctx.request.body;
    const accessToken = accessTokens[username]
    if (!accessToken) {
        ctx.response.body = {
            code: 500,
            msg: '帐户或密码不正确。',
        }
    } else {
        ctx.response.body = {
            code: 200,
            msg: 'success',
            data: {
                accessToken
            },
        }

    }
};


module.exports = {
    'POST /api/publicKey': fn_publicKey,
    'POST /api/login': fn_login,
};