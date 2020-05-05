let SqlBase = require("./SqlBase");
class RecommendModel extends SqlBase {
  constructor() {
    super();
  }
  getBook(callback) {
    let data = {};
    //3,编写sql语句
    let sql = "select * from book";
    sql += " WHERE book_id=?";

    this.connection.query(sql, [u], function (err, res) {
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
module.exports = RecommendModel;

