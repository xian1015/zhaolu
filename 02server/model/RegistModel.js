let SqlBase = require("./SqlBase");
class RegistModel extends SqlBase {
  constructor() {
    super();
  }
  regist(req, res, callback) {
    let that = this;
    let data = {codes:0};
    let retable = req.query;
    // console.log(retable);
    //3,编写sql语句
    let sql = "INSERT INTO user(user_name,user_password,user_tele,user_email,user_sex,user_age) VALUES (";
    sql += "'" + req.query.reName + "'," + "'" + req.query.rePass + "'," + "'" + req.query.retele + "'," + "'" + req.query.reema + "'," + "'" + req.query.resex + "'," + "'" + req.query.reage + "')";

    let sql1 = "select * from user";
    sql1 += " WHERE user_name=?";
    let u = req.query.reName;
    this.connection.query(sql1, [u], function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      if (res.length !== 0) {
        callback(data);
      } else {
        data.codes = 1;
        that.connection.query(sql, function (err, res) {
          if (err) {
            console.log("[SELECT ERROR] - ", err.message);
            return;
          }
          console.log(res);
          callback(data);
        });
      }
    });
  }
}
module.exports = RegistModel;

