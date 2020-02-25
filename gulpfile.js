const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const sassPath = './src/**/*.sass';

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
