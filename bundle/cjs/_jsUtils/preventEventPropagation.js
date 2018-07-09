"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function preventEventPropagation(e) {
  e.stopPropagation();
}

exports.default = preventEventPropagation;