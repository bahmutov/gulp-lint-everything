var gulp = require('gulp');
var lintAll = require('./index')({
  jshint: './configs/jshint.json',
  eslint: './configs/eslint.json',
  eslintRulePaths: ['./node_modules/eslint-rules'],
  jscs: './configs/jscs.json'
});
var sources = '*.js';

gulp.task('default', lintAll('*.js'));
