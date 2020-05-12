let SqlBase = require("./SqlBase");
class SearchModel extends SqlBase {
  constructor() {
    super();
  }
  getSearchRes(req, res, callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let u = req.query.searchInput;
    let state = {};
    //3,编写sql语句
    let sql = "select * from book";
    sql += " WHERE book_name REGEXP ?";

    this.connection.query(sql, [u], function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      let data = res;
      if (res.length > 0) {
        state = { statusCode: 200, msg: '查询成功' };
        for (let i = 0; i < res.length; i++) {
          data[i].book_cover = ip + port + "/bookcovers/" + data[i].book_id + ".jpg"
        }
      } else state = { statusCode: 0, msg: '未查询到相关内容' };
      let d = [state, data];
      callback(d);
    });
  }
}
module.exports = SearchModel;

