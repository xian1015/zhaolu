//引入模块
let BuyModel = require("../model/BuyModel");

class BuyService {
  constructor() {}
  buy(req, res,callback) {
    let buyModel = new BuyModel();
    //获得数据
    buyModel.buy(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BuyService;
