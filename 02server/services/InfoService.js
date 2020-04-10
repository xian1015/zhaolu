//引入模块
let InfoModel = require("../model/InfoModel");

class InfoService {
  constructor() {}
  getInfo(req, res,callback) {
    let infoModel = new InfoModel();
    //获得数据
    infoModel.getInfo(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = InfoService;
