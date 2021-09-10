const { Sequelize } = require("sequelize");
const {db_config} = require('../config.global')
const {user, host, port, password, database: db_name} = db_config

const sql = `CREATE DATABASE ${db_name} CHARACTER SET utf8 COLLATE utf8_general_ci`;
const findDB = `select * 
from information_schema.SCHEMATA 
where SCHEMA_NAME = '${db_name}' `;
const sequelize = new Sequelize('', user, password, {
    host,
    port,
    dialect: "mysql",
});

module.exports = async function () {
    const result = await sequelize.query(findDB)
    if(!result[0].length){
        await sequelize.query(sql)
        console.log(`数据库${db_name}新建成功`)
    }else{
        console.log(`数据库${db_name}已存在`)
    }
};
