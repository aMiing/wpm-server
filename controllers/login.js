// 引入jwt token工具
const JwtUtil = require('../utils/jwt');
const { ControlAPI_obj_async } = require('../database/query');
const writeLogs = require('../utils/recordLogs');
const { publicKey, privateKey, key } = require('../utils/rsa');

const fn_publicKey = async (ctx, next) => {
  ctx.response.body = {
    code: 200,
    msg: 'success',
    data: {
      mockServer: true,
      publicKey: publicKey,
    },
  };
};

const fn_login = async (ctx, next) => {
  const body = ctx.request.body.param;
  const decrypted = key.decrypt(body, 'utf8');
  const { username, password, from } = JSON.parse(decrypted);
  // const accessToken = accessTokens[username]
  // 数据库验证
  try {
    const sql = `SELECT id,role,scope FROM user WHERE (usercode=? AND password=?)`;
    const result = await ControlAPI_obj_async(sql, [username, password]);
    const data = JSON.parse(JSON.stringify(result))[0];
    if (!!data) {
      const { id, role, scope } = data;
      const jwt = new JwtUtil({ id, role, scope });
      const token = jwt.generateToken();
      ctx.response.body = {
        code: 200,
        msg: 'success',
        data: {
          accessToken: token,
        },
      };
    } else {
      ctx.response.body = {
        code: 400,
        msg: '帐户或密码不正确。',
      };
    }
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: '接口异常，登陆失败',
      data: err,
    };
  }
  writeLogs(ctx, from);
};

module.exports = {
  'POST /api/publicKey': fn_publicKey,
  'POST /api/login': fn_login,
};
