/**
 * 返回数据库连接实例，function包裹
 */
const mysql = require('mysql')
const sqlConfig = {
    host: 'localhost',
    // host: '49.235.109.180',
    port: '3306',
    user: 'wpm',
    password: 'wpm123456',
    multipleStatements: true,
}
const pool = (db='') => mysql.createPool({...sqlConfig, database: db})

module.exports = pool