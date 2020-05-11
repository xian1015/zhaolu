//引入模块
let BookModel = require("../model/BookModel");

class BookService {
  constructor() {}
  bookInfo(req, res,callback) {
    let bookModel = new BookModel();
    //获得数据
    bookModel.bookInfo(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BookService;
