/* TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions
 or the arguments objects for calls to them.
 Keep commented out until the problem is resolved in cute-stack
 https://github.com/davidmarkclements/cute-stack/issues/8
// var cute = require('cute-stack');
// cute.ui.badLine = require('bad-line');
// cute('badLine');
*/

var gulp = require('gulp');

var eslint = require('gulp-eslint');
var jscs = require('gulp-jscs');
var size = require('gulp-size');
var path = require('path');

var log = (function initLog(args) {
  var debugFlags = ['--verbose', '--debug', '-d'];
  var isVerbose = args.some(function (arg) {
    return debugFlags.indexOf(arg) !== -1;
  });
  function noop() {}
  return isVerbose ? console.log.bind(console) : noop;
}(process.argv));

function findConfigFiles(folder) {
  return {
    jshint: path.join(folder, 'jshint.json'),
    eslint: path.join(folder, 'eslint.json'),
    jscs: path.join(folder, 'jscs.json')
  };
}

function lintAll(opts) {
  var options = opts || {};

  if (typeof opts === 'string' && opts) {
    options = findConfigFiles(opts);
  }

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
