let SqlBase = require("./SqlBase");
class BannerModel extends SqlBase {
  constructor() {
    super();
  }
  getBanner(callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let state = {};
    //3,编写sql语句
    let sql = "select * from banner";

    this.connection.query(sql, function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      let data = res;
      if (res.length > 0) {
        state = { statusCode: 200, msg: '查询成功' };
        for (let i = 0; i < res.length; i++) {
          data[i].banner_img = ip + port + "/banners/" + data[i].banner_id + ".png"
        }
      } else state = { statusCode: 0, msg: '未查询到相关内容' };
      let d = [state, data];
      callback(d);

    });
  }
}
module.exports = BannerModel;

