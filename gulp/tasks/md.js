'use strict';

// Necessary Plugins
var gulp          = require('gulp')
    ,plumber      = require('gulp-plumber')
    ,paths        = require('../paths')
    ,uglify       = require('gulp-uglify');

// Call Uglify and Concat JS
module.exports = gulp.task('md', function(){
  return gulp.src(paths.source.md)
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.md))
});
