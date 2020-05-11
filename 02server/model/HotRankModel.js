let SqlBase = require("./SqlBase");
class HotRankModel extends SqlBase {
  constructor() {
    super();
  }
  getHT(req, res, callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let numList = [];
    let bookList = [];
    let that = this;
    let typeId = parseInt(req.query.typeID);
    // let typeId = undefined;
    let type;
    if (typeId == 0 || typeId == 1 || typeId == 2 || typeId == 3) {
      if (typeId == 0) {
        type = "言情";
      } else if (typeId == 1) {
        type = "悬疑"
      } else if (typeId == 2) {
        type = "科幻"
      } else if (typeId == 3) {
        type = "奇幻"
      }
      console.log(that.type)
      let sql = "select * from book where bigtype_name=? order by sale_num desc limit 10";
      this.connection.query(sql,[type], function (err, res) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          return;
        }
        let data = res;
        console.log(res);
        callback(data);
      });

    } else {
      type = false;
      let sql = "select * from book order by sale_num desc limit 10";
      // sql += " WHERE bigtype_name=?"

      this.connection.query(sql, function (err, res) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          return;
        }
        let data = res;
        callback(data);
      });
    }

    //查询最大最小值

  }
}
module.exports = HotRankModel;

