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
gulp.task('styles', function(){
  return gulp.src('./app.scss')
  	.pipe(sass()).on('error', function(e) {
      console.log(e);
    })
    .pipe(gulp.dest('./temp'));
});

//Still need test task to automate testing
//Inject task, to include all needed files in index automatically
//Watch task, to watch for any changes
//Clean task, to clean any compiled files
//Build task