var gulp = require('gulp');
var webserver = require('gulp-webserver');
var stylus = require('gulp-stylus');
var nib = require('nib');
var minifyCSS = require('gulp-minify-css');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var config = {
    styles: {
        main: './src/styles/main.styl',
        watch: './src/styles/**/*.styl',
        output: './build/css'
    },
    html: {
        watch: './build/*.html'
    },
    scripts: {
        main: './src/scripts/main.js',
        watch: './src/script/**/*.js',
        output: './build/js'
    }
}

gulp.task('server', function () {
    gulp.src('./build')
        .pipe(webserver({
            host: '0.0.0.0',
            port: 8080,
            livereload: true
        }));
});

gulp.task('build:css',function () {
    gulp.src(config.styles.main)
        .pipe(stylus({
            use: nib(),
            'include css': true
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest(config.styles.output));
});

gulp.task('build:js',function () {
    return browserify(config.scripts.main)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.output));
});

gulp.task('watch',function () {
    gulp.watch(config.scripts.watch,['build:js']);
    gulp.watch(config.styles.watch,['build:css']);
    gulp.watch(config.html.watch,['build']);
});

gulp.task('build',['build:css','build:js']);

gulp.task('default',['server','watch','build']);
