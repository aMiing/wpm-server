const fs = require('fs')

// 获取用户基本信息，返回登录状态
const fn_uploadImg = async (ctx, next) => {
    console.log(ctx.req.file)
    ctx.body = {
        filename: ctx.req.file.path.slice(7) //返回文件名
    }
};
module.exports = {
    'POST /api/upload/uploadImg': fn_uploadImg,
};