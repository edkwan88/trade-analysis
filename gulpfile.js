var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var path = require('path');


//require package.json for our build
var pkg = require('./package.json');
var config = require('./config/build.config.js');

//Concatenate all SCSS files in scss, generate sourcemaps, minify it and output to assets/css/app.min.css
gulp.task('build-css', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.css'))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/css'));
});

// Concatenate all Javascript files in js, generate sourcemaps, minify it and output to assets/js/app.min.js
gulp.task('build-js', function() {
  return gulp.src('js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    // Only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets/js'));
});

