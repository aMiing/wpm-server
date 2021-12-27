const { ControlAPI_obj_async } = require('../database/query');
const { v4: uuidv4 } = require('uuid');

const vertifyToken = require('../utils/handleApi');
const tableName = ctx => vertifyToken(ctx) + '_classification';

//查询分类列表
const fn_getTypeList = async (ctx, next) => {
  ctx.response.head = 'text/plain; charset=UTF-8';
  let sql = '';
  //没有传值的情况下默认查询全部分类
  let { pageNo, pageSize } = ctx.request.body;
  if (typeof pageNo == 'undefined' || typeof pageSize == 'undefined') {
    sql = `SELECT * FROM ${tableName(ctx)} ORDER BY createTime DESC`;
  } else {
    sql = `SELECT * FROM ${tableName(ctx)} ORDER BY createTime DESC limit ${
      (pageNo - 1) * pageSize
    },${pageSize}`;
  }
  const total_sql = `SELECT count(*) FROM ${tableName(ctx)}`; //返回总条数
  try {
    const data = await ControlAPI_obj_async(sql, null);
    const total = await ControlAPI_obj_async(total_sql, null);
    ctx.response.body = {
      code: 200,
      msg: '获取分类列表成功！',
      data: {
        data,
        total: total[0]['count(*)'],
      },
    };
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: 'error',
      data: err,
    };
  }
};
//新增分类列表
const fn_addTypeList = async (ctx, next) => {
  const sql = `INSERT INTO ${tableName(ctx)} SET ?`;
  const row = ctx.request.body;
  const _row = Array.isArray(row) ? row : [row];
  try {
    _row.forEach(async r => {
      r.uuid = uuidv4();
      r.createTime = new Date();
      await ControlAPI_obj_async(sql, r);
    });
    ctx.response.body = {
      code: 200,
      msg: '新增分类成功！',
      data: _row,
    };
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: 'error',
      data: err,
    };
  }
};
//编辑分类
const updateTypes = async (ctx, next) => {
  const row = ctx.request.body;
  const sql = `UPDATE ${tableName(ctx)} SET? WHERE uuid=?`;
  const { name, uuid } = row;
  try {
    await ControlAPI_obj_async(sql, [
      {
        name,
      },
      uuid,
    ]);
    data = await ControlAPI_obj_async(`SELECT * FROM classification WHERE uuid=?`, uuid);
    ctx.response.body = {
      code: 200,
      msg: '更新分类信息成功！',
      data,
    };
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: 'error',
      data: err,
    };
  }
};
//删除分类
const deleteTypes = async (ctx, next) => {
  const ids = ctx.request.body.uuid;
  const _ids = Array.isArray(ids) ? ids : [ids];
  const sql = `DELETE FROM ${tableName(ctx)} WHERE uuid=?`;
  try {
    _ids.forEach(async id => {
      await ControlAPI_obj_async(sql, id);
    });
    ctx.response.body = {
      code: 200,
      msg: '删除分类成功！',
    };
  } catch (err) {
    ctx.response.body = {
      code: 500,
      msg: 'error',
      data: err,
    };
  }
};

module.exports = {
  'POST /api/classification/getTypeList': fn_getTypeList,
  'POST /api/classification/create': fn_addTypeList,
  'POST /api/classification/update': updateTypes,
  'POST /api/classification/delete': deleteTypes,
};
