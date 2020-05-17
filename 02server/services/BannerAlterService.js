//引入模块
let BannerAlterModel = require("../model/BannerAlterModel");

class BannerAlterService {
  constructor() {}
  bannerAlter(req, res,callback) {
    let bannerAlterModel = new BannerAlterModel();
    //获得数据
    bannerAlterModel.bannerAlter(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BannerAlterService;
