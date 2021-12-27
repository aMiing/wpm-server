const { DataTypes, Sequelize } = require('sequelize');
module.exports = function (sequelize, scope) {
  return sequelize.define(
    'vip',
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      PN: DataTypes.STRING(11),
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        comment: '昵称、姓名',
      },

      balance: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: '0.00',
        comment: '金额',
      },
      integral: {
        type: DataTypes.INTEGER(10),
        defaultValue: 0,
      },

      deleted: {
        type: DataTypes.INTEGER,
        comment: '1:正常；2：用户删除',
        defaultValue: 1,
      },
      createTime: DataTypes.DATE,
    },
    {
      tableName: (scope ? scope + '_' : '') + 'vip', // 我们需要选择模型名称
      timestamps: false,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
};
