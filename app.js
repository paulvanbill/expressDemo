/*app.js*/
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
/*引入session支持*/
var session = require('express-session');
var ejs = require('ejs');  //引入ejs
var app = express();
var flash = require('connect-flash'); //消息提示
/*引入路由转发文件*/
var checkRoute = require('./routes/checkRoute');
var noCheckRoute = require('./routes/noCheckRoute');
/*引入权限检查中间件*/
var check = require('./middlewares/check');

// view engine setup
app.set('views', path.join(__dirname, 'views'));  //A directory or an array of directories for the application's views.
												  //If an array, the views are looked up in the order they occur in the array.
												  //default value : process.cwd() + '/views'
												  //指定了页面文件的路径
app.set('view engine', 'html'); //The default engine extension to use when omitted.
app.engine('.html' , ejs.__express);   //"__express"，ejs模块的一个公共属性，表示要渲染的文件扩展名。app.engine('html', require('ejs').renderFile);


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/*添加session*/
app.use(session({
  resave: false, //添加 resave 选项
  saveUninitialized: true, //添加 saveUninitialized 选项
  secret: 'expressDemo', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}));

// flash 中间件，用来显示通知
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

//使用无需登录检查的路由转发文件
app.use(noCheckRoute);
//注册一个中间件用于作登录权限检查
app.use(check.checkLogin);
//使用需登录检查的路由转发文件
app.use(checkRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
