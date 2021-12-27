const { DataTypes, Sequelize } = require('sequelize');

module.exports = function (sequelize) {
  return sequelize.define(
    'logs',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      time: DataTypes.DATE,
      ip: DataTypes.STRING(20),
      province: DataTypes.STRING,
      city: DataTypes.STRING,
      from: DataTypes.STRING,
    },
    {
      // 这是其他模型参数
      timestamps: false,
      tableName: 'logs', // 我们需要选择模型名称
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
};
