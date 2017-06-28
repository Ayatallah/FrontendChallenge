var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

//Connect Taks
gulp.task('connect', function () {
  connect.server({
    port: 8888
  });
});

//Sass and Foundation Task
gulp.task('style', function(){
  return gulp.src('app.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('./style'));
});