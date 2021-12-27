const { DataTypes, Sequelize } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'user',
    {
      // 在这里定义模型属性
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      usercode: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
        comment: '对应前端的username',
      },
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '昵称、姓名',
        defaultValue: '默认昵称',
      },
      scope: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '系统标识',
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '电话',
      },

      role: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '角色',
        defaultValue: '7f415a49-297d-45e0-9d4b-6c7b961a07d5',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      permissions: DataTypes.STRING,
      sys_name: DataTypes.STRING,
      sys_logo: DataTypes.STRING,
      theme_name: DataTypes.STRING,
    },
    {
      // 这是其他模型参数
      timestamps: false,
      tableName: 'user', // 我们需要选择模型名称
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
};
