const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define(
        "orders",
        {
            uuid: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            purchase: {
                type: DataTypes.STRING,
                allowNull: false,
                comment: "购买的商品",
            },
            originPayPrice: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                defaultValue: "0.00",
                comment: "消费金额",
            },
            salesperson: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                comment: "售货员",
            },
            createTime: DataTypes.DATE,
            state: {
                type: DataTypes.INTEGER,
                comment: "1：正常；2： 异常",
                defaultValue: 1,
            },
            deleted: {
                type: DataTypes.INTEGER,
                comment: "1:正常；2：用户删除",
                defaultValue: 1,
            },

            balancePay: {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: "0.00",
                comment: "用余额支付金额",
            },
            discount: {
                type: DataTypes.DECIMAL(10, 2),
                comment: "折扣",
            },
            integralPay: {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: "0.00",
                comment: "积分抵扣",
            },
            payMethod: DataTypes.STRING, //支付方式

            surplusPayment: {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: "0.00",
                comment: "立即支付金额",
            },
            realPayPrice: {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: "0.00",
                comment: "实际支付金额",
            },
            PN: DataTypes.STRING(11),
            orderId: DataTypes.STRING,
        },
        {
            // 这是其他模型参数
            tableName: "orders", // 我们需要选择模型名称
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );
};
