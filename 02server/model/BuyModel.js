let SqlBase = require("./SqlBase");
class BuyModel extends SqlBase {
  constructor() {
    super();
  }
  buy(req, res,callback) {
    let that = this;
    let u = req.query.userName;
    let b = req.query.bookID;
    let data = {};
    //3,编写sql语句
    let sql = "select * from user";
    sql += " WHERE user_name=?";

    this.connection.query(sql, [u], function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      res[0].user_buyNum++;
      res[0].user_score--;
      let sql1 = "UPDATE user SET user_buybook_id="+"'"+res[0].user_buybook_id+b+','+"',user_buyNum="+res[0].user_buyNum+",user_score="+res[0].user_score;
      sql1 += " WHERE user_name=?";
      that.connection.query(sql1, [u], function (err, res) {
        if (err) {
          console.log("[UPDATE ERROR] - ", err.message);
          return;
        }
        console.log(res);
        if (res.affectedRows!=0) {
            data = { statusCode: 200, msg: '登录成功' };
        } else data = { statusCode: 0, msg: '用户名或密码不正确' };
        callback(data);
      });
    });
    // callback(data);
  }
}
module.exports = BuyModel;

