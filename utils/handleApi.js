/**
 * 收到请求之前先验证token是否过期
 * 过期直接返回提示
 * 没过期继续执行
 */
// 引入jwt token工具
const JwtUtil = require('../utils/jwt');
const noRegister = ['/api/login', '/api/login', '/api/publicKey', '/api/getLogin_logs', '/api/upload/uploadImg']
const handleApi = (ctx) => {
    if (!noRegister.includes(ctx.request.url)) {
        try {
            const token = ctx.request.headers.accesstoken
            let jwt = new JwtUtil(token);
            let id = jwt.verifyToken();
            if (id == 'err') {
                return false;
            } else {
                return true;
            }
        } catch (err) {
            return false;
        }
    }
    return true

}
module.exports = handleApi