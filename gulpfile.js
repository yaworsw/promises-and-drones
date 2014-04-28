var gulp       = require('gulp');
var nodemon    = require('nodemon');

var browserify = require('gulp-browserify');
var jade       = require('gulp-jade');
var less       = require('gulp-less');

var pkg        = require('./package');

var paths = {
  src: {
    all:            './src/**/*',
    assets:         './src/assets/**/*',
    indexTemplate:  './src/index.jade',
    main:           './src/app/main.js',
    style:          './src/less/style.less'
  }
};

gulp.task('default', ['build']);

gulp.task('build', ['js', 'templates', 'css', 'assets']);

gulp.task('js', function() {
  gulp.src(paths.src.main)
    .pipe(browserify({ }))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('css', function() {
  gulp.src(paths.src.style)
    .pipe(less())
    .pipe(gulp.dest('public/css'));
});

gulp.task('templates', function() {
  gulp.src(paths.src.indexTemplate)
    .pipe(jade({ locals: { pkg: pkg } }))
    .pipe(gulp.dest('./public'));
});

gulp.task('assets', function() {
  gulp.src(paths.src.assets)
    .pipe(gulp.dest('./public/assets'));
});

gulp.task('watch', ['build'], function() {
  gulp.watch(paths.src.all, ['build']);
});
