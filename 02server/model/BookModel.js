let SqlBase = require("./SqlBase");
class BookModel extends SqlBase {
  constructor() {
    super();
  }
  bookInfo(req, res,callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let u = req.query.id;
    console.log(u);
    let data = {};
    //3,编写sql语句
    let sql = "select * from book";
    sql += " WHERE book_id=?";

    this.connection.query(sql, [u], function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return
      }
      data = res[0];
      data.book_cover = ip+port+"/bookcovers/"+data.book_id+".jpg"
      console.log(res[0]);
      callback(data);
    });
    // callback(data);
  }
}
module.exports = BookModel;

