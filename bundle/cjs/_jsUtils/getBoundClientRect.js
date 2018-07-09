"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getBoundClientRect(elem) {
  // crossbrowser version
  if (!elem) {
    return null;
  }

  var box = elem.getBoundingClientRect();

  var _document = document,
      body = _document.body,
      documentElement = _document.documentElement;


  var scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;

  var clientTop = documentElement.clientTop || body.clientTop || 0;
  var clientLeft = documentElement.clientLeft || body.clientLeft || 0;

  var top = box.top + (scrollTop - clientTop);
  var left = box.left + (scrollLeft - clientLeft);

  return {
    top: top,
    right: left + box.width,
    bottom: top + box.height,
    left: left,
    width: box.width,
    height: box.height
  };
}

exports.default = getBoundClientRect;