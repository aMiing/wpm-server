const createDB = require('../init');
const { ControlAPI_obj_async } = require('../database/query');
const { v4 } = require('uuid');

const fn_register = async ctx => {
  const { id = v4(), password, phone, usercode, nickName } = ctx.request.query;
  const scope = usercode;
  const sql = 'INSERT INTO wpm.user SET ?';
  try {
    await ControlAPI_obj_async(sql, { id, password, phone, usercode, nickName, scope });
    await createDB(scope);
    ctx.response.body = {
      code: 200,
      msg: '创建账号成功！请登录！',
    };
  } catch (error) {
    ctx.response.body = {
      code: 500,
      msg: error || '帐户已存在，换个用户名试试吧！',
    };
  }
};

module.exports = {
  'GET /api/register': fn_register,
};
