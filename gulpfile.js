'use-strict';

// including required modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var brwSync = require('browser-sync');

// defines paths for scss
var scss = {
	src: './assets/sass',
	files: './assets/sass/**/*.scss',
	dest: './assets/css'
}

// handles task for scss
gulp.task('styles', function () {
	return gulp.src(scss.files)
		.pipe(sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(scss.dest))
		.pipe(brwSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', function() {
	brwSync.init({
		server: "./"
	});

	gulp.watch('*.html').on('change', brwSync.reload);
});

// launches automatically after modifications
gulp.task('default', function () {
	gulp.watch(scss.files, ['styles']);
	gulp.start(['serve']);
});