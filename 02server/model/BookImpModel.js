let SqlBase = require("./SqlBase");
class BookImpModel extends SqlBase {
  constructor() {
    super();
  }
  bookImp(req, res, callback) {
    let that = this;
    let data = {codes:0};
    let bookinfo = req.query;
    console.log(bookinfo);
    //3,编写sql语句
    let sql = "INSERT INTO book(book_name,author,bigtype_name,book_price,introduction) VALUES (";
    sql += "'" + req.query.bookName+ "'," + "'" + req.query.author + "'," + "'" + req.query.type + "'," + "'" + req.query.price + "'," + "'" + req.query.introduction +  "')";

    let u = req.query.reName;
    this.connection.query(sql, function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      data.codes = 1;
      callback(data);
    });
  }
}
module.exports = BookImpModel;

