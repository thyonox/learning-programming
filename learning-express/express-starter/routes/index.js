var express = require('express');
var router = express.Router();

// 路由级中间件
router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// 处理请求返回响应
router.get('/', function(req, res, next) {
  // 渲染模板并传递数据
  res.render('index', { title: 'Express' });
});

module.exports = router;
