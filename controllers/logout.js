const fn_logout = async (ctx, next) => {
    ctx.response.body = {
        code: 200,
        msg: 'success'
    };
}


module.exports = {
    'GET /api/logout': fn_logout,
};