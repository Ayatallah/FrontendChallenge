var gulp = require('gulp');
var connect = require('gulp-connect');

//Connect Taks
gulp.task('connect', function () {
  connect.server({
    port: 8888
  });
});