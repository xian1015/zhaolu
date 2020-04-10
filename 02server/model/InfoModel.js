let SqlBase = require("./SqlBase");
class InfoModel extends SqlBase {
  constructor() {
    super();
  }
  getInfo(req, res,callback) {
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
      data = res[0];
      console.log(data);
      callback(data);
    });
  }
}
module.exports = InfoModel;

