"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("../constants");

var lastTime = 0;

var customFn = function customFn(cB) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = setTimeout(function () {
    cB(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

function requestAnimationFrame(callback) {
  var rAF = _constants.windowRequestAnimationFrame || _constants.requestAnimationFrameVendor || customFn;
  return rAF(callback);
}

exports.default = requestAnimationFrame;