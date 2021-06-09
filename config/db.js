/**
 * 返回数据库连接实例，function包裹
 */
const mysql = require('mysql')
const sqlConfig = {
    host: 'localhost',
    port: '8889',
    user: 'wpm',
    password: 'wpm123456',
    database: 'wpm',
    multipleStatements: true,
}
const conn = function () {
    const db = mysql.createConnection(sqlConfig)
    db.connect(err => {
        if (err) throw err;
        console.log('连接数据库成功')
    })
    return function () {
        return db
    }

}
module.exports = conn()