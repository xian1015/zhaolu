//引入模块
let RecommendModel = require("../model/RecommendModel");

class RecommendService {
  constructor() {}
  getBook(req, res,callback) {
    let recommendModel = new RecommendModel();
    //获得数据
    recommendModel.getBook(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = RecommendService;
