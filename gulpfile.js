
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', function() {
  return gulp.src('scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({"outputStyle": 'expanded'}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', gulp.series('compile'));
});
