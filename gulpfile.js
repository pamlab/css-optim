var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('default', function () {
  return gulp.src('./input/*')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./output'));
});