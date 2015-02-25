var gulp = require('gulp');
var lintAll = require('./index')({
  jshint: './configs/jshint.json',
  eslint: './configs/eslint.json',
  eslintRulePaths: ['./node_modules/eslint-rules'],
  jscs: './configs/jscs.json'
});
gulp.task('default', lintAll('*.js'));
