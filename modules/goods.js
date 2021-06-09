const {
    QueryTypes,
    DataTypes
} = require('sequelize');
// 引入mysql的配置文件
const db = require('../config/query');

// 引入sequelize对象
const Sequelize = db.sequelize;

// console.log('Sequelize', Sequelize)

// 引入数据表模型
const goods = require('../schema/goods')(Sequelize, DataTypes);
goods.sync({
    force: false
}); //自动创建表

class goodsModel {
    /**
     * 创建商品表模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createGoods(data) {
        return await goods.create({
            name: data.name, //名称
            // img: data.img,  //图片
            price: data.price, //价格
            stock: data.stock, //库存
            author: data.author, //厂商
        });
    }

    /**
     * 查询商品信息的详情
     * @param id 商品信息ID
     * @returns {Promise<Model>}
     */
    static async getGoodsDetail(id) {
        return await goods.findOne({
            where: {
                uuid
            }
        });
    }
    /**
     * 获取商品列表
     * @param data
     * @returns {Promise<*>}
     */
    static async getGoodsList() {
        return await goods.findAll();
    }
}

module.exports = goodsModel;