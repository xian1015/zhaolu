//引入模块
let BannerImpModel = require("../model/BannerImpModel");

class BannerImpService {
  constructor() {}
  bannerImp(req, res,callback) {
    let bannerImpModel = new BannerImpModel();
    //获得数据
    bannerImpModel.bannerImp(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BannerImpService;
