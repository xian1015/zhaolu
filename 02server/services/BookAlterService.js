//引入模块
let BookAlterModel = require("../model/BookAlterModel");

class BookAlterService {
  constructor() {}
  bookAlter(req, res,callback) {
    let bookAlterModel = new BookAlterModel();
    //获得数据
    bookAlterModel.bookAlter(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BookAlterService;
