const fs = require('fs')
const getPage = async (ctx, next) => {
    const pub_dir = __dirname.slice(0, 22)
    console.log('pub_dir', pub_dir, __dirname)
    await ctx.render(pub_dir + 'public/index.html')
}

module.exports = {
    'GET /': getPage,
};