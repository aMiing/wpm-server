const { DataTypes, Sequelize } = require('sequelize');
// 角色
module.exports = function (sequelize) {
  return sequelize.define(
    'roles',
    {
      // 在这里定义模型属性
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      code: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true,
        comment: 'roleCode 角色编码',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '角色名称',
      },

      permissions: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '角色对应的权限',
      },
    },
    {
      // 这是其他模型参数
      timestamps: false,
      tableName: 'roles', // 我们需要选择模型名称
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
};
