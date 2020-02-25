const gulp = require("gulp");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const notifier = require('node-notifier');

sass.compiler = require('node-sass');

function showError(err) {
    notifier.notify({
        title: 'Błąd kompilacji',
        message: err.messageFormatted
    });
    console.log(err.messageFormatted);
}

const server = function (cb) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    cb();
}


const css = function () {
    return gulp.src('./scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "expanded"
        }).on('error', showError))
        .pipe(autoprefixer({}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream())
}

const watch = function() {
    gulp.watch("./scss/**/*.scss", gulp.parallel(css));
    gulp.watch("./*.html").on('change', browserSync.reload);
}

exports.css = css;
exports.watch = watch;
exports.server = server;
exports.default = gulp.series(server, css, watch);