const { Sequelize } = require('sequelize');
const init_db = require('./create/db.js');
const models = require('./create/table.js');
const { db_config } = require('./config.global');
const { user, host, port, password, database } = db_config;
// 数据库创建

(async () => {
  await init_db();
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
  const modelsMap = await models(sequelize);
  await sequelize.sync({ alter: true });
  const hasAdmin = await modelsMap['user'].findAll({
    where: {
      usercode: `admin`,
    },
  });
  !hasAdmin.length &&
    (await modelsMap['user'].create({
      id: `001`,
      usercode: `admin`,
      name: `超级管理员`,
      role: `admin`,
      password: `123456`,
      permissions: `["admin"]`,
    }));

  await sequelize.close();
})();
