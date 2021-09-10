
const { DataTypes } = require("sequelize");

module.exports = function(sequelize) {
    return sequelize.define('user', {
        // 在这里定义模型属性
        id: {
          type: DataTypes.STRING(40),
          allowNull: false,
          primaryKey: true 
        },
        usercode: {
          type: DataTypes.STRING(40),
          allowNull: false,
          unique: true,
          comment: '对应前端的username'
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          comment: '昵称、姓名'
        },

        role: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '角色'
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          permissions: DataTypes.STRING,
          sys_name: DataTypes.STRING,
          sys_logo: DataTypes.STRING,
          theme_name: DataTypes.STRING,

      }, {
        // 这是其他模型参数
        tableName: 'user', // 我们需要选择模型名称
        charset: 'utf8',
        collate: 'utf8_general_ci'
      });
}