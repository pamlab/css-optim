var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var csscomb = require('gulp-csscomb');
var clean = require('gulp-clean');

gulp.task('style', function () {
  return gulp.src('./input/*.css')
    .pipe(csscomb())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./output'));
});

gulp.task('clean', function () {
    return gulp.src('./output/*', {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean', 'style']);