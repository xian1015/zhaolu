//引入模块
let RegistModel = require("../model/RegistModel");

class RegistService {
  constructor() {}
  regist(req, res,callback) {
    let registModel = new RegistModel();
    //获得数据
    registModel.regist(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = RegistService;
