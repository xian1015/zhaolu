//引入模块
let BannerDeleteModel = require("../model/BannerDeleteModel");

class BannerDeleteService {
  constructor() {}
  bannerDelete(req, res,callback) {
    let bannerDeleteModel = new BannerDeleteModel();
    //获得数据
    bannerDeleteModel.bannerDelete(req, res,function(data) {
      //获得每个课程
      callback(data);
    });
  }
}

module.exports = BannerDeleteService;
