const Koa = require('koa');
const cors = require('koa2-cors');
const path = require("path")
const views = require("koa-views")
const serve = require("koa-static");
const bodyParser = require('koa-bodyparser');


const controller = require('./controller');
const vertifyToken = require('./utils/handleApi')
const createFolder = require('./utils/createFolder.js')
// parse request body:
const app = new Koa();
const base_dir = __dirname.slice(0, -10);
// 创建用于存放用户上传文件的文件夹
createFolder('Data' + path.sep + 'customer-upload' + path.sep + 'test.txt')

// 可以指定多个静态目录
app.use(serve(base_dir + 'fe-public' + path.sep));
app.use(serve('Data' + path.sep + 'customer-upload' + path.sep));

app.use(bodyParser());
app.use(cors());
app.use(views(path.resolve(base_dir + 'fe-public' + path.sep)));

// log request URL:
app.use(async (ctx, next) => {
    const active = vertifyToken(ctx)
    if (active) await next();
    else {
        ctx.response.body = {
            code: 403,
            msg: '登陆过期，请重新登录！',
        }
    }
});

// add controllers:
app.use(controller());

app.listen(3000, '0.0.0.0', () => {
    console.log('app started at port 3000...');
});