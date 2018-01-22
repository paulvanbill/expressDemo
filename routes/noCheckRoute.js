/*无需做登录检查的路由*/
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*登录主界面*/
router.get('/main', function(req, res, next) {
  res.render('login/login');
});

/*登录*/
router.post('/login', function(req, res, next) {
  /*post方式获取参数的方法*/
  var login_name =  req.body.login_name;
  var pass_word = req.body.password;
  if(login_name == "aa" && pass_word == "aa") {
    var j = {"success":true,"msg":"success"};
    /*把用户信息放入session中*/
    req.session.login_name = login_name;
  }else {
    var j = {"success":false,"msg":"用户或密码错误！"};
  }
  res.type('application/json').send(j);
});



module.exports = router;
