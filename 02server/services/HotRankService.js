//引入模块
let HotRankModel = require("../model/HotRankModel");

class HotRankService {
  constructor() {}
  getHT(req, res,callback) {
    let hotRankModel = new HotRankModel();
    //获得数据
    hotRankModel.getHT(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = HotRankService;
