const fs = require('fs')

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
    const log_dir = 'Data/logs/' + tar_day + '_logs.txt'
    return fs.readFileSync(log_dir, 'utf-8')
}

module.exports = {
    'GET /api/getLogin_logs': fn_getLogs,
};