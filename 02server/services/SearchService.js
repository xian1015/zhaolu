//引入模块
let SearchModel = require("../model/SearchModel");

class SearchService {
  constructor() {}
  getSearchRes(req, res,callback) {
    let searchModel = new SearchModel();
    //获得数据
    searchModel.getSearchRes(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = SearchService;
