var cute = require('cute-stack');
cute.ui.badLine = require('bad-line');
cute('badLine');
var gulp = require('gulp');

var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');

function lintAll(options) {
  var options = options || {};

  return function linter(scripts) {
    if (!arguments.length) {
      throw new Error('Nothing to lint!');
    }
    var pipe = gulp.src(scripts);

    if (options.jshint) {
      var jshint = require('gulp-jshint');
      pipe = pipe
        .pipe(jshint(options.jshint))
        .pipe(jshint.reporter(require('jshint-summary')));
    }
    if (options.eslint) {
      pipe = pipe
        .pipe(eslint({
          configFile: options.eslint,
          rulePaths: options.eslintRulePaths
        }))
        .pipe(eslint.format());
    }
    if (options.jscs) {
      pipe = pipe
        .pipe(jscs({
          configPath: options.jscs
        }));
    }
    // runSequence(tasksToRun, callback);

    return function (cb) {
      return pipe;
    };
  };

}

module.exports = lintAll;
