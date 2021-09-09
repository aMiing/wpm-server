/**
 * 返回数据库连接实例，function包裹
 */
const mysql = require('mysql')
const sqlConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'wpm_test',
    multipleStatements: true,
}
const pool = mysql.createPool(sqlConfig)



module.exports = pool