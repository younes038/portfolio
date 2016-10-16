var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
	console.log("hello");
	gulp.src('./assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('default', function () {
    gulp.watch('.assets/sass/**/*.scss', ['styles']);
});