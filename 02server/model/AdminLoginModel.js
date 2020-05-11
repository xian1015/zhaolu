let SqlBase = require("./SqlBase");
class AdminLoginModel extends SqlBase {
  constructor() {
    super();
  }
  adminLogin(req, res,callback) {
    let u = req.query.adminName;
    let p = req.query.adminPass;
    let data = {};
    //3,编写sql语句
    let sql = "select * from admin";
    sql += " WHERE admin_name=? AND admin_password=?";

    this.connection.query(sql, [u,p], function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      if (res.length > 0) {
          data = { statusCode: 200, msg: '登录成功' };
      } else data = { statusCode: 0, msg: '管理员用户名或密码不正确' };
      console.log(data);
      console.log(res[0]);
      let d = [data,res[0]];
      callback(d);
    });
    // callback(data);
  }
}
module.exports = AdminLoginModel;

