'use strict';

var gulp = require('gulp');
// gulp-util - https://www.npmjs.com/package/gulp-util
var gutil = require('gulp-util');

// Minimist - https://www.npmjs.com/package/minimist
var argv = require('minimist')(process.argv);

// gulp-rsync - https://www.npmjs.com/package/gulp-rsync
var rsync = require('rsync-slim');

// gulp-prompt - https://www.npmjs.com/package/gulp-prompt
var prompt = require('gulp-prompt');

// gulp-if - https://www.npmjs.com/package/gulp-if
var gulpif = require('gulp-if');
gulp.task('deploy', function () {
    var rsyncConf = {
        src: 'dist/',
        options: '-rtvhcz --delete --progress',
        log: require('gulp-util').log
    };
    if (argv.production) {
        rsyncConf.dest = 'lebedev@cardiacare.ru:/home/lebedev/public_html';
    } else {
        throwError('deploy', gutil.colors.red('Missing or invalid target'));
    }
    return rsync(rsyncConf);
    /*gulp.src(rsyncConf)
        .pipe(gulpif(
            argv.production,
            prompt.confirm({
                message: 'Heads Up! Are you SURE you want to push to PRODUCTION?',
                default: false
            })
        ))
        .pipe(*/

});
function throwError(taskName, msg) {
    throw new gutil.PluginError({
        plugin: taskName,
        message: msg
    });
}
