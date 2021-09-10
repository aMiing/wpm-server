/**
 * 返回数据库连接池
 */
const mysql = require('mysql')
const {db_config} = require('../config.global')

const sqlConfig = {
    ...db_config,
    multipleStatements: true,
}
const pool = mysql.createPool(sqlConfig)

module.exports = pool