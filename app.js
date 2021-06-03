const Koa = require('koa');
var cors = require('koa2-cors');

const bodyParser = require('koa-bodyparser');

// const fs = require('fs');
const path = require("path")
const views = require("koa-views")
const controller = require('./controller');
// const vertifyToken = require('./utils/handleApi')
const serve = require("koa-static");

const app = new Koa();

// 可以指定多个静态目录
app.use(serve(__dirname));

app.use(bodyParser());
app.use(cors());
app.use(views(path.resolve(__dirname + '/public/'), {
    //不设置的话，模板文件要使用.ejs后缀而不是.htmls后缀
    // map: { html: 'ejs' }  
}));

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

// // parse request body:

// // add controllers:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');