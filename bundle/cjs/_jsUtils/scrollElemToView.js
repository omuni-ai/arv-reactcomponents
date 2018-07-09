"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getBoundClientRect = require("./getBoundClientRect");

var _getBoundClientRect2 = _interopRequireDefault(_getBoundClientRect);

var _scrollTo = require("./scrollTo");

var _scrollTo2 = _interopRequireDefault(_scrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function scrollElemToView(parent, child) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var parentElem = parent;
  var childElem = child;
  if (parentElem && childElem) {
    var parentVals = (0, _getBoundClientRect2.default)(parentElem);
    var childVals = (0, _getBoundClientRect2.default)(childElem);
    var offsetTop = 0;
    var offsetLeft = 0;

    if (childVals.bottom > parentVals.bottom) {
      offsetTop = childVals.bottom - parentVals.bottom;
    } else if (childVals.top < parentVals.top) {
      offsetTop = childVals.top - parentVals.top;
    }

    if (childVals.right > parentVals.right) {
      offsetLeft = childVals.right - parentVals.right;
    } else if (childVals.left < parentVals.left) {
      offsetLeft = childVals.left - parentVals.left;
    }

    var scrollTop = parentElem.scrollTop + offsetTop;
    var scrollLeft = parentElem.scrollLeft + offsetLeft;

    (0, _scrollTo2.default)(parentElem, scrollLeft, scrollTop, duration);
  }
}

exports.default = scrollElemToView;