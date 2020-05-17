let SqlBase = require("./SqlBase");
class BannerImpModel extends SqlBase {
  constructor() {
    super();
  }
  bannerImp(req, res, callback) {
    let that = this;
    let data = {codes:0};
    let bookinfo = req.query;
    console.log(req.query)
    //3,编写sql语句
    let sql = "INSERT INTO banner(banner_link,banner_intro) VALUES (";
    sql += "'" + req.query.book_link+ "'," + "'" + req.query.banner_intro +  "')";

    this.connection.query(sql, function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      if (res.affectedRows != 0) {
        data = { statusCode: 200, msg: '插入成功' };
      } else data = { statusCode: 0, msg: '插入失败' };
      callback(data);
    });
  }
}
module.exports = BannerImpModel;

