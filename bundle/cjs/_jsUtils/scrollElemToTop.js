"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getBoundClientRect = require("./getBoundClientRect");

var _getBoundClientRect2 = _interopRequireDefault(_getBoundClientRect);

var _scrollTo = require("./scrollTo");

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollElemToTop(parent, child) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var parentElem = parent;
  var childElem = child;
  if (parentElem && child) {
    var parentVals = (0, _getBoundClientRect2.default)(parentElem);
    var childVals = (0, _getBoundClientRect2.default)(childElem);

    var offsetTop = childVals.bottom - parentVals.bottom + (parentVals.height - childVals.height);
    var offsetLeft = childVals.right - parentVals.right + (parentVals.width - childVals.width);

    var scrollTop = parentElem.scrollTop + offsetTop;
    var scrollLeft = parentElem.scrollLeft + offsetLeft;

    (0, _scrollTo2.default)(parentElem, scrollLeft, scrollTop, duration);
  }
}

exports.default = scrollElemToTop;