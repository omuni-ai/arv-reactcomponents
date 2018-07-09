"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("../constants");

function cancelAnimationFrame(requestId) {
  var cAF = _constants.windowCancelAnimationFrame || _constants.vendorCancelAnimationFrame || clearTimeout;
  return cAF(requestId);
}

exports.default = cancelAnimationFrame;