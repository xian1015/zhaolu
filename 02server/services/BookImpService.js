//引入模块
let BookImpModel = require("../model/BookImpModel");

class BookImpService {
  constructor() {}
  bookImp(req, res,callback) {
    let bookImpModel = new BookImpModel();
    //获得数据
    bookImpModel.bookImp(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BookImpService;
