var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('webserver', function () {
    connect.server({
        root: '',
        port: 8080,
        livereload: true
    });
});

gulp.task('reload', ['nunjucks'], function () {
    return gulp.src('')
        .pipe(connect.reload());
});

gulp.task('nunjucks', function () {
    nunjucksRender.nunjucks.configure(['templates/'], {watch: false});

    return gulp.src('templates/index.html')

        .pipe(nunjucksRender())
        .pipe(gulp.dest('.'));
});

gulp.task('pure_reload', function () {
    gulp.src('.')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['templates/**/*.html', 'templates/*.html'], ['reload']);
    gulp.watch(['media/images/*'], ['pure_reload']);
    gulp.watch(['styles/*.scss'], ['sass']);

});

gulp.task('sass', function() {
  return gulp.src('styles/main.scss')
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('styles/'))
      .pipe(connect.reload());
});


gulp.task('default', ['nunjucks', 'watch', 'webserver', 'sass'], function () {

});