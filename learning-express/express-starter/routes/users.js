var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('UserRouter:', Date.now());
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
