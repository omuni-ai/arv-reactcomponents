"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var windowScroll = function windowScroll() {
  var doc = document.documentElement;

  var windowScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  var windowScrollLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  var windowScrollBottom = windowScrollTop + window.innerHeight;
  var windowScrollRight = windowScrollLeft + window.innerWidth;

  return {
    top: windowScrollTop,
    right: windowScrollRight,
    bottom: windowScrollBottom,
    left: windowScrollLeft
  };
};

exports.default = windowScroll;