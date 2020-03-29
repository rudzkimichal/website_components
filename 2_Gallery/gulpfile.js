const gulp = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
});

gulp.task("serve", function() {
  browserSync.init(null, {server: {baseDir: './'}
  });
  gulp.watch("./scss/**/*.scss", gulp.series("sass"));
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./js/*.js").on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.init())
    .pipe(
      autoprefixer({
        browsers: ["last 4 versions"]
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

gulp.task("default", gulp.series("serve"));
