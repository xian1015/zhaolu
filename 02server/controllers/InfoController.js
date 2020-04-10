let InfoService = require("../services/InfoService");
module.exports.getInfo= function (req, res) {
  //从用户请求里面取得里面的数据,用户请求在req
  //把解析出来的数据交给业务逻辑层
  //把业务逻辑层返回的数据发回给客户端
  let infoService = new InfoService();
  infoService.getInfo(req, res,function(ob) {
    res.json(ob);
  });

  // let u = req.query.userName;
  // let p = req.query.userPassword;
  // console.log("用户名是"+u);
  // console.log("密码是"+p);
};
