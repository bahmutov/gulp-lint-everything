# gulp-lint-everything

> Lint javascript sources using jshint, eslint, jscs, etc.

[![NPM][gulp-lint-everything-icon] ][gulp-lint-everything-url]

[![Build status][gulp-lint-everything-ci-image] ][gulp-lint-everything-ci-url]
[![dependencies][gulp-lint-everything-dependencies-image] ][gulp-lint-everything-dependencies-url]
[![devdependencies][gulp-lint-everything-devdependencies-image] ][gulp-lint-everything-devdependencies-url]

A gulp plugin to run [gulp-lint](https://www.npmjs.com/package/gulp-jshint),
[gulp-eslint](https://www.npmjs.com/package/gulp-eslint) and [gulp-jscs](https://www.npmjs.com/package/gulp-jscs)
via single install and command.

`npm install --save-dev gulp-lint-everything`

Use

If you have a separate config file for each linter plus custom rules for eslint:

```js
var gulp = require('gulp');
var lintAll = require('gulp-lint-everything')({
  jshint: './configs/jshint.json',
  eslint: './configs/eslint.json',
  eslintRulePaths: ['./node_modules/eslint-rules'],
  jscs: './configs/jscs.json'
});
gulp.task('default', lintAll('*.js'));
```

If a config filename is not specified, that linter will be skipped.

## Finding config files

If you pass a single string to the exported function, it will try to find the config files.
Currently assumes the filenames `jshint.json`, `eslint.json` and `jscs.json`.

```js
var lintAll = require('gulp-lint-everything')(__dirname);
```

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/gulp-lint-everything/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[gulp-lint-everything-icon]: https://nodei.co/npm/gulp-lint-everything.png?downloads=true
[gulp-lint-everything-url]: https://npmjs.org/package/gulp-lint-everything
[gulp-lint-everything-ci-image]: https://travis-ci.org/bahmutov/gulp-lint-everything.png?branch=master
[gulp-lint-everything-ci-url]: https://travis-ci.org/bahmutov/gulp-lint-everything
[gulp-lint-everything-dependencies-image]: https://david-dm.org/bahmutov/gulp-lint-everything.png
[gulp-lint-everything-dependencies-url]: https://david-dm.org/bahmutov/gulp-lint-everything
[gulp-lint-everything-devdependencies-image]: https://david-dm.org/bahmutov/gulp-lint-everything/dev-status.png
[gulp-lint-everything-devdependencies-url]: https://david-dm.org/bahmutov/gulp-lint-everything#info=devDependencies
