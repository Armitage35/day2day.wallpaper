'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/*.sass', ['sass']);
});

gulp.task('default', [ 'sass', 'sass:watch' ]);