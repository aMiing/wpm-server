const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define(
        "logs",
        {
            id: {
                type: DataTypes.STRING(40),
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
            tableName: "logs", // 我们需要选择模型名称
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );
};
