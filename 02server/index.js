let express = require("express");
let mysql = require("mysql");
//2，获得express对象
let app = express();
//3,引入body-parser模块
let bodyParser = require("body-parser");
// 4，创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});
//5,设置静态文件
app.use(express.static("public"));
//6,设置跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
//设置固定值
let ip = "localhost:";
let port = 8888;

let loginControllers = require("./controllers/LoginController");
app.get("/login", loginControllers.login);

let bookControllers = require("./controllers/BookController");
app.get("/book", bookControllers.bookInfo);

let hotRanKController = require("./controllers/HotRanKController");
app.get("/hotrank", hotRanKController.getHT);


let adminLoginControllers = require("./controllers/AdminLoginController");
app.get("/adminLogin", adminLoginControllers.adminLogin);

let infoControllers = require("./controllers/InfoController");
app.get("/getInfo", infoControllers.getInfo);

let registControllers = require("./controllers/RegistControllers");
app.get("/regist", registControllers.regist);

let bookImpControllers = require("./controllers/BookImpControllers");
app.get("/bookImp", bookImpControllers.bookImp);

let recommendController = require("./controllers/RecommendController");
app.get("/recom", recommendController.getBook);


//4,进行监听
app.listen(port, function () {
  console.log(`${port}启动`);
});