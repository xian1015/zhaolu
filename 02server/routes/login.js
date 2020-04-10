let express = require('express');
let router = express.Router();

let mysql = require("mysql"); //调用MySQL模块
//1，创建一个connection
this.connection = mysql.createConnection({
  host: "localhost", //主机 ip
  user: "root", //MySQL认证用户名
  password: "324423sql", //MySQL认证用户密码
  port: "3306", //端口号
  database: "zhaolu" ,//数据库里面的数据

});
//2,连接
this.connection.connect();

router.get('/', function(req, res, next) {
    let uName = req.query.userName;
    let uPassword = req.query.userPassword;
    let sql = "select user_password from user";
    sql += " WHERE user_name=?";
    connection.query(sql, [uName], function (err, res) {
        if (err) {
            console.log("[SELECT ERROR] - ", err.message);
            return;
          }
        //将数据库传来的数据转化为JSON格式
        let uPasswordString = JSON.stringify(res);
        let userPassword = JSON.parse(uPasswordString)[0].uPassword;
        //如果没有数据，说明用户名填写错误
        if(userPassword.length>0){
            //将两个密码进行比对
            if(userPassword === uPassword)
                data = { statusCode:200, msg:'登录成功'};
            else data = { statusCode:0, msg:'密码不正确'};
        }else data = { statusCode:0, msg:'用户名不正确'};
    });
    //向客户端返回数据
   res.send(data);
});

module.exports = router;