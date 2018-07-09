"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vendors = ["ms", "moz", "webkit", "o"];

var cAF = window.cancelIdleCallback;

if (!cAF) {
  cAF = vendors.find(function (prefix) {
    return window[prefix + "CancelIdleCallback"];
  });
}

if (!cAF) {
  cAF = clearTimeout;
}

function cancelIdleCallback(requestId) {
  cAF(requestId);
}

exports.default = cancelIdleCallback;