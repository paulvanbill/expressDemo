/*需要做登录检查的路由*/
var express = require('express');
var logger = require('../middlewares/myloger4js').logger('checkRoute', 'info');
var router = express.Router();


/*主页*/
router.get('/index', function(req, res, next) {
  /*记录日志*/
  logger.info('it is log4j!');

  /*post方式获取参数的方法*/
  console.log(req.session.login_name);

  res.render('index', { title: 'Express' });
});



module.exports = router;
