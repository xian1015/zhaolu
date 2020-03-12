//引入模块
let LoginModel = require("../model/LoginModel");

class LoginService {
  constructor() {}
  getData(callback) {
    let loginModel = new LoginModel();
    //获得数据
    loginModel.getUserInfor(function(userInfor) {
      //获得每个课程
      callback(userInfor);
    });
  }
}

module.exports = LoginService;
