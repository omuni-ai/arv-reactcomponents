"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isMobile = require("./isMobile");

var _isMobile2 = _interopRequireDefault(_isMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isTouch(e) {
  return ("ontouchstart" in window || "onmsgesturechange" in window) && e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || _isMobile2.default;
}

exports.default = isTouch;