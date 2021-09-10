const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define(
        "classification",
        {
            id: {
                type: DataTypes.STRING(40),
                allowNull: false,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            time: DataTypes.DATE,
        },
        {
            // 这是其他模型参数
            tableName: "classification", // 我们需要选择模型名称
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );
};
