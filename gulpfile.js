var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

// These two was the most crucial for me while development

//Connect Taks
gulp.task('connect', function () {
  connect.server({
    port: 8888
  });
});

//Sass and Foundation Task
gulp.task('styles', function(){
  return gulp.src('./app.scss')
  	.pipe(sass()).on('error', function(e) {
      console.log(e);
    })
    .pipe(gulp.dest('./temp'));
});