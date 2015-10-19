'use strict';

var REGEXP = {
  SHORT: /^#[0-9a-f]{3}$/ig,
  LONG: /^#[0-9a-f]{6}$/ig,
  IS_SHORTABLE: /(.)\1{1}/ig
};

function _trimHash(color) {
  return color.replace('#', '');
}

function _isShortable(color) {
  var colorArray = color.split('');
  if (colorArray[0] === colorArray[1] &&
      colorArray[2] === colorArray[3] &&
      colorArray[4] === colorArray[5]) {
    return true;
  }
  return false;
}

module.exports = function (hexa) {
  var color = _trimHash(hexa);
  var colorArray = color.split('');
  var resolved = ['#'];

  if (REGEXP.SHORT.test(hexa)) {
    resolved.push(colorArray[0]);
    resolved.push(colorArray[0]);
    resolved.push(colorArray[1]);
    resolved.push(colorArray[1]);
    resolved.push(colorArray[2]);
    resolved.push(colorArray[2]);
  } else if (REGEXP.LONG.test(hexa) && _isShortable(color)) {
    resolved.push(colorArray[0]);
    resolved.push(colorArray[2]);
    resolved.push(colorArray[4]);
  } else {
    throw new Error(hexa + ' isn\'t a valid hexadecimal value that can be shortable!');
  }
  return resolved.join('');
};

