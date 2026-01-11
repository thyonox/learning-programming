var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 引入路由模块
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Express 实例
var app = express();

// 设置模板文件目录
app.set('views', path.join(__dirname, 'views'));
// 设置模板引擎
app.set('view engine', 'jade');

// 注册中间件
app.use(logger('dev'));
app.use(express.json()); // 解析 JSON 格式的请求体
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // 解析 cookie
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录为 public

// 全局中间件，作用域于所有请求
let requestCount = 0;
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request Count ${requestCount}:Method-${req.method}, URL-${req.url}`);
  next(); // 进入下一个中间件
});

// 特定路径中间件，仅作用于 /api 开头的请求
app.use('/api', (req, res, next) => {
  console.log('API request');
  try{
    1 / 0
    next(); // 如果没有错误，进入下一个中间件
  }catch (error) {
    next(new Error('API Error: ' + error.message));
  }
});

// 模块化路由，将路由挂载到不同路径
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 请求并没有被上面的路由处理器处理，获 404 错误并转发到错误处理器
app.use(function (req, res, next) {
  next(createError(404, 'Page Not Found'));
});

// 错误处理器
app.use(function (err, req, res, next) {
  // 设置 locals，只在开发环境中提供错误信息
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 渲染404错误页面
  if(err.status === 404){
    res.render('error');
  }

  // 渲染其他错误页面
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
