let SqlBase = require("./SqlBase");
class LoginModel extends SqlBase {
  constructor() {
    super();
  }
  login(req, res,callback) {
    let u = req.query.userName;
    let p = req.query.userPassword;
    let data = {};
    //3,编写sql语句
    let sql = "select * from user";
    sql += " WHERE user_name=? AND user_password=?";

    this.connection.query(sql, [u,p], function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      if (res.length > 0) {
          data = { statusCode: 200, msg: '登录成功' };
      } else data = { statusCode: 0, msg: '用户名或密码不正确' };
      let d = [data,res[0]];
      callback(d);
    });
    // callback(data);
  }
}
module.exports = LoginModel;

