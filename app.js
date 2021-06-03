const Koa = require('koa');
var cors = require('koa2-cors');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');
const vertifyToken = require('./utils/handleApi')

const app = new Koa();
app.use(cors());
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
app.use(bodyParser());

// // add controllers:
app.use(controller());

// const goods = require('./routes/goods')
// app.use(goods.routes(), goods.allowedMethods())

app.listen(3000);
console.log('app started at port 3000...');