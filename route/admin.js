const express = require('express');
//使用express下的Router方法
const admin = express.Router();
//登录页面
admin.get("/login", require("./admin/login"));
//后台管理首页
admin.get("/user", require("./admin/userPage"));
//导出admin路由模块成员
module.exports = admin;