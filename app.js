const Koa = require('koa');
var cors = require('koa2-cors');

const path = require("path")
const views = require("koa-views")
const controller = require('./controller');
// const vertifyToken = require('./utils/handleApi')
const serve = require("koa-static");
// parse request body:
const bodyParser = require('koa-bodyparser');
const app = new Koa();
// 可以指定多个静态目录
app.use(serve(__dirname + '/public/'));

app.use(bodyParser());
app.use(cors());
app.use(views(path.resolve(__dirname + '/public/')));

// log request URL:
// app.use(async (ctx, next) => {
//     console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
//     const active = vertifyToken(ctx)
//     if (active) await next();
//     else {
//         ctx.response.body = {
//             code: 403,
//             msg: '登陆过期，请重新登录！',
//         }
//     }
// });

// // add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');