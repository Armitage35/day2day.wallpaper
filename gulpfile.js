// const gulp = require('gulp'),
// 	sass = require('gulp-sass'),
	sassPath = './src/**/*.sass';

// gulp.task('styles', () => {
//     return gulp.src('sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });

// gulp.task('sass', function() {
// 	return gulp.src(sassPath)
// 		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
// 		.pipe(gulp.dest('./src'));
// });

// gulp.task('sass:watch', function() {
// 	gulp.watch(sassPath, ['sass']);
// });

// gulp.task('default', ['sass', 'sass:watch']);


const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

// gulp.task('styles', () => {
//     return gulp.src('./src/**/*.sass')
// 	.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
// 	.pipe(gulp.dest('./src'));
// });

gulp.task('sass', function() {
	return gulp.src(sassPath)
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(gulp.dest('./src'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('default', gulp.series(['clean', 'sass']));
