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
const pool = mysql.createPool(sqlConfig)



module.exports = pool