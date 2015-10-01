'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task('sass', function() {
	gulp.src('./scss/**/*.scss')
			.pipe(sourcemaps.init())
			.pipe(sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError))
			.pipe(sourcemaps.write())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('./css'))
	;
});
