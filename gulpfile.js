'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./stylesheets/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/build/css'));
});

gulp.task('watch',['build'], function () {
    gulp.watch('./stylesheets/**/*.scss', ['sass']);
});

gulp.task('build', ['sass']);