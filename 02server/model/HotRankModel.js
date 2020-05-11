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
    let needNum = parseInt(req.query.recomNum);
    // let typeId = req.query.type;
    let typeId = undefined;
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
      //   let sql = "select count(*) as result from book";
      // let sql1 = "select * from book WHERE book_id=?"

      // this.connection.query(sql, function (err, res) {
      //   if (err) {
      //     console.log("[SELECT ERROR] - ", err.message);
      //     return;
      //   }
      //   bookNum = res[0].result;
      //   bookNum = parseInt(bookNum);
      //   while (numList.length < needNum) {
      //     let buftype = false;
      //     let buf = 1000 + Math.floor(Math.random() * bookNum) + 1;
      //     for (let i = 0; i < numList.length; i++) {
      //       if (buf == numList[i]) {
      //         buftype = true;
      //       }
      //     }
      //     if (!buftype) {
      //       numList.push(buf);
      //     }
      //   }
      //   for (let i = 0; i < numList.length; i++) {
      //     that.connection.query(sql1, [numList[i]], function (err, res) {
      //       if (err) {
      //         console.log("[SELECT ERROR] - ", err.message);
      //         return;
      //       }
      //       let data = res[0];
      //       data.book_cover = ip + port + "/bookcovers/" + data.book_id + ".jpg";
      //       bookList.push(data);
      //       if (i == numList.length - 1) {
      //         callback(bookList);
      //       }
      //     });
      //   }
      // });
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

