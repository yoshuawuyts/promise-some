# promise-some
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Check if [some][mdn] element in an array passes the test and return a
[Promise][promise].

## Installation
```bash
$ npm install promise-some
```

## Usage
```js
const some = require('promise-some')

Promise.resolve([1, 2, 3])
  .then(some((val) => val >= 2)))
// => true
```

## Why?
This module is basically equivalent to [`bluebird.some`][bluebird], but it's handy
to have the one function you need instead of a kitchen sink. Modularity!
Especially handy if you're serving to the browser and need to some your
javascript bundle size.

Works great in the browser with
[browserify](http://github.com/substack/node-browserify)!

## See Also
- [promise-each](https://github.com/yoshuawuyts/promise-each)
- [promise-every](https://github.com/yoshuawuyts/promise-every)
- [promise-filter](https://github.com/yoshuawuyts/promise-filter)
- [promise-map](https://github.com/yoshuawuyts/promise-map)
- [promise-reduce](https://github.com/yoshuawuyts/promise-reduce)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/promise-some.svg?style=flat-square
[npm-url]: https://npmjs.org/package/promise-some
[travis-image]: https://img.shields.io/travis/yoshuawuyts/promise-some.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/promise-some
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/promise-some.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/promise-some?branch=master
[downloads-image]: http://img.shields.io/npm/dm/promise-some.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/promise-some

[mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[bluebird]: https://github.com/petkaantonov/bluebird/blob/master/API.md#someint-count---promise
