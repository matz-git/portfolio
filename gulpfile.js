"use strict";

const gulp        = require('gulp'),
      sass        = require('gulp-sass')(require('sass')),
      cssnano     = require('gulp-cssnano'),
      php         = require('gulp-connect-php'),
      browserSync = require('browser-sync'),
      postcss     = require('gulp-postcss'),
      reload      = browserSync.reload;

gulp.task('test', function() {
    console.log('Hello World!');
});

gulp.task('css', function(){
    return gulp.src('css/*.scss')
        // Use gulp-sass to convert SCSS to CSS
        .pipe(sass())
        .pipe(postcss([
            require('autoprefixer')]))
        // minimize
        .pipe(cssnano())
        // write file to disk
        .pipe(gulp.dest('css'))
        // refresh browser
        .pipe(reload({
                stream: true
            })
        );
});

// Troubleshooting - you should see CLI debug messages for both the
// PHP Development server (port 8000) and BrowserSync (ports 3000 + 3001)
// if PHP's base directory is specified wrong, the whole thing can just hang
gulp.task('default', function() {
    php.server({
        // a standalone PHP server that browsersync connects to via proxy
        port: 8000,
        keepalive: true
    }, function (){
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.watch('**/*.html').on('change', function () {
        reload();
    });
    gulp.watch('**/*.php').on('change', function () {
        reload();
    });

    // the CSS task does it's own reloading
    gulp.watch("css/*.scss", gulp.series('css'));
});