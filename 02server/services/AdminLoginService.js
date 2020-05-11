//引入模块
let AdminLoginModel = require("../model/AdminLoginModel");

class AdminLoginService {
  constructor() {}
  adminLogin(req, res,callback) {
    let adminLoginModel = new AdminLoginModel();
    //获得数据
    adminLoginModel.adminLogin(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = AdminLoginService;
