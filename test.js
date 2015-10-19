'use strict';

const test = require('ava');
const hexColorResolve = require('./index');

test('Resolve #ff0 => #ffff00', t => {
  let hexLong = hexColorResolve('#ff0');
  t.same('#ffff00', hexLong);
  t.end();
});

test('Resolve #ffff00 => #ff0', t => {
  let hexShort = hexColorResolve('#ffff00');
  t.same('#ff0', hexShort);
  t.end();
});

