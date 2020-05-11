let HotRankService = require("../services/HotRankService");
module.exports.getHT= function (req, res) {
  //从用户请求里面取得里面的数据,用户请求在req
  //把解析出来的数据交给业务逻辑层
  //把业务逻辑层返回的数据发回给客户端
  let hotRankService = new HotRankService();
  hotRankService.getHT(req, res,function(ob) {
    res.json(ob);
  });
};
