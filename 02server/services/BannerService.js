//引入模块
let BannerModel = require("../model/BannerModel");

class BannerService {
  constructor() {}
  getBanner(callback) {
    let bannerModel = new BannerModel();
    //获得数据
    bannerModel.getBanner(function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BannerService;
