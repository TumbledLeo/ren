//提前声明好路径常量
var app = {
  srcPath: 'src/',
  distPath: 'dist/'
};


var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('open');



// /////////////////////////server/////////////////////////
gulp.task('server', function () {
  // 设置服务器
  connect.server({
      root: [app.srcPath],//要运行那个目录
      livereload: true,// 是否热更新
      port: 8888 // 端口号
  });

  // 监听哪些任务
  open('http://localhost:8888');
});
gulp.task('default', ['server']);