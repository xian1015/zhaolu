//引入模块
let TypeModel = require("../model/TypeModel");

class TypeService {
  constructor() {}
  getTypeList(req, res,callback) {
    let typeModel = new TypeModel();
    //获得数据
    typeModel.getTypeList(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = TypeService;
