let SqlBase = require("./SqlBase");
class TypeModel extends SqlBase {
  constructor() {
    super();
  }
  getTypeList(req, res, callback) {
    let ip = "http://localhost:";
    let port = 8888;
    let numList = [];
    let bookList = [];
    let that = this;
    let typeID = parseInt(req.query.typeID);
    // let typeID = undefined;
    let type;
    if (typeID == 0 || typeID == 1 || typeID == 2 || typeID == 3) {
      if (typeID == 0) {
        type = "言情";
      } else if (typeID == 1) {
        type = "悬疑"
      } else if (typeID == 2) {
        type = "科幻"
      } else if (typeID == 3) {
        type = "奇幻"
      }
      console.log(that.type)
      let sql = "select * from book where bigtype_name=? order by sale_num desc";
      this.connection.query(sql,[type], function (err, res) {
        if (err) {
          console.log("[SELECT ERROR] - ", err.message);
          return;
        }
        let data = res;
        for(let i =0;i<data.length;i++){
          data[i].book_cover = ip+port+"/bookcovers/"+data[i].book_id+".jpg"
        }
        callback(data);
      });

    } 

    //查询最大最小值

  }
}
module.exports = TypeModel;

