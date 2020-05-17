let SqlBase = require("./SqlBase");
class BookAlterModel extends SqlBase {
  constructor() {
    super();
  }
  bannerAlter(req, res, callback) {
    let that = this;
    let u = req.query;
    let id = req.query.id;
    console.log(u);
    let data = {};
    //3,编写sql语句
    let sql = "UPDATE banner SET banner_link=" + "'" + u.banner_link + "',banner_intro='" + u.banner_intro +"'";
    sql += " WHERE banner_id=?";
    console.log(sql);

    this.connection.query(sql, [id], function (err, res) {
      if (err) {
        console.log("[UPDATE ERROR] - ", err.message);
        return;
      }
      console.log(res);
      if (res.affectedRows != 0) {
        data = { statusCode: 200, msg: '购买成功' };
      } else data = { statusCode: 0, msg: '用户名或密码不正确' };
      callback(data);

    });
    // callback(data);
  }
}
module.exports = BookAlterModel;

