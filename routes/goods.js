const router = require('koa-router')()
// 商品
const GoodsController = require('../controllers/article');
 
router.prefix('/api/goods')
/**
 * 商品接口
 */
//创建商品
router.post('/create',GoodsController.create);
//获取商品详情
router.get('getDetail/:id',GoodsController.detail)
router.get('/getList',GoodsController.list)
 
module.exports = router