//getpath.js
const multer = require('koa-multer')
const path = require('path')

//配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        const pub_dir = __dirname.slice(0, -16)
        cb(null, pub_dir + 'customer-upload') //path.resolve('public/phoneManageSystem')
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split("."); //以点分割成数组，数组的最后一项就是后缀名
        const ext = fileFormat[fileFormat.length - 1];
        const originalname = file.originalname.slice(0, -(ext.length + 1));
        cb(null, originalname + '_' + Date.now() + "." + ext);
    }
})
//加载配置
var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 / 2 // 限制512KB
    }
});

module.exports = upload