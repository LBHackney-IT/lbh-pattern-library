'use strict';

const gulp     = require('gulp');
const rename   = require('gulp-rename');
const del      = require('del');
var postcss    = require('gulp-postcss');
var atImport   = require('postcss-easy-import');
var presetenv  = require('postcss-preset-env');
var cssnano    = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');
var uglify     = require('gulp-uglify');

const fractal  = require('./fractal.js'); // import the Fractal instance configured in the fractal.js file
const logger = fractal.cli.console;      // make use of Fractal's console object for logging

/*
 * An example of a Gulp task that starts a Fractal development server.
 */

gulp.task('fractal:start', function(){
    const server = fractal.web.server({
        sync: true
    });
    server.on('error', err => logger.error(err.message));
    return server.start().then(() => {
        logger.success(`Fractal server is now running at ${server.urls.sync.local}`);
    });
});

/*
 * An example of a Gulp task that to run a static export of the web UI.
 */

gulp.task('fractal:build', function(){
    const builder = fractal.web.builder();
    builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
    builder.on('error', err => logger.error(err.message));
    return builder.build().then(() => {
        logger.success('Fractal build completed!');
    });
});

/* CSS */

gulp.task('css:process', function () {
    var plugins = [
      atImport()
    ];
    return gulp.src('assets/css/imports.css')
      .pipe(postcss(plugins))
      .pipe(
        postcss([
            presetenv({
                browsers: 'last 2 versions'
            })
        ])
      )
      .pipe(sourcemaps.init())
      .pipe(cssnano())
      .pipe(sourcemaps.write('.', {
        addComment: false
      }))
    //   .pipe(connect.reload())
      .on('error', err => console.log(err.message))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('public/assets/css'))
  });
  
  gulp.task('css:clean', function (done) {
    return del(['public/assets/css/style.css',
                 ''], done);
  });
  
  gulp.task('css', gulp.series('css:clean', 'css:process'));
  
  gulp.task('css:watch', function () {
    gulp.watch([
      'assets/css/*.css',
      'components/**/*.scss'
    ], gulp.series(
      'css'
    ));
  });


/* Fonts */

gulp.task('fonts:copy', function() {
  return gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('fonts:clean', function(done) {
    return del(['public/assets/fonts'], done);
});

gulp.task('fonts', gulp.series('fonts:clean', 'fonts:copy'));

gulp.task('fonts:watch', function() {
    gulp.watch('assets/fonts/**/*', gulp.series('fonts'));
});

/* Images */

gulp.task('images:copy', function() {
  return gulp.src('assets/img/**/*')
    .pipe(gulp.dest('public/assets/img'));
});

gulp.task('images:clean', function(done) {
    return del(['public/assets/img'], done);
});

gulp.task('images', gulp.series('images:clean', 'images:copy'));

gulp.task('images:watch', function() {
    gulp.watch('assets/img/**/*', gulp.series('images'));
});

/* Javascript */

gulp.task('js:process', function () {
    return gulp.src(['assets/js/**/*'])
        .pipe(concat('script.js'))
        .pipe(uglify({
        compress: true
        }))
    //   .pipe(connect.reload())
        .pipe(gulp.dest('public/assets/js'))
});

gulp.task('js:clean', function(done) {
    return del(['public/assets/js'], done);
});

gulp.task('js', gulp.series('js:clean', 'js:process'));

gulp.task('js:watch', function() {
    gulp.watch('assets/js/**/*', gulp.series('js'));
});

gulp.task('default', gulp.parallel('css', 'fonts', 'images', 'js'));
gulp.task('watch', gulp.parallel('css:watch', 'fonts:watch', 'images:watch', 'js:watch'));
gulp.task('dev', gulp.series('default', 'fractal:start', 'watch'));
gulp.task('build', gulp.series('default', 'fractal:build'));