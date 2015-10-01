'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src([
    './scss/*.scss', 
    './scss/extra/*.scss', 
    '!./scss/exclude/*.scss',
  ])
  .pipe(sass({ 
    outputStyle: 'compressed',
    sourceMap: false,
    precision: 5,
    includePaths: [
      './bower_components',
      './scss',
    ]
  }))
  .pipe(gulp.dest('./css'));
});

gulp.task('default', ['sass']);