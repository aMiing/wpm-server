/**
 * 收到请求之前先验证token是否过期
 * 过期直接返回提示
 * 没过期继续执行
 */
// 引入jwt token工具
const JwtUtil = require('../utils/jwt');
const noRegister = [
  '/api/login',
  '/api/login',
  '/api/publicKey',
  '/api/getLogin_logs',
  '/api/upload/uploadImg',
  '/api/register',
];
const handleApi = ctx => {
  if (!noRegister.some(e => ctx.request.url.startsWith(e))) {
    try {
      const token = ctx.request.headers.accesstoken;
      const jwt = new JwtUtil(token);
      const data = jwt.verifyToken();
      const { id, role, scope } = data;
      if (id == 'err') {
        return false;
      } else {
        return scope;
      }
    } catch (err) {
      return false;
    }
  }
  return true;
};
module.exports = handleApi;
