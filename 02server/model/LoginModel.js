let SqlBase = require("./SqlBase");
class LoginModel extends SqlBase {
  constructor() {
    super();
  }
  getUserInfor(callback) {
    var u ="abc"; //req.query.username;
    var p ="123"; //req.query.password;
    //3,编写sql语句
    let sql = "select user_id from user";
    sql += " WHERE user_name=? AND user_password = ?"; 
    //4,进行操作
    /**
     *query，mysql语句执行的方法
     * 1，userAddSql编写的sql语句
     * 2，function (err, result)，回调函数，err当执行错误时，回传一个err值，当执行成功时，传回result
     */
    this.connection.query(sql,[u,p], function (err, result) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      // callback(result);
      if (result.length == 0) {
        callback({ code: -1, msg: '用户名或密码错误' })
      } else {
        callback({ code: 1, msg: '登录成功' })
      }
    });
  }
}

module.exports = LoginModel;
