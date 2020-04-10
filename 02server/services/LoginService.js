//引入模块
let LoginModel = require("../model/LoginModel");

class LoginService {
  constructor() {}
  login(req, res,callback) {
    let loginModel = new LoginModel();
    //获得数据
    loginModel.login(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = LoginService;
