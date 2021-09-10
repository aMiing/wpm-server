
const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define(
        "goods",
        {
            // 在这里定义模型属性
            uuid: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: "0.00",
            },
            stock: {
                type: DataTypes.DOUBLE,
                allowNull: false,
            },
            author: DataTypes.STRING(20),
            createTime: DataTypes.DATE,
            online: {
                type: DataTypes.INTEGER,
                comment: '1:在售；2下架',
                defaultValue: 1,
                
            },
            deleted: {
                type: DataTypes.INTEGER,
                comment: '1:正常；2：用户删除',
                defaultValue: 1,

            },
            type: DataTypes.STRING,
            unit: DataTypes.STRING,
        },
        {
            // 这是其他模型参数
            tableName: "goods", // 我们需要选择模型名称
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: false,

        }
    );
};
