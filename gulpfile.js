const gulp = require('gulp');
const gutil = require('gulp-util');
const rename = require("gulp-rename");
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulp.task('log', function () {
    gutil.log('== My Log Task ==')
});

//minify css files
gulp.task('minify-css', () => {
    return gulp
        .src('css/creative.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("css/"));
});

//minify js files
gulp.task('minify-js', function (cb) {
    pump([
        gulp.src('js/creative.js'),
        uglify(),
        rename({suffix: '.min'}),
        gulp.dest('js/')
    ], cb);
});
