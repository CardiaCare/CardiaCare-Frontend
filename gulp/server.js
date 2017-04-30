'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var util = require('util');

var browserSync = require('browser-sync');

var middleware = require('./proxy');

var templateCache = require('gulp-angular-templatecache');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

function browserSyncInit(baseDir, files, browser) {
    browser = browser === undefined ? 'default' : browser;

    var routes = null;
    if (baseDir === paths.src || (util.isArray(baseDir) && baseDir.indexOf(paths.src) !== -1)) {
        routes = {
            '/bower_components': 'bower_components'
        };
    }

    browserSync.instance = browserSync.init(files, {
        startPath: '/',
        server: {
            baseDir: baseDir,
            middleware: middleware,
            routes: routes
        },
        browser: browser
    });
}

gulp.task('partials', function () {
    return gulp.src([
        paths.src + '/{app,components}/**/*.html',
        paths.tmp + '/{app,components}/**/*.html'
    ])
        .pipe($.minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(templateCache("templateCacheHtml.js", {
            module: 'angularMaterialCardiaCare'
        }))
        .pipe(gulp.dest(paths.tmp + '/serve/partials/'));
});

gulp.task('serve', ['watch', 'partials'], function () {
    browserSyncInit([
        paths.tmp + '/serve',
        paths.src
    ], [
        paths.tmp + '/serve/{app,components}/**/*.css',
        paths.src + '/{app,components}/**/*.js',
        paths.src + 'src/assets/images/**/*',
        paths.tmp + '/serve/*.html',
        paths.tmp + '/serve/{app,components}/**/*.html',
        paths.src + '/{app,components}/**/*.html'
    ]);
});

gulp.task('serve:dist', ['build'], function () {
    browserSyncInit(paths.dist);
});

gulp.task('serve:e2e', ['inject'], function () {
    browserSyncInit([paths.tmp + '/serve', paths.src], null, []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
    browserSyncInit(paths.dist, null, []);
});
