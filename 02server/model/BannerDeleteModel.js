let SqlBase = require("./SqlBase");
class BannerDeleteModel extends SqlBase {
  constructor() {
    super();
  }
  bannerDelete(req, res, callback) {
    let that = this;
    let data = {codes:0};
    let i = req.query.id;
    console.log(req.query)
    //3,编写sql语句
    let sql = "DELETE FROM banner WHERE banner_id=?";

    this.connection.query(sql,[i], function (err, res) {
      if (err) {
        console.log("[DELETE ERROR] - ", err.message);
        return;
      }
      if (res.affectedRows != 0) {
        data = { statusCode: 200, msg: '删除成功' };
      } else data = { statusCode: 0, msg: '删除失败' };
      callback(data);
    });
  }
}
module.exports = BannerDeleteModel;

