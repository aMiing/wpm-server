const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define(
        "privilege",
        {
            id: {
                type: DataTypes.INTEGER(5),
                allowNull: false,
                primaryKey: true,
            },
            cost_unit: {
              type: DataTypes.DECIMAL(10, 2),
              allowNull: false,
            },
            discount: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            integrals: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },

        },
        {
            // 这是其他模型参数
            timestamps: false,
            tableName: "privilege", // 我们需要选择模型名称
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );
};
