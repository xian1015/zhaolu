//引入模块
let RecommendModel = require("../model/RecommendModel");

class RecommendService {
  constructor() {}
  getBook(callback) {
    let recommendModel = new RecommendModel();
    //获得数据
    recommendModel.getBook(function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = RecommendService;
