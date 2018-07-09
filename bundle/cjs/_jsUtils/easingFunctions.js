"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/danro/jquery-easing/blob/master/jquery.easing.js

var easeInOut = function easeInOut(currentTime, start, change, duration) {
  var currTime = currentTime / (duration / 2);
  if (currTime < 1) {
    return change / 2 * currTime * currTime + start;
  }
  currTime -= 1;
  return -change / 2 * (currTime * (currTime - 2) - 1) + start;
};

exports.default = easeInOut;