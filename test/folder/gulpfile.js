var gulp = require('gulp');
var join = require('path').join;
var lintAll = require('../../index')(join(__dirname, './configs'));
var sources = ['*.js'];
gulp.task('default', lintAll(sources));
