var cute = require('cute-stack');
cute.ui.badLine = require('bad-line');
cute('badLine');
var gulp = require('gulp');

var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var size = require('gulp-size');

var log = (function initLog(args) {
  var debugFlags = ['--verbose', '--debug', '-d'];
  var isVerbose = args.some(function (arg) {
    return debugFlags.indexOf(arg) !== -1;
  });
  function noop() {}
  return isVerbose ? console.log.bind(console) : noop;
}(process.argv));

function lintAll(opts) {
  var options = opts || {};

  return function linter(scripts) {
    if (!arguments.length) {
      throw new Error('Nothing to lint!');
    }
    var pipe = gulp.src(scripts)
      .pipe(size());

    if (options.jshint) {
      var jshint = require('gulp-jshint');
      log('jshinting using', options.jshint);
      pipe = pipe
        .pipe(jshint(options.jshint))
        .pipe(jshint.reporter(require('jshint-summary')));
    }
    if (options.eslint) {
      log('eslinting using', options.eslint);
      pipe = pipe
        .pipe(eslint({
          configFile: options.eslint,
          rulePaths: options.eslintRulePaths
        }))
        .pipe(eslint.format());
    }
    if (options.jscs) {
      log('jscs using', options.jscs);
      pipe = pipe
        .pipe(jscs({
          configPath: options.jscs
        }));
    }
    return function () {
      return pipe;
    };
  };

}

module.exports = lintAll;
