// 引入jwt token工具
const JwtUtil = require('../utils/jwt');

const { ControlAPI_obj_async } = require('../database/query');

// 获取用户基本信息，返回登录状态
const fn_userinfo = async (ctx, next) => {
  const { accessToken } = ctx.request.body;
  let jwt = new JwtUtil(accessToken);
  let { id, role } = jwt.verifyToken();
  if (id === 'err') {
    ctx.response.body = {
      code: 403,
      msg: '登录过期',
    };
    return false;
  }
  try {
    const sql = `SELECT * FROM user WHERE id=?`;
    const permissions = await ControlAPI_obj_async('SELECT * FROM roles WHERE id=?', role);
    const data = await ControlAPI_obj_async(sql, id);
    ctx.response.body = {
      code: 200,
      msg: 'success',
      data: Object.assign(data[0], {
        permissions: JSON.parse(permissions[0].permissions),
        avatar: 'https://i.gtimg.cn/club/item/face/img/8/15918_100.gif',
        name: data[0].nickName,
      }),
    };
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: 'error',
      data: err,
    };
  }
};

async function fn_updateSysInfo(ctx) {
  const params = ctx.request.body;
  const accessToken = ctx.request.headers.accesstoken;
  let jwt = new JwtUtil(accessToken);
  let id = jwt.verifyToken();
  const sql = `UPDATE user SET ?`;
  try {
    await ControlAPI_obj_async(sql, params);
    ctx.response.body = {
      code: 200,
      msg: 'success',
    };
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: 'error',
      data: err,
    };
  }
}

const fn_checkUserName = async (ctx, next) => {
  let { nickName } = ctx.request.body;
  const sql = `SELECT id FROM user WHERE (usercode=?)`;
  const result = await ControlAPI_obj_async(sql, [username]);
  const accessToken = accessTokens[username];
  if (accessToken) {
    ctx.response.body = {
      code: 500,
      msg: '帐户已存在，换个用户名试试吧！',
    };
  } else {
    ctx.response.body = {
      code: 200,
      msg: '创建账号成功！请登录！',
    };
  }
};

module.exports = {
  'POST /api/userInfo': fn_userinfo,
  'POST /api/updateSysInfo': fn_updateSysInfo,
  'POST /api/checkUserName': fn_checkUserName,
};
