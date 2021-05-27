const mysql = require('mysql')
const Koa = require('koa');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const app = new Koa();


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// add controllers:
app.use(controller());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wpm123456'
})

db.connect(err => {
    if(err) throw err;
    console.log('连接数据库成功')
})

app.listen(3000);
console.log('app started at port 3000...');