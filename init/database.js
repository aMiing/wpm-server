const { Sequelize } = require("sequelize");
const db_name = "wpm";

const sql = `CREATE DATABASE ${db_name} CHARACTER SET utf8 COLLATE utf8_general_ci`;
const findDB = `select * 
from information_schema.SCHEMATA 
where SCHEMA_NAME = '${db_name}' `;

const sequelize = new Sequelize('', "root", "root", {
    host: "localhost",
    port: "3306",
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
