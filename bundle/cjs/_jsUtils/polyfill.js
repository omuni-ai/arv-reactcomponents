"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestAnimationFrame = require("./requestAnimationFrame");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _cancelAnimationFrame = require("./cancelAnimationFrame");

var _cancelAnimationFrame2 = _interopRequireDefault(_cancelAnimationFrame);

var _requestIdleCallback = require("./requestIdleCallback");

var _requestIdleCallback2 = _interopRequireDefault(_requestIdleCallback);

var _cancelIdleCallback = require("./cancelIdleCallback");

var _cancelIdleCallback2 = _interopRequireDefault(_cancelIdleCallback);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function polyfill() {
  window.requestAnimationFrame = _requestAnimationFrame2.default;
  window.cancelAnimationFrame = _cancelAnimationFrame2.default;
  window.requestIdleCallback = _requestIdleCallback2.default;
  window.cancelIdleCallback = _cancelIdleCallback2.default;
}

exports.default = polyfill;