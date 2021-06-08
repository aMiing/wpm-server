const fs = require('fs')

// 获取用户基本信息，返回登录状态
const fn_getLogs = async (ctx, next) => {
    try {
        const data = await readLogs();
        ctx.response.body = data;
    } catch (err) {
        ctx.response.body = {
            code: 500,
            msg: 'error',
            data: err,
        }
    }
};

async function readLogs() {
    const log_dir = __dirname.slice(0, -22) + 'logs/login_logs.txt'
    return fs.readFileSync(log_dir, 'utf-8')
}

module.exports = {
    'GET /api/getLogin_logs': fn_getLogs,
};