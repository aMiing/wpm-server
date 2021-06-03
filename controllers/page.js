const fs = require('fs')
const getPage = async (ctx, next) => {
    // const path = ctx.request.url;
    await ctx.render('public/index.html')
}

module.exports = {
    'GET /': getPage,
};