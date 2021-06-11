const fs = require('fs')
const path = require("path")

// 获取用户基本信息，返回登录状态
const fn_getLogs = async (ctx, next) => {
    const {
        day
    } = ctx.request.query;
    try {
        const data = await readLogs(day);
        ctx.response.body = data;
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        }
    }
};

async function readLogs(day) {
    const tar_day = day || (new Date().toLocaleDateString()).split('/').join('-');
    const log_dir = 'Data' + path.sep + 'logs' + path.sep + tar_day + '_logs.txt';
    const existed = await fs.existsSync(log_dir)
    return existed ? fs.readFileSync(log_dir, 'utf-8') : '记录不存在';
}


module.exports = {
    'GET /api/getLogin_logs': fn_getLogs,
};