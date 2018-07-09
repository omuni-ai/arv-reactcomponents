"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _requestAnimationFrame = require("./requestAnimationFrame");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _cancelAnimationFrame = require("./cancelAnimationFrame");

var _cancelAnimationFrame2 = _interopRequireDefault(_cancelAnimationFrame);

var _windowScroll = require("./windowScroll");

var _windowScroll2 = _interopRequireDefault(_windowScroll);

var _fixScroll = require("./fixScroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getScrollDirection(current, prev) {
  if (prev - current < -5) {
    return "down";
  } else if (prev - current > 5) {
    return "up";
  }

  return "";
}

function onElementScroll(element, callback) {
  var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var elem = element;
  var isWindow = elem === window;
  var prevScroll = 0;

  var requestAnimationFrameId = void 0;
  var onScroll = function onScroll() {
    if (isWindow && (0, _fixScroll.isBodyFixed)()) {
      return;
    }

    (0, _cancelAnimationFrame2.default)(requestAnimationFrameId);
    requestAnimationFrameId = (0, _requestAnimationFrame2.default)(function () {
      var scrollTop = isWindow && (0, _windowScroll2.default)().top || elem.scrollTop;
      callback({
        scrollTop: scrollTop,
        direction: getScrollDirection(scrollTop, prevScroll)
      });

      prevScroll = scrollTop;
    });
  };

  elem.addEventListener("scroll", onScroll, optional);

  return function () {
    elem.removeEventListener("scroll", onScroll, optional);
  };
}

exports.default = onElementScroll;