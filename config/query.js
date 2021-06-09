const conn = require('./db.js')()

/*
参数说明：
sqlObj: SQL语句结构体，Object类型
{
	"sql": sql语句,
	"value": sql语句中的参数值
}
return：语句执行结果
*/

// 传入单条SQL语句
const ControlAPI_obj_async = function (sql, args) {
    return new Promise((resolved, rejected) => {
        dataBaseControl(sql, args, (result) => {
            if (result === null) {
                rejected(null);
            } else {
                resolved(result);
            }
        });
    });
}
/*
参数说明：
sql: SQL语句，string类型
args：SQL语句中的参数，Array类型
callback：异步回调函数
*/
function dataBaseControl(sql, args, callback) {
    if (args == null || args.length == 0) {
        conn.query(sql, function (error, results, fields) {
            if (error) {
                console.error(error);
                callback(null);
                return;
            }
            callback(results);
        });
    } else {
        conn.query(sql, args, function (error, results, fields) {
            if (error) {
                console.error(error);
                callback(null);
                return;
            }
            callback(results);
        });
    }
}

module.exports = {
    ControlAPI_obj_async
}