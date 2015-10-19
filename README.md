# Hex Color Resolve [![Build Status](https://travis-ci.org/filipelinhares/hex-color-resolve.svg?branch=master)](https://travis-ci.org/filipelinhares/hex-color-resolve)

> Resolve hex colors shorthand.

## Install
```
npm install --save hex-color-resolve
```

## Usage
```js
const hexColorResolve = require('hex-color-resolve');

hexColorResolve('#ff0');
//=> #ffff00

hexColorResolve('#ffff00');
//=> #ff0

hexColorResolve('#c2c2c2')
//=> Error
```

## API
### hexColorResolve(input)

Returns a new color, shorted or long.

#### input

Type: `string`

## License
[MIT](LICENSE.md) © Filipe LInhares
