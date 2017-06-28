var gulp = require('gulp');
var connect = require('gulp-connect');

//Connect Taks
gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});