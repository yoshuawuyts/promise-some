const test    = require('tape')
const some     = require('./')
const Promise = require('native-or-bluebird')

test('promise-some should assert input types', function(t) {
  t.plan(1)
  t.throws(some.bind(null, 123))
})

test('promise-some should some a fn', function(t) {
  t.plan(1)
  const res = Promise.resolve([1, 2, 3])
    .then(some(someFn, 0))
    .then(checkFn)
    .catch(handleErr)

  function someFn(val) {
    return val > 2
  }

  function checkFn(val) {
    t.equal(val, true)
  }

  function handleErr() {
    t.fail('catch')
  }
})
