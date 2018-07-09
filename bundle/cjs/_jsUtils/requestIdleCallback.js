"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lastTime = 0;
var vendors = ["ms", "moz", "webkit", "o"];
var rAF = window.requestIdleCallback;

if (!rAF) {
  rAF = vendors.find(function (prefix) {
    return window[prefix + "RequestIdleCallback"];
  });
}

if (!rAF) {
  rAF = function rAF(cB) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = setTimeout(function () {
      cB(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function requestIdleCallback(callback) {
  return rAF(callback);
}

exports.default = requestIdleCallback;