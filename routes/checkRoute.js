/*需要做登录检查的路由*/
var express = require('express');
var router = express.Router();

/*主页*/
router.get('/index', function(req, res, next) {
  /*post方式获取参数的方法*/
  console.log(req.session.login_name);

  res.render('index', { title: 'Express' });
});



module.exports = router;
