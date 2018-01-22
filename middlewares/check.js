/*
用于登录权限控制
需要登录权限控制的url,除不需权限控制之外的都要
不需要登录权限控制的url：/nologin/*
*/


module.exports = {
  /*未登录的自动重定向到登录页面*/
  checkLogin: function checkLogin (req, res, next) {
    if (!req.session.login_name) {
      req.flash('error', '未登录');
      return res.redirect('/main');
    }
    next();
  },

  checkNotLogin: function checkNotLogin (req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录');
      return res.redirect('back');// 返回之前的页面
    }
    next();
  }
}
