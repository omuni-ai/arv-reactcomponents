"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _easingFunctions = require("./easingFunctions");

var _easingFunctions2 = _interopRequireDefault(_easingFunctions);

var _windowScroll = require("./windowScroll");

var _windowScroll2 = _interopRequireDefault(_windowScroll);

var _requestAnimationFrame = require("./requestAnimationFrame");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollTo = function scrollTo(element, toX, toY) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  var elem = element;
  var isWindow = elem === window;
  var startX = void 0;
  var startY = void 0;

  if (isWindow) {
    var windowVals = (0, _windowScroll2.default)();
    startY = windowVals.top;
    startX = windowVals.left;
  } else {
    startY = elem.scrollTop;
    startX = elem.scrollLeft;
  }

  var changeY = toY - startY;
  var changeX = toX - startX;
  var increment = 20;

  var animateScroll = function animateScroll(elapsedTime) {
    var elTime = elapsedTime;
    elTime += increment;
    var positionX = (0, _easingFunctions2.default)(elTime, startX, changeX, duration);
    var positionY = (0, _easingFunctions2.default)(elTime, startY, changeY, duration);
    if (isWindow) {
      elem.scrollTo(positionX, positionY);
    } else {
      elem.scrollTop = positionY;
      elem.scrollLeft = positionX;
    }
    if (elTime < duration) {
      (0, _requestAnimationFrame2.default)(function () {
        animateScroll(elTime);
      });
    }
  };

  if (isWindow && !duration) {
    window.scrollTo(toX, toY);
  } else if (!duration) {
    elem.scrollTop += changeY;
    elem.scrollLeft += changeX;
  } else {
    (0, _requestAnimationFrame2.default)(function () {
      animateScroll(0);
    });
  }
};

exports.default = scrollTo;