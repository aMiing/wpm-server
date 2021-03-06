const { DataTypes, Sequelize } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define(
        "classification",
        {
            uuid: {
                type: DataTypes.STRING(40),
                allowNull: false,
                primaryKey: true,
            },
            name: DataTypes.STRING,
            createTime: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.NOW,
                allowNull: false,
            },
        },
        {
            // 这是其他模型参数
            tableName: "classification", // 我们需要选择模型名称
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,
        }
    );
};
