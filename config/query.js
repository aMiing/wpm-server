const pool = require('./db.js')
// 封装
const Query = function (sql, params, callback) {
    pool.getConnection(function (err, connection) {
        connection.query(sql, params, function (err, results) {
            callback(err, results) // 结果回调
            connection.release() // 释放连接资源 | 跟 connection.destroy() 不同，它是销毁
        })
    })
}

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
        Query(sql, null, function (error, results) {
            if (error) {
                console.error(error);
                callback(null);
                return;
            }
            callback(results);
        });
    } else {
        Query(sql, args, function (error, results) {
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