
test: async () => { // 如果函数没使用async 函数内部不可以使用await; 
    //async 确保了返回值是一个promise
    //await 不能再顶部作用域，等待await后面的内容返回之后才会执行下面的操作
    const task_countSql = mysql.getSql("select * from test", []);
    let data = await mysql.operateDB(task_countSql, []);
    console.log(data);
    return {
        code: 200,
        message: '成功',
        list: data
    };
}