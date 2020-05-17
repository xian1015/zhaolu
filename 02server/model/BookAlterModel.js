let SqlBase = require("./SqlBase");
class BookAlterModel extends SqlBase {
  constructor() {
    super();
  }
  bookAlter(req, res, callback) {
    let that = this;
    let u = req.query;
    let id = req.query.id;
    console.log(u);
    let data = {};
    //3,编写sql语句
    let sql = "UPDATE book SET book_name=" + "'" + u.bookName + "',author='" + u.author + "',bigtype_name='" + u.type + "',book_price=" + u.price + ",introduction='" + u.introduction+"'";
    sql += " WHERE book_id=?";
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

