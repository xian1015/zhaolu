let LoginService = require("../services/LoginService");
// let LoginModel2 = require("../model/LoginModel2");
module.exports.login= function (req, res) {
  //从用户请求里面取得里面的数据,用户请求在req
  //把解析出来的数据交给业务逻辑层
  //把业务逻辑层返回的数据发回给客户端
  let loginService = new LoginService();
  loginService.login(req, res,function(ob) {
    res.json(ob);
  });

  // let u = req.query.userName;
  // let p = req.query.userPassword;
  // console.log("用户名是"+u);
  // console.log("密码是"+p);
};
