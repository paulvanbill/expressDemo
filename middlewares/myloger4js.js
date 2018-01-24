var log4js = require('log4js');
log4js.configure({
    appenders: {
        ruleConsole: {type: 'console'}, //添加此句，则logg.info也会打印到控制台
        ruleFile: {
            type: 'dateFile', //输出到文件内，以pattern属性的时间格式，以时间的生成文件
            filename: '../logs/server-', //文件名
            pattern: 'yyyy-MM-dd.log', //最终文件名为：server-yyyy-MM-dd.log
            maxLogSize: 10 * 1000 * 1000,
            numBackups: 3,
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {appenders: ['ruleConsole','ruleFile'], level: 'info'}
    },
	replaceConsole: true
});

exports.logger = function(name, level) {
  var logger = log4js.getLogger(name);
  logger.level = level;
  return logger;
}
