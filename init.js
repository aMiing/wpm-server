const { Sequelize } = require('sequelize');
const init_db = require('./create/db.js');
const models = require('./create/table.js');
const { db_config } = require('./config.global');
const { user, host, port, password, database } = db_config;

const md5 = require('md5');
const { v4 } = require('uuid');
// 数据库创建

const createDB = async name => {
  await init_db(database);
  const sequelize = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: 'mysql',
    dialectOptions: {
      charset: 'utf8',
    },
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  // 创建表
  const modelsMap = await models(sequelize, name);
  await sequelize.sync({ alter: true });
  // 初始化表数据
  const roles = await modelsMap['roles'].findAll();
  !roles.length &&
    (await modelsMap['roles'].bulkCreate([
      {
        id: v4(),
        code: 'sys-admin',
        name: `系统管理员`,
        permissions: `["*"]`,
      },
      {
        id: v4(),
        code: 'shop-admin',
        name: `门店管理员`,
        permissions: `["*"]`,
      },
      {
        id: v4(),
        code: 'common',
        name: `普通用户`,
        permissions: `["*"]`,
      },
    ]));
  const hasAdmin = await modelsMap['user'].findAll();
  !hasAdmin.length &&
    (await modelsMap['user'].create({
      id: v4(),
      usercode: `admin`,
      nickName: `系统管理员`,
      role: `sys-admin`,
      password: md5('123456'),
    }));

  await sequelize.close();
};

module.exports = createDB;
