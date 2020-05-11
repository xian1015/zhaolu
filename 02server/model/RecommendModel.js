let SqlBase = require("./SqlBase");
class RecommendModel extends SqlBase {
  constructor() {
    super();
  }
  getBook(req, res, callback) {
    let that =this;
    let needNum = parseInt(req.query.recomNum);
    let bookNum;
    let numList = [];
    let bookList = [];
    let ip = "http://localhost:";
    let port = 8888;

    //查询最大最小值
    let sql = "select count(*) as result from book";
    let sql1 = "select * from book WHERE book_id=?"

    this.connection.query(sql, function (err, res) {
      if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
      }
      bookNum = res[0].result;
      bookNum = parseInt(bookNum);
      while (numList.length < needNum) {
        let buftype = false;
        let buf = 1000 + Math.floor(Math.random() * bookNum) + 1;
        for (let i = 0; i < numList.length; i++) {
          if (buf == numList[i]) {
            buftype = true;
          }
        }
        if(!buftype){
          numList.push(buf);
        }
      }
      for(let i=0;i<numList.length;i++){
        that.connection.query(sql1,[numList[i]], function (err, res) {
          if (err) {
            console.log("[SELECT ERROR] - ", err.message);
            return;
          }
          let data =  res[0];
          data.book_cover = ip+port+"/bookcovers/"+data.book_id+".jpg";
          bookList.push(data);
          if(i == numList.length-1){
            callback(bookList);
          }
        });
      }
    });
  }
}
module.exports = RecommendModel;

