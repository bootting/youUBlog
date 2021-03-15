const express = require("express");
const path = require('path');
const app = express();


//导入路由文件
const admin = require("./route/admin");
const home = require("./route/home");
//配置模板的位置
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

//拦截所有以/admin || /home开头的请求地址,为路由匹配路径
app.use('/admin', admin);
app.use('/home', home);

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')));
//监听8001端口
app.listen(8001);
console.log("服务器创建成功");