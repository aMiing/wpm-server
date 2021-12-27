const { Sequelize } = require('sequelize');
const { db_config } = require('../config.global');
const { user, host, port, password, database } = db_config;

module.exports = async function (database) {
  const sql = `CREATE DATABASE ${database} CHARACTER SET utf8 COLLATE utf8_general_ci`;
  const findDB = `select * from information_schema.SCHEMATA where SCHEMA_NAME = '${database}' `;
  const sequelize = new Sequelize('', user, password, {
    host,
    port,
    dialect: 'mysql',
  });
  const result = await sequelize.query(findDB);
  if (!result[0].length) {
    await sequelize.query(sql);
    console.log(`数据库${database}新建成功`);
  } else {
    console.log(`数据库${database}已存在`);
  }
};
