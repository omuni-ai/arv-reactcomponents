'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {
  return undefined;
};

// Code from http://detectmobilebrowsers.com/

/* eslint-disable */
var isMobile = function (a, b) {
  /* istanbul ignore next */
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
    return true;
  }

  return false;
}(
/* istanbul ignore next */
navigator.userAgent || navigator.vendor || window.opera);

function isTouch(e) {
  return ("ontouchstart" in window || "onmsgesturechange" in window) && e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents || isMobile;
}

var screenMedia = {
  lg: 1200,
  md: 992,
  sm: 768
};
var isMobile$1 = window.innerWidth <= 768;
var localStorage = "localStorage" in window && window.localStorage || null;
var windowRequestAnimationFrame = window.requestAnimationFrame;
var windowCancelAnimationFrame = window.cancelAnimationFrame;
var vendorsPrefixes = ["ms", "moz", "webkit", "o"];
var vendorRequestAnimationFrame = vendorsPrefixes.find(function (prefix) {
  return window["".concat(prefix, "RequestAnimationFrame")];
});
var vendorCancelAnimationFrame = vendorsPrefixes.find(function (prefix) {
  return window["".concat(prefix, "CancelAnimationFrame")] || window["".concat(prefix, "CancelRequestAnimationFrame")];
});

var lastTime = 0;

var customFn = function customFn(cB) {
  var currTime = new Date().getTime();
  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
  var id = setTimeout(function () {
    cB(currTime + timeToCall);
  }, timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

function requestAnimationFrame$1(callback) {
  var rAF = windowRequestAnimationFrame || vendorRequestAnimationFrame || customFn;
  return rAF(callback);
}

function cancelAnimationFrame$1(requestId) {
  var cAF = windowCancelAnimationFrame || vendorCancelAnimationFrame || clearTimeout;
  return cAF(requestId);
}

var lastTime$1 = 0;
var vendors = ["ms", "moz", "webkit", "o"];
var rAF = window.requestIdleCallback;

if (!rAF) {
  rAF = vendors.find(function (prefix) {
    return window["".concat(prefix, "RequestIdleCallback")];
  });
}

if (!rAF) {
  rAF = function rAF(cB) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime$1));
    var id = setTimeout(function () {
      cB(currTime + timeToCall);
    }, timeToCall);
    lastTime$1 = currTime + timeToCall;
    return id;
  };
}

function requestIdleCallback(callback) {
  return rAF(callback);
}

var vendors$1 = ["ms", "moz", "webkit", "o"];
var cAF = window.cancelIdleCallback;

if (!cAF) {
  cAF = vendors$1.find(function (prefix) {
    return window["".concat(prefix, "CancelIdleCallback")];
  });
}

if (!cAF) {
  cAF = clearTimeout;
}

function cancelIdleCallback(requestId) {
  cAF(requestId);
}

function polyfill() {
  window.requestAnimationFrame = requestAnimationFrame$1;
  window.cancelAnimationFrame = cancelAnimationFrame$1;
  window.requestIdleCallback = requestIdleCallback;
  window.cancelIdleCallback = cancelIdleCallback;
}

function isTextInput(node) {
  return ["INPUT"].indexOf(node.nodeName) !== -1;
}

function addInputBlurForIOS(e) {
  if (!isTextInput(e.target) && isTextInput(document.activeElement)) {
    document.activeElement.blur();
  }
}

// https://github.com/danro/jquery-easing/blob/master/jquery.easing.js
var easeInOut = function easeInOut(currentTime, start, change, duration) {
  var currTime = currentTime / (duration / 2);

  if (currTime < 1) {
    return change / 2 * currTime * currTime + start;
  }

  currTime -= 1;
  return -change / 2 * (currTime * (currTime - 2) - 1) + start;
};

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

var scrollTo = function scrollTo(element, toX, toY) {
  var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var elem = element;
  var isWindow = elem === window;
  var startX;
  var startY;

  if (isWindow) {
    var windowVals = windowScroll();
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
    var positionX = easeInOut(elTime, startX, changeX, duration);
    var positionY = easeInOut(elTime, startY, changeY, duration);

    if (isWindow) {
      elem.scrollTo(positionX, positionY);
    } else {
      elem.scrollTop = positionY;
      elem.scrollLeft = positionX;
    }

    if (elTime < duration) {
      requestAnimationFrame$1(function () {
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
    requestAnimationFrame$1(function () {
      animateScroll(0);
    });
  }
};

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

function scrollElemToView(parent, child) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var parentElem = parent;
  var childElem = child;

  if (parentElem && childElem) {
    var parentVals = getBoundClientRect(parentElem);
    var childVals = getBoundClientRect(childElem);
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
    scrollTo(parentElem, scrollLeft, scrollTop, duration);
  }
}

function scrollElemToTop(parent, child) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var parentElem = parent;
  var childElem = child;

  if (parentElem && child) {
    var parentVals = getBoundClientRect(parentElem);
    var childVals = getBoundClientRect(childElem);
    var offsetTop = childVals.bottom - parentVals.bottom + (parentVals.height - childVals.height);
    var offsetLeft = childVals.right - parentVals.right + (parentVals.width - childVals.width);
    var scrollTop = parentElem.scrollTop + offsetTop;
    var scrollLeft = parentElem.scrollLeft + offsetLeft;
    scrollTo(parentElem, scrollLeft, scrollTop, duration);
  }
}

var _window = window,
    scrollY = _window.scrollY;
var bodyFixedState = false;

function fixScroll() {
  var _window2 = window;
  scrollY = _window2.scrollY;
  setTimeout(function () {
    var bodyElem = document.querySelector("body");
    bodyElem.classList.toggle("nwc-hide-scrollbar", true);
    bodyElem.style.top = "-".concat(scrollY, "px");
    bodyFixedState = true;
  }, 0, false);
}

function unFixScroll() {
  var bodyElem = document.querySelector("body");
  bodyElem.classList.toggle("nwc-hide-scrollbar", false);
  bodyElem.style.top = null;

  if (scrollY) {
    window.scrollTo(0, scrollY);
  }

  setTimeout(function () {
    bodyFixedState = false;
  }, 0, false);
}

function isBodyFixed() {
  return bodyFixedState;
}

function preventEventPropagation(e) {
  e.stopPropagation();
}

function preventDefault(e) {
  e.preventDefault();
}

function Input(props, propName) {
  var CheckFor = {
    text: ["value", "placeholder"],
    checkbox: ["value", "name", "checked"],
    radio: ["value", "name", "checked"]
  };

  if (CheckFor[props.type] && CheckFor[props.type].indexOf(propName) !== -1 && props[propName] === null) {
    /* istanbul ignore next */
    return new Error("Missed `".concat(propName, "` prop on input type ").concat(props.type));
  }

  return null;
}

var customPropTypes = {
  Input: Input
};

/* eslint-disable */

var getItem = function getItem(key) {
  if (localStorage) {
    if (!localStorage[key]) {
      return null;
    }

    var objectWithTime = JSON.parse(localStorage[key]);
    return objectWithTime.content;
  }
};

var setItem = function setItem(key, value) {
  if (localStorage) {
    var objectWithTime = {
      content: value,
      timestamp: new Date()
    };
    localStorage[key] = JSON.stringify(objectWithTime);
  }
};

var removeItem = function removeItem(key) {
  if (localStorage) {
    if (!localStorage[key]) return;
    delete localStorage[key];
  }
};

var obj = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem
};
//   var key;
//   if (ObjectPassed) {
//     /*if we dont have key in constant or jenkins we will not store in Cache
//     *  if (!key || !env.expirationTimeForCachingApi.key) return;*/
//     for (key in ObjectPassed) {
//       self.removeItem(ObjectPassed[key]);
//     }
//     return;
//   }
//   for (key in localStorage) {
//     self.removeItem(key);
//   }
// };

function getScrollDirection(current, prev) {
  if (prev - current < -5) {
    return "down";
  }

  if (prev - current > 5) {
    return "up";
  }

  return "";
}

function onElementScroll(element, callback) {
  var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var elem = element;
  var isWindow = elem === window;
  var prevScroll = 0;
  var requestAnimationFrameId;

  var onScroll = function onScroll() {
    if (isWindow && isBodyFixed()) {
      return;
    }

    cancelAnimationFrame$1(requestAnimationFrameId);
    requestAnimationFrameId = requestAnimationFrame$1(function () {
      var scrollTop = isWindow && windowScroll().top || elem.scrollTop;
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

function onElementResize(element, callback) {
  var optional = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var elem = element;
  var requestAnimationFrameId;

  var onResize = function onResize() {
    cancelAnimationFrame$1(requestAnimationFrameId);
    requestAnimationFrameId = requestAnimationFrame$1(callback);
  };

  elem.addEventListener("resize", onResize, optional);
  return function () {
    elem.removeEventListener("resize", onResize, optional);
  };
}

var getUrlParameter = function getUrlParameter(url, name) {
  var replacedName = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]".concat(replacedName, "=([^&#]*)"));
  var results = regex.exec(url);
  return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var setUrlParameter = function setUrlParameter(url, name, value) {
  var regex = new RegExp("([?&])".concat(name, "=.*?(&|$)"), "i");
  var separator = url.indexOf("?") !== -1 ? "&" : "?";

  if (url.match(regex)) {
    return url.replace(regex, "$1".concat(name, "=").concat(value, "$2"));
  }

  return "".concat(url).concat(separator).concat(name, "=").concat(value);
};

var Utils = {
  noop: noop,
  isMobile: isMobile,
  isTouch: isTouch,
  polyfill: polyfill,
  addInputBlurForIOS: addInputBlurForIOS,
  easeInOut: easeInOut,
  scrollTo: scrollTo,
  getBoundClientRect: getBoundClientRect,
  scrollElemToView: scrollElemToView,
  scrollElemToTop: scrollElemToTop,
  fixScroll: fixScroll,
  unFixScroll: unFixScroll,
  isBodyFixed: isBodyFixed,
  preventEventPropagation: preventEventPropagation,
  preventDefault: preventDefault,
  requestAnimationFrame: requestAnimationFrame$1,
  cancelAnimationFrame: cancelAnimationFrame$1,
  requestIdleCallback: requestIdleCallback,
  cancelIdleCallback: cancelIdleCallback,
  customPropTypes: customPropTypes,
  windowScroll: windowScroll,
  localStorage: obj,
  onElementScroll: onElementScroll,
  onElementResize: onElementResize,
  getUrlParameter: getUrlParameter,
  setUrlParameter: setUrlParameter
};

var Ripple =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Ripple, _PureComponent);

  function Ripple(props) {
    var _this;

    _classCallCheck(this, Ripple);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ripple).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.modifyChildren = _this.modifyChildren.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Ripple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "modifyChildren",
    value: function modifyChildren(child) {
      var _this2 = this;

      var onClickFn = child.props.onClick || Utils.noop;
      var wrappedElement = React__default.createElement(React.Fragment, null, child.props.children, React__default.createElement("span", {
        className: "nwc-ripple ".concat(this.props.className),
        ref: function ref(context) {
          _this2.rippleRef = context;
        }
      }));
      var clonedElement = React.cloneElement(child, {
        className: "nwc-ripple-container ".concat(child.props.className),
        children: wrappedElement,
        onClick: function onClick(e) {
          _this2.handleClick(e);

          onClickFn(e);
        }
      });
      return clonedElement;
    }
  }, {
    key: "toggleRippleClass",
    value: function toggleRippleClass(bool) {
      this.rippleRef.classList.toggle("is-active", bool);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this3 = this;

      var componentRef = this.rippleRef.parentElement;
      var parentClientRect = Utils.getBoundClientRect(componentRef);
      var child = this.rippleRef;
      var rippleWH = Math.max(parentClientRect.width, parentClientRect.height);
      child.style.height = "".concat(rippleWH, "px");
      child.style.width = "".concat(rippleWH, "px");
      var x = e.pageX - parentClientRect.left - rippleWH / 2;
      var y = e.pageY - parentClientRect.top - rippleWH / 2;
      child.style.left = "".concat(x, "px");
      child.style.top = "".concat(y, "px");
      this.toggleRippleClass(false);
      this.timeoutId = setTimeout(function () {
        _this3.toggleRippleClass(true);
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return React__default.Children.map(this.props.children, this.modifyChildren);
    }
  }]);

  return Ripple;
}(React.PureComponent);

Ripple.defaultProps = {
  className: ""
};
Ripple.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired
};

function Button(props) {
  var className = props.className,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ["className", "children"]);

  return React__default.createElement("button", _extends({
    type: "button",
    className: "nwc-btn ".concat(className),
    tabIndex: "0"
  }, otherProps), children);
}

Button.defaultProps = {
  className: ""
};
Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired
};

var Close =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Close, _PureComponent);

  function Close() {
    _classCallCheck(this, Close);

    return _possibleConstructorReturn(this, _getPrototypeOf(Close).apply(this, arguments));
  }

  _createClass(Close, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          otherProps = _objectWithoutProperties(_this$props, ["className"]);

      return React__default.createElement(Button, _extends({
        className: "nwc-close ".concat(className)
      }, otherProps), "\xA0");
    }
  }]);

  return Close;
}(React.PureComponent);

Close.defaultProps = {
  className: ""
};
Close.propTypes = {
  className: PropTypes.string
};

var GridContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GridContainer, _PureComponent);

  function GridContainer() {
    _classCallCheck(this, GridContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridContainer).apply(this, arguments));
  }

  _createClass(GridContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var childNodes = this.containerRef.childNodes;

      var arrayOfChildNodes = _toConsumableArray(childNodes);

      Utils.requestAnimationFrame(function () {
        arrayOfChildNodes.forEach(function (item) {
          if (!/(^|\s)nwc-grid-row($|[\s])/.test(item.className)) {
            throw Error("`GridContainer` component must have `GridRow` as child");
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          strict = _this$props.strict,
          children = _this$props.children,
          otherProps = _objectWithoutProperties(_this$props, ["className", "strict", "children"]);

      return React__default.createElement("div", _extends({
        className: "nwc-grid-container ".concat(this.classNameForStrict, " ").concat(className)
      }, otherProps, {
        ref: function ref(context) {
          _this.containerRef = context;
        }
      }), children);
    }
  }, {
    key: "classNameForStrict",
    get: function get() {
      return this.props.strict ? "nwc-grid-container-strict" : "";
    }
  }]);

  return GridContainer;
}(React.PureComponent);

GridContainer.defaultProps = {
  className: "",
  strict: false // children: undefined,

};
GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.shape({
  //     type: PropTypes.oneOf([GridRow]),
  //   }),
  //   PropTypes.arrayOf(PropTypes.shape({
  //     type: PropTypes.oneOf([GridRow]),
  //   })),
  // ]),
  strict: PropTypes.bool
};

var GridRow =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GridRow, _PureComponent);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridRow).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var childNodes = this.rowRef.childNodes;

      var arrayOfChildNodes = _toConsumableArray(childNodes);

      Utils.requestAnimationFrame(function () {
        arrayOfChildNodes.forEach(function (item) {
          if (!/(^|\s)nwc-grid-col($|[\s])/.test(item.className)) {
            throw Error("`GridRow` component must have `GridColumn` as child");
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          otherProps = _objectWithoutProperties(_this$props, ["className", "children"]);

      return React__default.createElement("div", _extends({
        className: "nwc-grid-row ".concat(className)
      }, otherProps, {
        ref: function ref(context) {
          _this.rowRef = context;
        }
      }), children);
    }
  }]);

  return GridRow;
}(React.PureComponent);

GridRow.defaultProps = {
  className: ""
};
GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]).isRequired
};

var GridColumn =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(GridColumn, _PureComponent);

  function GridColumn() {
    _classCallCheck(this, GridColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridColumn).apply(this, arguments));
  }

  _createClass(GridColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var childNodes = this.colRef.childNodes;

      var arrayOfChildNodes = _toConsumableArray(childNodes);

      Utils.requestAnimationFrame(function () {
        arrayOfChildNodes.forEach(function (item) {
          if (/(^|\s)nwc-grid-col($|[\s])/.test(item.className)) {
            throw Error("`GridColumn` cannot have `GridColumn` as immediate child. \n            Use `GridRow` inbetween when nesting two columns.");
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          otherProps = _objectWithoutProperties(_this$props, ["className", "children"]);

      return React__default.createElement("div", _extends({
        className: "nwc-grid-col ".concat(className)
      }, otherProps, {
        ref: function ref(context) {
          _this.colRef = context;
        }
      }), children);
    }
  }]);

  return GridColumn;
}(React.PureComponent);

GridColumn.defaultProps = {
  className: ""
};
GridColumn.propTypes = {
  className: PropTypes.string,
  // eslint-disable-line react/no-typos
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.string]).isRequired
};

function Img(props) {
  var className = props.className,
      src = props.src,
      alt = props.alt,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = _objectWithoutProperties(props, ["className", "src", "alt", "onLoad", "onError"]);

  return React__default.createElement("img", _extends({
    className: "nwc-img ".concat(className),
    src: src,
    alt: alt,
    onLoad: onLoad,
    onError: onError
  }, otherProps));
}

Img.defaultProps = {
  className: "",
  alt: "",
  src: null,
  onLoad: Utils.noop,
  onError: Utils.noop
};
Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
(function() {

// Exit early if we're not running in a browser.
if (typeof window !== 'object') {
  return;
}

// Exit early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * A local reference to the document.
 */
var document = window.document;


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }

  if (parent && parent.assignedSlot) {
    // If the parent is distributed in a <slot>, return the parent of a slot.
    return parent.assignedSlot.parentNode;
  }

  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}());

var _bypass = false;

var LazyImg =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(LazyImg, _PureComponent);

  _createClass(LazyImg, null, [{
    key: "bypass",
    value: function bypass() {
      _bypass = true;
    }
  }, {
    key: "allow",
    value: function allow() {
      _bypass = false;
    }
  }]);

  function LazyImg(props) {
    var _this;

    _classCallCheck(this, LazyImg);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LazyImg).call(this, props));
    _this.state = {
      inView: false,
      isLoaded: false,
      isError: false
    };
    var observerOptions = {
      root: props.parentElement,
      rootMargin: "".concat(props.rootMargin),
      threshold: props.threshold
    };
    _this.onLoad = _this.onLoad.bind(_assertThisInitialized(_this));
    _this.onError = _this.onError.bind(_assertThisInitialized(_this));
    _this.setContext = _this.setContext.bind(_assertThisInitialized(_this));
    _this.intersectionCallback = _this.intersectionCallback.bind(_assertThisInitialized(_this));

    if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) {
      _this.observer = new IntersectionObserver(_this.intersectionCallback, observerOptions);
    } else {
      _bypass = true;
    }

    return _this;
  }

  _createClass(LazyImg, [{
    key: "onLoad",
    value: function onLoad() {
      this.setState({
        isLoaded: true
      });
      this.props.onLoad();
    }
  }, {
    key: "onError",
    value: function onError() {
      this.setState({
        isError: true
      });

      if (!_bypass) {
        this.props.onError();
      }
    }
  }, {
    key: "setContext",
    value: function setContext(context) {
      this.imgContainerRef = context;
      var onWinLoad = this.props.onWinLoad;

      if (!_bypass && !onWinLoad) {
        this.observer.observe(context);
      }
    }
  }, {
    key: "intersectionCallback",
    value: function intersectionCallback(entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          _this2.observer.unobserve(entry.target);

          window.requestIdleCallback(function () {
            _this2.setState({
              inView: true
            });
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onWinLoad = _this$props.onWinLoad,
          index = _this$props.index,
          className = _this$props.className,
          src = _this$props.src,
          alt = _this$props.alt,
          onLoad = _this$props.onLoad,
          onError = _this$props.onError,
          rootMargin = _this$props.rootMargin,
          threshold = _this$props.threshold,
          parentElement = _this$props.parentElement,
          otherProps = _objectWithoutProperties(_this$props, ["onWinLoad", "index", "className", "src", "alt", "onLoad", "onError", "rootMargin", "threshold", "parentElement"]);

      return React__default.createElement("div", _extends({
        className: "nwc-lazyimg-container ".concat(className),
        ref: this.setContext
      }, otherProps), this.imgTagIfInView);
    }
  }, {
    key: "imgStateClassName",
    get: function get() {
      return (_bypass || this.state.isLoaded) && "is-loaded" || this.state.isError && "is-error" || "";
    }
  }, {
    key: "imgTagIfInView",
    get: function get() {
      var _this$props2 = this.props,
          src = _this$props2.src,
          alt = _this$props2.alt,
          onWinLoad = _this$props2.onWinLoad;
      var inView = this.state.inView;

      if (_bypass || onWinLoad || inView) {
        return React__default.createElement("img", {
          className: "nwc-lazyimg ".concat(this.imgStateClassName),
          src: src,
          alt: alt,
          onLoad: this.onLoad,
          onError: this.onError
        });
      }

      return null;
    }
  }]);

  return LazyImg;
}(React.PureComponent);

LazyImg.defaultProps = {
  onWinLoad: false,
  className: "",
  alt: "",
  src: null,
  onLoad: Utils.noop,
  onError: Utils.noop,
  parentElement: null,
  rootMargin: 0,
  threshold: [0.1]
};
LazyImg.propTypes = {
  onWinLoad: PropTypes.bool,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  parentElement: PropTypes.shape({}),
  rootMargin: PropTypes.number,
  threshold: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
};

function Label(props) {
  var htmlFor = props.htmlFor,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ["htmlFor", "children"]);

  return React__default.createElement("label", _extends({
    htmlFor: htmlFor
  }, otherProps), React__default.createElement("input", {
    type: "hidden"
  }), children);
}

Label.defaultProps = {
  children: ""
};
Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node
};

function restrictVal(value, type, maxLength) {
  var newValue = value;

  switch (type) {
    case "number":
      if (maxLength) {
        return newValue.slice(0, maxLength);
      }

      return newValue;

    default:
      return newValue;
  }
}

function validateValue(value, validateWithPattern) {
  var errorObj = {
    isValid: true,
    errorMsg: ""
  };

  if (!Array.isArray(validateWithPattern)) {
    return errorObj;
  }

  validateWithPattern.find(function (item) {
    if (!item.pattern.test(value)) {
      errorObj.isValid = false;
      errorObj.errorMsg = item.msg;
      return true;
    }

    return false;
  });
  return errorObj;
}

var Input$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.getValidatedOutput = _this.getValidatedOutput.bind(_assertThisInitialized(_this));
    _this.inputId = "".concat(Math.round(Math.random() * Math.pow(10, 10)));
    return _this;
  }

  _createClass(Input, [{
    key: "getValidatedOutput",
    value: function getValidatedOutput(value) {
      var _this$props = this.props,
          type = _this$props.type,
          maxLength = _this$props.maxLength,
          validateWithPattern = _this$props.validateWithPattern;
      var newValue = restrictVal(value, type, maxLength);
      var isValidObj = validateValue(newValue, validateWithPattern);
      var isValid = isValidObj.isValid,
          errorMsg = isValidObj.errorMsg;
      return {
        value: newValue,
        isValid: isValid,
        errorMsg: errorMsg
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          type = _this$props2.type,
          inputRef = _this$props2.inputRef,
          validateWithPattern = _this$props2.validateWithPattern,
          otherProps = _objectWithoutProperties(_this$props2, ["id", "className", "type", "inputRef", "validateWithPattern"]);

      if (!this.isCheckTypes) {
        return React__default.createElement("input", _extends({
          id: id || this.inputId,
          className: "nwc-inp  ".concat(className),
          type: type,
          tabIndex: "0",
          ref: inputRef
        }, otherProps));
      }

      return React__default.createElement(Label, {
        className: "nwc-inp-container",
        htmlFor: id || this.inputId
      }, React__default.createElement("span", {
        className: "nwc-inp-hiddenwrapper"
      }, React__default.createElement("input", _extends({
        id: id || this.inputId,
        type: type,
        tabIndex: "0",
        ref: inputRef
      }, otherProps))), React__default.createElement("i", {
        className: "".concat(this.cloneClassName)
      }));
    }
  }, {
    key: "cloneClassName",
    get: function get() {
      var _this$props3 = this.props,
          type = _this$props3.type,
          checked = _this$props3.checked,
          disabled = _this$props3.disabled,
          className = _this$props3.className;
      var isCheckedClass = checked ? "is-checked" : "";
      var isDisabled = disabled ? "is-disabled" : "";
      var additionalClasses = "".concat(className, " ").concat(isCheckedClass, " ").concat(isDisabled);

      switch (type) {
        case "checkbox":
          return "nwc-inp-checkbox ".concat(additionalClasses);

        case "radio":
          return "nwc-inp-radio ".concat(additionalClasses);

        /* istanbul ignore next */

        default:
          return "";
      }
    }
  }, {
    key: "isCheckTypes",
    get: function get() {
      var type = this.props.type;

      switch (type) {
        case "checkbox":
        case "radio":
          return true;

        default:
          return false;
      }
    }
  }]);

  return Input;
}(React.PureComponent);

Input$1.defaultProps = {
  id: null,
  name: null,
  className: "",
  type: "text",
  placeholder: null,
  value: null,
  checked: null,
  maxLength: null,
  inputRef: Utils.noop,
  disabled: false,
  validateWithPattern: null
};
Input$1.propTypes = {
  id: PropTypes.string,
  name: Utils.customPropTypes.Input,
  // eslint-disable-line react/no-typos
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: Utils.customPropTypes.Input,
  // eslint-disable-line react/no-typos
  value: Utils.customPropTypes.Input,
  // eslint-disable-line react/no-typos
  checked: Utils.customPropTypes.Input,
  // eslint-disable-line react/no-typos
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  inputRef: PropTypes.func,
  disabled: PropTypes.bool,
  validateWithPattern: PropTypes.arrayOf(PropTypes.shape({
    pattern: PropTypes.instanceOf(RegExp),
    msg: PropTypes.string
  }))
};

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));
    _this.state = {
      selectedListIndex: props.selectedIndex,
      isActive: false
    };
    _this.navigateTimeoutId = null;
    _this.listNode = [];
    _this.listNodeItem = [];
    _this.renderInput = _this.renderInput.bind(_assertThisInitialized(_this));
    _this.renderListItems = _this.renderListItems.bind(_assertThisInitialized(_this));
    _this.toggleDisplay = _this.toggleDisplay.bind(_assertThisInitialized(_this));
    _this.selectAndHideList = _this.selectAndHideList.bind(_assertThisInitialized(_this));
    _this.onUserInput = _this.onUserInput.bind(_assertThisInitialized(_this));
    _this.scrollHighlightedElemInView = _this.scrollHighlightedElemInView.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "onUserInput",
    value: function onUserInput(e) {
      var _this2 = this;

      Utils.preventEventPropagation(e);
      var listNodeLength = Object.keys(this.listNode).length - 1;
      var isActive = true;
      var selectedListIndex = this.state.selectedListIndex;

      switch (e.key) {
        case "ArrowUp":
          Utils.preventDefault(e);
          selectedListIndex = this.state.selectedListIndex > 0 ? this.state.selectedListIndex - 1 : listNodeLength;
          break;

        case "ArrowDown":
          selectedListIndex = listNodeLength !== 0 && this.state.selectedListIndex < listNodeLength ? this.state.selectedListIndex + 1 : 0;
          break;

        case "ArrowRight":
        case "ArrowLeft":
          break;

        case "Enter":
        case "Tab":
          isActive = false;
          this.selectAndHideList(this.state.selectedListIndex);
          return;

        default:
          selectedListIndex = 0;
      }

      this.setState({
        selectedListIndex: selectedListIndex,
        isActive: isActive
      }, function () {
        _this2.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "scrollHighlightedElemInView",
    value: function scrollHighlightedElemInView() {
      Utils.scrollElemToView(this.listNodeWrapperRef, this.listNode["item-".concat(this.state.selectedListIndex)]);
    }
  }, {
    key: "selectAndHideList",
    value: function selectAndHideList(index) {
      if (index === -1) {
        return;
      }

      this.props.getSelection(this.listNodeItem[index]);
      this.setState({
        selectedListIndex: index,
        isActive: false
      });
    }
  }, {
    key: "toggleDisplay",
    value: function toggleDisplay(bool) {
      var _this3 = this;

      this.setState({
        isActive: bool
      }, function () {
        _this3.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "renderListItems",
    value: function renderListItems(inpVal, inpList, renderList) {
      var _this4 = this;

      var minTextLength = this.props.minTextLength;
      this.listNode = [];
      var list = [];
      var skipped = 0;
      inpList.forEach(function (item, index) {
        var elem = renderList(item);
        var newIndex = index - skipped;

        if (!elem) {
          skipped += 1;
          return;
        }

        var onSelectFn = elem.props.onSelect || Utils.noop;
        var addClass = "";

        if (newIndex === _this4.state.selectedListIndex) {
          addClass = "is-active";
        }

        _this4.listNodeItem[newIndex] = item;
        var clonedElem = React.cloneElement(elem, {
          className: "".concat(elem.props.className || "", " ").concat(addClass),
          ref: function ref(context) {
            _this4.listNode["item-".concat(newIndex)] = context;
          },
          onClick: function onClick(e) {
            onSelectFn(e);

            _this4.selectAndHideList(newIndex);
          },
          onMouseDown: function onMouseDown(e) {
            onSelectFn(e);

            _this4.selectAndHideList(newIndex);
          }
        });
        list.push(clonedElem);
      });
      return this.state.isActive && list.length > 0 && inpVal.length >= minTextLength ? React__default.createElement("ul", {
        className: "nwc-autocomplete-list-container",
        ref: function ref(context) {
          _this4.listNodeWrapperRef = context;
        }
      }, list) : null;
    }
  }, {
    key: "renderInput",
    value: function renderInput(elem) {
      var _this5 = this;

      var id = elem.props.id;
      var onKeyDownFn = elem.props.onKeyDown || Utils.noop;
      var onFocusFn = elem.props.onFocus || Utils.noop;
      var onBlurFn = elem.props.onBlur || Utils.noop;
      return React.cloneElement(elem, {
        id: id || this.inputId,
        onKeyDown: function onKeyDown(e) {
          onKeyDownFn(e);

          _this5.onUserInput(e);
        },
        onFocus: function onFocus(e) {
          onFocusFn(e);

          _this5.toggleDisplay(true);
        },
        onBlur: function onBlur(e) {
          onBlurFn(e);
          setTimeout(function () {
            _this5.toggleDisplay(false);
          }, 300);
        },
        ref: function ref(context) {
          _this5.inputNode = context;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          inpList = _this$props.inpList,
          getSelection = _this$props.getSelection,
          renderInput = _this$props.renderInput,
          renderList = _this$props.renderList,
          minTextLength = _this$props.minTextLength,
          selectedIndex = _this$props.selectedIndex,
          otherProps = _objectWithoutProperties(_this$props, ["className", "inpList", "getSelection", "renderInput", "renderList", "minTextLength", "selectedIndex"]);

      var elem = renderInput();
      return React__default.createElement("div", _extends({
        className: "nwc-autocomplete ".concat(className, " ").concat(this.isActiveClassName),
        onTouchStart: Utils.preventEventPropagation
      }, otherProps), this.renderInput(elem), this.renderListItems(elem.props.value, inpList, renderList));
    }
  }, {
    key: "isActiveClassName",
    get: function get() {
      var isActive = this.state.isActive;
      return isActive && "is-active" || "";
    }
  }]);

  return Autocomplete;
}(React.Component);

Autocomplete.defaultProps = {
  className: "",
  selectedIndex: 0,
  getSelection: Utils.noop,
  minTextLength: 0
};
Autocomplete.propTypes = {
  className: PropTypes.string,
  selectedIndex: PropTypes.number,
  inpList: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.string)]).isRequired,
  getSelection: PropTypes.func,
  renderInput: PropTypes.func.isRequired,
  renderList: PropTypes.func.isRequired,
  minTextLength: PropTypes.number // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),

};

var BLOCK_VIRTUAL_KEYBOARD = window.innerWidth <= 768;

var Select =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.state = {
      inpVal: "",
      isActive: false,
      selectedListIndex: props.selectedIndex
    };
    _this.inputId = "".concat(Math.round(Math.random() * Math.pow(10, 10)));
    _this.blurTimeoutId = null;
    _this.inputTimeoutId = null;
    _this.navigateTimeoutId = null;
    _this.listNode = [];
    _this.listNodeItem = [];
    _this.onInpValChange = _this.onInpValChange.bind(_assertThisInitialized(_this));
    _this.onInpFocus = _this.onInpFocus.bind(_assertThisInitialized(_this));
    _this.onInpBlur = _this.onInpBlur.bind(_assertThisInitialized(_this));
    _this.renderListItems = _this.renderListItems.bind(_assertThisInitialized(_this));
    _this.toggleDisplay = _this.toggleDisplay.bind(_assertThisInitialized(_this));
    _this.selectAndHideList = _this.selectAndHideList.bind(_assertThisInitialized(_this));
    _this.onUserInput = _this.onUserInput.bind(_assertThisInitialized(_this));
    _this.scrollHighlightedElemInView = _this.scrollHighlightedElemInView.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Select, [{
    key: "onInpValChange",
    value: function onInpValChange(e) {
      var _this2 = this;

      var inpVal = e.target.value;
      var regXSearchItemStartsWith = new RegExp("^".concat(inpVal), "i");
      var selectedListIndex = 0;
      this.props.inpList.find(function (item, index) {
        var testAgainst = item[_this2.props.compareProp] || item;

        if (inpVal && inpVal.length > 0 && regXSearchItemStartsWith.test(testAgainst)) {
          selectedListIndex = index;
          return true;
        }

        return false;
      });
      this.setState({
        inpVal: inpVal,
        selectedListIndex: selectedListIndex
      });
      clearTimeout(this.inputTimeoutId);
      this.inputTimeoutId = setTimeout(function () {
        _this2.setState({
          inpVal: ""
        });
      }, 800);
    }
  }, {
    key: "onInpFocus",
    value: function onInpFocus() {
      var isActive = this.state.isActive;
      this.toggleDisplay(!isActive);
      clearTimeout(this.blurTimeoutId);
    }
  }, {
    key: "onInpBlur",
    value: function onInpBlur() {
      var _this3 = this;

      this.blurTimeoutId = setTimeout(function () {
        _this3.toggleDisplay(false);
      }, 200);
    }
  }, {
    key: "onUserInput",
    value: function onUserInput(e) {
      var _this4 = this;

      Utils.preventEventPropagation(e);
      var listNodeLength = Object.keys(this.listNode).length - 1;
      var isActive = true;
      var selectedListIndex = this.state.selectedListIndex;

      switch (e.key) {
        case "ArrowUp":
          Utils.preventDefault(e);
          selectedListIndex = this.state.selectedListIndex > 0 ? this.state.selectedListIndex - 1 : listNodeLength;
          break;

        case "ArrowDown":
          selectedListIndex = listNodeLength !== 0 && this.state.selectedListIndex < listNodeLength ? this.state.selectedListIndex + 1 : 0;
          break;

        case "ArrowRight":
        case "ArrowLeft":
          break;

        case "Enter":
          Utils.preventDefault(e);
          isActive = false;
          this.selectAndHideList(this.state.selectedListIndex);
          return;

        case "Tab":
          isActive = false;
          this.selectAndHideList(this.state.selectedListIndex);
          return;

        default:
          selectedListIndex = 0;
      }

      this.setState({
        selectedListIndex: selectedListIndex,
        isActive: isActive
      }, function () {
        _this4.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "scrollHighlightedElemInView",
    value: function scrollHighlightedElemInView() {
      Utils.scrollElemToView(this.listNodeWrapperRef, this.listNode["item-".concat(this.state.selectedListIndex)]);
    }
  }, {
    key: "selectAndHideList",
    value: function selectAndHideList(index) {
      if (index === -1) {
        return;
      }

      this.props.getSelection(this.listNodeItem[index]);
      this.setState({
        selectedListIndex: index,
        isActive: false
      });
    }
  }, {
    key: "toggleDisplay",
    value: function toggleDisplay(bool) {
      var _this5 = this;

      var disabled = this.props.disabled;
      this.setState({
        isActive: !disabled ? bool : false
      }, function () {
        _this5.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "renderListItems",
    value: function renderListItems(inpVal, inpList, renderList) {
      var _this6 = this;

      this.listNode = [];
      var list = inpList.map(function (item, index) {
        var elem = renderList(item);

        if (!elem) {
          return null;
        }

        var onSelectFn = elem.props.onSelect || Utils.noop;
        var addClass = "";

        if (index === _this6.state.selectedListIndex) {
          addClass = "is-active";
        }

        _this6.listNodeItem[index] = item;
        return React.cloneElement(elem, {
          className: "".concat(elem.props.className || "", " ").concat(addClass),
          ref: function ref(context) {
            _this6.listNode["item-".concat(index)] = context;
          },
          onClick: function onClick(e) {
            onSelectFn(e);

            _this6.selectAndHideList(index);
          },
          onMouseDown: function onMouseDown(e) {
            onSelectFn(e);

            _this6.selectAndHideList(index);
          }
        });
      });
      return this.state.isActive ? React__default.createElement("ul", {
        className: "nwc-select-list-container",
        ref: function ref(context) {
          _this6.listNodeWrapperRef = context;
        }
      }, list) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var inpVal = this.state.inpVal;

      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          disabled = _this$props.disabled,
          selectedValue = _this$props.selectedValue,
          inpList = _this$props.inpList,
          getSelection = _this$props.getSelection,
          renderList = _this$props.renderList,
          compareProp = _this$props.compareProp,
          selectedIndex = _this$props.selectedIndex,
          otherProps = _objectWithoutProperties(_this$props, ["id", "className", "disabled", "selectedValue", "inpList", "getSelection", "renderList", "compareProp", "selectedIndex"]);

      return React__default.createElement("div", {
        className: "nwc-select-container ".concat(className, " ").concat(this.isDisabledClass, " ").concat(this.isActiveClassName),
        onTouchStart: Utils.preventEventPropagation
      }, React__default.createElement(Label, _extends({
        className: "nwc-select ".concat(this.isDisabledClass),
        htmlFor: id || this.inputId
      }, otherProps), selectedValue[compareProp] || selectedValue, React__default.createElement(Input$1, {
        id: id || this.inputId,
        className: "nwc-inp-hide nwc-inp-dash nwc-inp-sm",
        placeholder: "Enter text",
        value: inpVal,
        onChange: this.onInpValChange,
        onKeyDown: this.onUserInput,
        onFocus: this.onInpFocus,
        onBlur: this.onInpBlur,
        ref: function ref(context) {
          _this7.inputRef = context;
        },
        disabled: disabled,
        readOnly: BLOCK_VIRTUAL_KEYBOARD
      }), React__default.createElement("i", {
        className: "icomoon-arrow_bottom nwc-select-arrowbottom"
      })), this.renderListItems(inpVal, inpList, renderList));
    }
  }, {
    key: "isActiveClassName",
    get: function get() {
      var isActive = this.state.isActive;
      return isActive && "is-active" || "";
    }
  }, {
    key: "isDisabledClass",
    get: function get() {
      var disabled = this.props.disabled;
      return disabled && "is-disabled" || "";
    }
  }]);

  return Select;
}(React.PureComponent);

Select.defaultProps = {
  id: null,
  className: "",
  disabled: false,
  selectedIndex: 0,
  getSelection: Utils.noop,
  compareProp: undefined
};
Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  selectedIndex: PropTypes.number,
  selectedValue: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]).isRequired,
  inpList: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.arrayOf(PropTypes.string)]).isRequired,
  getSelection: PropTypes.func,
  renderList: PropTypes.func.isRequired,
  compareProp: PropTypes.string // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),

};

var Masonry =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Masonry, _PureComponent);

  function Masonry(props) {
    var _this;

    _classCallCheck(this, Masonry);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Masonry).call(this, props));

    var mediaAndCount = _this.getMediaAndColCount();

    _this.state = {
      media: mediaAndCount.media,
      columnCount: mediaAndCount.count
    };
    _this.resizeTimeoutId = null;
    _this.initialize = _this.initialize.bind(_assertThisInitialized(_this));
    _this.getMediaAndColCount = _this.getMediaAndColCount.bind(_assertThisInitialized(_this));

    _this.initialize();

    return _this;
  }

  _createClass(Masonry, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        clearTimeout(_this2.resizeTimeoutId);
        _this2.resizeTimeoutId = setTimeout(function () {
          var mediaAndCount = _this2.getMediaAndColCount();

          if (_this2.state.columnCount !== mediaAndCount.count) {
            _this2.initialize();

            _this2.setState({
              media: mediaAndCount.media,
              columnCount: mediaAndCount.count
            });
          }
        }, 300);
      });
    }
  }, {
    key: "getMediaAndColCount",
    value: function getMediaAndColCount() {
      var _this$props = this.props,
          columnCount = _this$props.columnCount,
          base = _this$props.base;
      var lg = columnCount.lg,
          md = columnCount.md,
          sm = columnCount.sm,
          _columnCount$xs = columnCount.xs,
          xs = _columnCount$xs === void 0 ? 6 : _columnCount$xs;
      var width = window.innerWidth;

      switch (true) {
        case width > screenMedia.lg:
          if (lg) {
            return {
              media: lg,
              count: base / lg
            };
          }

        // eslint-disable-next-line

        case width > screenMedia.md:
          if (md) {
            return {
              media: md,
              count: base / md
            };
          }

        // eslint-disable-next-line

        case width > screenMedia.sm:
          if (sm) {
            return {
              media: sm,
              count: base / sm
            };
          }

        // eslint-disable-next-line

        default:
          return {
            media: xs,
            count: base / xs
          };
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.colPos = 0;
      this.gridColumns = [];
      this.alreadyProcessed = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return this.columns;
    }
  }, {
    key: "columns",
    get: function get() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          data = _this$props2.data,
          renderList = _this$props2.renderList,
          count = _this$props2.columnCount,
          base = _this$props2.base,
          otherProps = _objectWithoutProperties(_this$props2, ["className", "data", "renderList", "columnCount", "base"]);

      var _this$state = this.state,
          media = _this$state.media,
          columnCount = _this$state.columnCount;
      var grids = [];
      var masonryColumnCount = columnCount - 1;
      var i = 0;
      var tempData = data.slice(this.alreadyProcessed);
      this.alreadyProcessed += tempData.length;

      while (tempData.length > 0) {
        grids.push(renderList(tempData[i]));
        tempData.splice(i, 1);
        i += masonryColumnCount;

        if (tempData[i] === undefined) {
          this.gridColumns[this.colPos] = [].concat(_toConsumableArray(this.gridColumns[this.colPos] || []), _toConsumableArray(grids));
          masonryColumnCount -= 1;
          i = 0;
          grids = [];

          if (this.colPos < columnCount - 1) {
            this.colPos += 1;
          } else {
            this.colPos = 0;
          }
        }
      }

      return this.gridColumns.map(function (item, key) {
        return React__default.createElement(GridColumn, _extends({
          className: "nwc-grid-col-xs-".concat(media, " ").concat(className) // eslint-disable-next-line
          ,
          key: key
        }, otherProps), item);
      });
    }
  }]);

  return Masonry;
}(React.PureComponent);

Masonry.defaultProps = {
  className: "",
  base: 12
};
Masonry.propTypes = {
  base: PropTypes.number,
  className: PropTypes.string,
  columnCount: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number
  }).isRequired,
  renderList: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var scheduler_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a);}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c;}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c();}finally{g=f,l=Q;}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next;}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b;}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1;}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v();}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b);});D=y(function(){B(C);a(exports.unstable_now());},100);}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()};}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof commonjsGlobal&&(G=commonjsGlobal);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3];}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a);}finally{I=null;}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1));};q=function(){I=null;};w=function(){return !1};}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f);}finally{O=!1;}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0));}else N=!1;};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V));};q=function(){K=null;L=!1;M=-1;};}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v();}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g;}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v();}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3;}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next;}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b;}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c;}a.next=a.previous=null;}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v();}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return !e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p();};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};
});

unwrapExports(scheduler_production_min);
var scheduler_production_min_1 = scheduler_production_min.unstable_now;
var scheduler_production_min_2 = scheduler_production_min.unstable_ImmediatePriority;
var scheduler_production_min_3 = scheduler_production_min.unstable_UserBlockingPriority;
var scheduler_production_min_4 = scheduler_production_min.unstable_NormalPriority;
var scheduler_production_min_5 = scheduler_production_min.unstable_IdlePriority;
var scheduler_production_min_6 = scheduler_production_min.unstable_LowPriority;
var scheduler_production_min_7 = scheduler_production_min.unstable_runWithPriority;
var scheduler_production_min_8 = scheduler_production_min.unstable_next;
var scheduler_production_min_9 = scheduler_production_min.unstable_scheduleCallback;
var scheduler_production_min_10 = scheduler_production_min.unstable_cancelCallback;
var scheduler_production_min_11 = scheduler_production_min.unstable_wrapCallback;
var scheduler_production_min_12 = scheduler_production_min.unstable_getCurrentPriorityLevel;
var scheduler_production_min_13 = scheduler_production_min.unstable_shouldYield;
var scheduler_production_min_14 = scheduler_production_min.unstable_continueExecution;
var scheduler_production_min_15 = scheduler_production_min.unstable_pauseExecution;
var scheduler_production_min_16 = scheduler_production_min.unstable_getFirstCallbackNode;

var scheduler_development = createCommonjsModule(function (module, exports) {
});

unwrapExports(scheduler_development);
var scheduler_development_1 = scheduler_development.unstable_now;
var scheduler_development_2 = scheduler_development.unstable_ImmediatePriority;
var scheduler_development_3 = scheduler_development.unstable_UserBlockingPriority;
var scheduler_development_4 = scheduler_development.unstable_NormalPriority;
var scheduler_development_5 = scheduler_development.unstable_IdlePriority;
var scheduler_development_6 = scheduler_development.unstable_LowPriority;
var scheduler_development_7 = scheduler_development.unstable_runWithPriority;
var scheduler_development_8 = scheduler_development.unstable_next;
var scheduler_development_9 = scheduler_development.unstable_scheduleCallback;
var scheduler_development_10 = scheduler_development.unstable_cancelCallback;
var scheduler_development_11 = scheduler_development.unstable_wrapCallback;
var scheduler_development_12 = scheduler_development.unstable_getCurrentPriorityLevel;
var scheduler_development_13 = scheduler_development.unstable_shouldYield;
var scheduler_development_14 = scheduler_development.unstable_continueExecution;
var scheduler_development_15 = scheduler_development.unstable_pauseExecution;
var scheduler_development_16 = scheduler_development.unstable_getFirstCallbackNode;

var scheduler = createCommonjsModule(function (module) {

{
  module.exports = scheduler_production_min;
}
});

function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c);}React__default?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k);}catch(m){this.onError(m);}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a;}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments);}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null;}else x("198"),k=void 0;fa||(fa=!0,ha=k);}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0;}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a);}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies;}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null;}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na();},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0);}b&&na();}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return !a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33");}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a);}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a);}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a));}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a);}
function Qa(a){ya(a,Na);}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return !0}function gb(){return !1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
objectAssign(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb);},persist:function(){this.isPersistent=fb;},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null;}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;objectAssign(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=objectAssign({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb;}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return -1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function vb(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return "compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0;}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b);}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a;}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a]);}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb();}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
null;delete a[b];}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a));}function Sb(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=React__default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return "function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return "ConcurrentMode";case Xb:return "Fragment";case Wb:return "Portal";case Zb:return "Profiler";case Yb:return "StrictMode";case dc:return "Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return "Context.Consumer";case $b:return "Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return !0;if(lc.call(mc,a))return !1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return !1}function pc(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null);});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null);});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null);});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null);});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null);});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null);});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null);});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink");});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace");});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null);});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return ""}}function vc(a,b){var c=b.checked;return objectAssign({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1);}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a);}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null);}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a));}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc();}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value);}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e);}b=null;}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f);}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d);}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return [a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return !1;return !0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0;}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling;}x("188");}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}g?
void 0:x("189");}}c.alternate!==d?x("190"):void 0;}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return "keypress"===
a.type?ld(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b;}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0);});td.forEach(function(a){wd(a,!1);});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y;}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l));}Da(g);}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1);}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0);}function Cd(a,b){Hb(Dd,a,b);}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d;}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a);}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a);}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Kd(c);}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Jd(a.document);}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType;}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t;}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode;}m=t;}b=-1===g||-1===h?null:{start:g,end:h};}else b=null;}b=b||{start:0,end:0};}else b=null;return {focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0;}f=!e;}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";React__default.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}
function $d(a,b){a=objectAssign({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return objectAssign({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)};}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b);}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a];});});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var pe=objectAssign({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0);}
function re(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a);}c[e]=!0;}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}function xe(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=scheduler.unstable_scheduleCallback,Be=scheduler.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d);}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1));}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--);}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b;}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I);F(H);}function Le(a){F(I);F(H);}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b);G(I,c);}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return objectAssign({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b);G(I,I.current);return !0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I),F(H),G(H,b)):F(I);G(I,c);}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)});}catch(d){}return !0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return !(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"");}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a);}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b);}df(0,a);}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a);}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a;}function L(a,b){if(a&&a.defaultProps){b=objectAssign({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new React__default.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:objectAssign({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c);}
var tf={isMounted:function(a){return (a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c);}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null);}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4);}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a);}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"");}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b);}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c);}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d);}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B;}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B;}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling;}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h);}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling;}d=bf(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component");}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b);G(Gf,a);G(N,Ff);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c);}F(N);G(N,b);}function Kf(a){F(N);F(Gf);F(Hf);}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a),G(N,c));}function Mf(a){Gf.current===a&&(F(N),F(Gf));}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321");}function gg(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return !1;return !0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0;}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0;}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next;}return Q}function og(a,b){return "function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return [f,d]}}return [b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next;}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f;}return [b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d);}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d);}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a;}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f;}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e);}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return [d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return [b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c);}xg=a;yg=Ee(b);}else a.effectTag|=2,zg=!1,xg=a;}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a;}function Eg(a){if(a!==xg)return !1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return !0}function Fg(){yg=xg=null;zg=!1;}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d);}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b);}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo);}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1;}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b;}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null;}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c);}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"");}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child;}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return;}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next;}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=g;}}S(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156");}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue);c._currentValue=b;}function Zg(a){var b=Vg.current;F(Vg);a.type._context._currentValue=b;}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null;}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b;}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return {baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return {baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return {expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b);}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState));}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b);}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b);}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return objectAssign({},d,e);case sf:Pg=!0;}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next;}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next;}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k;}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null;}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d);}a=a.nextEffect;}}
function jh(a,b){return {value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4;}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=objectAssign({},f,{value:void 0});d=objectAssign({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te);}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="");}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g]);}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k));}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b);}};oh=function(a,b,c,d){c!==d&&kh(b);};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){sh(a,c);}else b.current=null;}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e();}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next;}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e);}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d();}catch(f){sh(e,f);}}c=c.next;}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(f){sh(a,f);}break;case 5:rh(a);break;case 4:wh(a);}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return;}x("160");c=void 0;}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161");}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h);}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return;}e.sibling.return=e.return;e=e.sibling;}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return;}c=!0;}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return;}g.sibling.return=g.return;g=g.sibling;}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode);}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1);}b.sibling.return=b.return;b=b.sibling;}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d);}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c));});}break;case 17:break;default:x("163");}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b);};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""});});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke();var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(),Le(),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke();break;case 3:Kf();Le();break;case 5:Mf(b);break;case 4:Kf();break;case 10:Zg(b);}a=a.return;}Lh=null;U=0;Mh=-1;Nh=!1;T=null;}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null));}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null);}V=V.nextEffect;}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163");}}V=V.nextEffect;}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate);}d=e.updateQueue;null!==d&&hh(e,d,g);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode;}hh(e,d,g);}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163");}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect;}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f);}catch(g){d=!0,e=g;}d&&sh(b,e);}b=b.nextEffect;}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1);}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh();}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh();}catch(h){e=!0,f=h;}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect));}for(V=d;null!==V;){e=!1;
f=void 0;try{Th();}catch(h){e=!0,f=h;}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect));}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c);}catch(h){e=!0,f=h;}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect));}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=scheduler.unstable_runWithPriority(scheduler.unstable_NormalPriority,function(){return Ae(g)});Rh=g;}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b);}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke();break;case 3:Kf();Le();g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange");}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te);}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b);}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=objectAssign({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m;}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A));}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te);}(g=we(f,g))&&kh(b);b.stateNode=e;}null!==b.ref&&(b.effectTag|=128);}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf();mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke();break;case 18:break;default:x("156");}T=null;}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g;}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a));}else{a=Gh(a);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024);}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T);}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v;}m=m.return;}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return;}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k));}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return;}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c);}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return;}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823));}
function mf(a,b){var c=scheduler.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case scheduler.unstable_ImmediatePriority:d=1073741823;break;case scheduler.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case scheduler.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case scheduler.unstable_LowPriority:case scheduler.unstable_IdlePriority:d=1;break;default:x("313");}null!==Lh&&d===U&&--d;}c===scheduler.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c);}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b));}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")));}function ki(a,b,c,d,e){return scheduler.unstable_runWithPriority(scheduler.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=scheduler.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((scheduler.unstable_now()-ti)/10|0);}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&scheduler.unstable_cancelCallback(ni);}mi=b;a=scheduler.unstable_now()-ti;ni=scheduler.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a});}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b);}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c);}function $h(a,b){a.expirationTime=b;a.finishedWork=null;}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b));}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot;}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot;}}oi=b;Z=a;}var Ei=!1;function di(){return Ei?!0:scheduler.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot;}while(a!==li)}Yh(0,!0);}finally{Ei=!1;}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete();}catch(d){pi||(pi=!0,qi=d);}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1);}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)));}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1;}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);scheduler.unstable_runWithPriority(scheduler.unstable_ImmediatePriority,function(){Zh(a,b);});}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a);}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1);}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1;}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return scheduler.unstable_runWithPriority(scheduler.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1);}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return;}while(null!==g);x("171");g=void 0;}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g;}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e);}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1);}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0;}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this;}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children);}else this._next=
null,this._defer=!1;};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0, a[b])();}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this);}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a);}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c();}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a;}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a);}return a};function Qi(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0);};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a);};}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a);};}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e);});}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null;});}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1);}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a);}finally{(X=b)||W||Yh(1073741823,!1);}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa);},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(objectAssign({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;var reactDom_production_min=Xi.default||Xi;

var schedulerTracing_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});var b=0;exports.__interactionsRef=null;exports.__subscriberRef=null;exports.unstable_clear=function(a){return a()};exports.unstable_getCurrent=function(){return null};exports.unstable_getThreadID=function(){return ++b};exports.unstable_trace=function(a,d,c){return c()};exports.unstable_wrap=function(a){return a};exports.unstable_subscribe=function(){};exports.unstable_unsubscribe=function(){};
});

unwrapExports(schedulerTracing_production_min);
var schedulerTracing_production_min_1 = schedulerTracing_production_min.__interactionsRef;
var schedulerTracing_production_min_2 = schedulerTracing_production_min.__subscriberRef;
var schedulerTracing_production_min_3 = schedulerTracing_production_min.unstable_clear;
var schedulerTracing_production_min_4 = schedulerTracing_production_min.unstable_getCurrent;
var schedulerTracing_production_min_5 = schedulerTracing_production_min.unstable_getThreadID;
var schedulerTracing_production_min_6 = schedulerTracing_production_min.unstable_trace;
var schedulerTracing_production_min_7 = schedulerTracing_production_min.unstable_wrap;
var schedulerTracing_production_min_8 = schedulerTracing_production_min.unstable_subscribe;
var schedulerTracing_production_min_9 = schedulerTracing_production_min.unstable_unsubscribe;

var schedulerTracing_development = createCommonjsModule(function (module, exports) {
});

unwrapExports(schedulerTracing_development);
var schedulerTracing_development_1 = schedulerTracing_development.__interactionsRef;
var schedulerTracing_development_2 = schedulerTracing_development.__subscriberRef;
var schedulerTracing_development_3 = schedulerTracing_development.unstable_clear;
var schedulerTracing_development_4 = schedulerTracing_development.unstable_getCurrent;
var schedulerTracing_development_5 = schedulerTracing_development.unstable_getThreadID;
var schedulerTracing_development_6 = schedulerTracing_development.unstable_trace;
var schedulerTracing_development_7 = schedulerTracing_development.unstable_wrap;
var schedulerTracing_development_8 = schedulerTracing_development.unstable_subscribe;
var schedulerTracing_development_9 = schedulerTracing_development.unstable_unsubscribe;

var tracing = createCommonjsModule(function (module) {

{
  module.exports = schedulerTracing_production_min;
}
});

var reactDom_development = createCommonjsModule(function (module) {
});

var reactDom = createCommonjsModule(function (module) {

function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

{
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = reactDom_production_min;
}
});

function setFocus(context) {
  if (context) {
    context.focus();
  }
}

var modalOpen = false;

var ModalContainer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ModalContainer, _PureComponent);

  _createClass(ModalContainer, null, [{
    key: "isModalOpen",
    value: function isModalOpen() {
      return modalOpen;
    }
  }, {
    key: "handleHistoryOnOpen",
    value: function handleHistoryOnOpen() {
      var currentState = window.history.state;

      if (currentState) {
        currentState.modal = true;
        window.history.pushState(currentState, "");
      }
    }
  }]);

  function ModalContainer(props) {
    var _this;

    _classCallCheck(this, ModalContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalContainer).call(this, props));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.onEscapeClose = _this.onEscapeClose.bind(_assertThisInitialized(_this));
    _this.closeModal = _this.closeModal.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      modalOpen = true;

      if (!this.props.preventfix) {
        Utils.fixScroll();
      }

      if (isMobile$1) {
        ModalContainer.handleHistoryOnOpen();
      }

      window.addEventListener("popstate", this.closeModal);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      setTimeout(function () {
        modalOpen = false;
      }, 100);

      if (!this.props.preventfix) {
        Utils.unFixScroll();
      }

      window.removeEventListener("popstate", this.closeModal);
    }
  }, {
    key: "onClose",
    value: function onClose(e) {
      var currentState = window.history.state;

      if (isMobile$1 && currentState && currentState.modal) {
        window.history.back();
      } else {
        this.closeModal(e);
      }
    }
  }, {
    key: "onEscapeClose",
    value: function onEscapeClose(e) {
      Utils.preventEventPropagation(e);

      if (e.key === "Escape") {
        this.onClose(e);
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal(e) {
      var onClose = this.props.onClose;
      onClose(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          onClose = _this$props.onClose,
          preventfix = _this$props.preventfix,
          otherProps = _objectWithoutProperties(_this$props, ["className", "children", "onClose", "preventfix"]);

      return React__default.createElement("div", _extends({
        role: "button",
        className: "nwc-modal-container ".concat(className),
        tabIndex: 0,
        onClick: this.onClose,
        onKeyDown: this.onEscapeClose,
        ref: setFocus
      }, otherProps), React__default.createElement("div", {
        role: "presentation",
        className: "nwc-modal",
        onClick: Utils.preventEventPropagation,
        onKeyDown: null
      }, React__default.createElement(Close, {
        className: "nwc-close-normal nwc-modal-close",
        onClick: this.onClose
      }), React__default.createElement("div", {
        className: "nwc-custom-scrollbar nwc-modal-children"
      }, children)));
    }
  }]);

  return ModalContainer;
}(React.PureComponent);

ModalContainer.defaultProps = {
  className: "",
  preventfix: false
};
ModalContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  onClose: PropTypes.func.isRequired,
  preventfix: PropTypes.bool
};

function createBaseContainer() {
  var modalContainer = document.createElement("div");
  modalContainer.className = "nwc-modal-holder";

  if (document.querySelectorAll("body")[0]) {
    document.querySelectorAll("body")[0].appendChild(modalContainer);
  }
}

function Modal(props) {
  var isOpen = props.isOpen,
      otherProps = _objectWithoutProperties(props, ["isOpen"]);

  if (isOpen) {
    return reactDom.createPortal(React__default.createElement(ModalContainer, otherProps), document.querySelector(".nwc-modal-holder"));
  }

  return null;
}

createBaseContainer();
Modal.isModalOpen = ModalContainer.isModalOpen;
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

function ToastrList(props) {
  var item = props.item,
      hideToastr = props.hideToastr,
      otherProps = _objectWithoutProperties(props, ["item", "hideToastr"]);

  return React__default.createElement("li", _extends({
    key: "toastr-".concat(item.id),
    className: "nwc-toastr-list ".concat(item.className)
  }, otherProps), React__default.createElement(Close, {
    className: "nwc-close-sm",
    onClick: function onClick() {
      hideToastr(item);
    }
  }), item.message);
}

ToastrList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    message: PropTypes.string.isRequired
  }).isRequired,
  hideToastr: PropTypes.func.isRequired
};

function ToastrContainer(props) {
  var toastrList = props.toastrList,
      limitTo = props.limitTo,
      hideToastr = props.hideToastr;
  return React__default.createElement("div", {
    role: "button",
    tabIndex: 0
  }, React__default.createElement("ul", {
    className: "nwc-toastrcontainer-list"
  }, _toConsumableArray(toastrList).reverse().map(function (item, index) {
    if (index < limitTo) {
      return React__default.createElement(ToastrList, {
        item: item,
        key: item.id,
        hideToastr: hideToastr
      });
    }

    return null;
  })));
}

ToastrContainer.propTypes = {
  toastrList: PropTypes.arrayOf(PropTypes.object).isRequired,
  limitTo: PropTypes.number.isRequired,
  hideToastr: PropTypes.func.isRequired
};

function clearAll() {
  this.setState({
    toastrList: []
  });
}

function hideToastr(item) {
  var toastrList = this.state.toastrList;

  if (toastrList.findIndex(function (i) {
    return i.id === item.id;
  }) !== -1) {
    toastrList.splice(toastrList.findIndex(function (i) {
      return i.id === item.id;
    }), 1);
  }

  this.setState({
    toastrList: toastrList
  });
}

function showToastr(item) {
  var _this = this;

  var timeout = parseInt(item.timeout, 10);
  var toastrList = this.state.toastrList;
  var itemClone = item;
  itemClone.id = "".concat(Math.round(Math.random() * Math.pow(10, 10)));
  toastrList.push(itemClone);
  this.setState({
    toastrList: toastrList
  });

  if (!Number.isNaN(timeout)) {
    setTimeout(function () {
      hideToastr.bind(_this)(itemClone);
    }, timeout);
  }
}

function setConfig(obj) {
  this.limitTo = obj.limitTo;
}

function createBaseContainer$1() {
  var toastrContainer = document.createElement("div");
  toastrContainer.className = "nwc-toastr-holder";

  if (document.querySelectorAll("body")[0]) {
    document.querySelectorAll("body")[0].appendChild(toastrContainer);
  }
}

var hideToastrFn;

var Toastr =
/*#__PURE__*/
function (_Component) {
  _inherits(Toastr, _Component);

  function Toastr(props) {
    var _this;

    _classCallCheck(this, Toastr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Toastr).call(this, props));
    _this.state = {
      toastrList: [] // eslint-disable-line react/no-unused-state

    };
    Toastr.clearAll = clearAll.bind(_assertThisInitialized(_this));
    Toastr.showToastr = showToastr.bind(_assertThisInitialized(_this));
    Toastr.setConfig = setConfig.bind(_assertThisInitialized(_this));
    Toastr.setConfig({
      limitTo: 5
    });
    hideToastrFn = hideToastr.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Toastr, [{
    key: "render",
    value: function render() {
      var toastrList = this.state.toastrList;
      return reactDom.createPortal(React__default.createElement(ToastrContainer, {
        toastrList: toastrList,
        limitTo: this.limitTo,
        hideToastr: hideToastrFn
      }), document.querySelectorAll(".nwc-toastr-holder")[0]);
    }
  }]);

  return Toastr;
}(React.Component);

createBaseContainer$1();
reactDom.render(React__default.createElement(Toastr, null), document.querySelectorAll(".nwc-toastr-holder")[0]);

function Loader(props) {
  var className = props.className;
  return React__default.createElement("svg", {
    className: "nwc-loader ".concat(className),
    xmlns: "http://www.w3.org/2000/svg",
    width: "200px",
    height: "200px",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid"
  }, React__default.createElement("circle", {
    className: "nwc-loader-circle",
    cx: "50",
    cy: "50",
    fill: "none",
    stroke: "#f2258b",
    strokeWidth: "8",
    r: "35",
    strokeDasharray: "164.93361431346415 56.97787143782138",
    transform: "rotate(313.584 50 50)"
  }));
}

Loader.defaultProps = {
  className: ""
};
Loader.propTypes = {
  className: PropTypes.string
};

var swipeThreshold = 50;

var Carousel =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Carousel, _PureComponent);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.listNode = [];
    _this.touchStartVals = null;
    _this.touchEndVals = null;
    _this.touchmoveTimeoutId = null;
    _this.scrollToIndex = _this.scrollToIndex.bind(_assertThisInitialized(_this));
    _this.onTouchStart = _this.onTouchStart.bind(_assertThisInitialized(_this));
    _this.onTouchMove = _this.onTouchMove.bind(_assertThisInitialized(_this));
    _this.onTouchEnd = _this.onTouchEnd.bind(_assertThisInitialized(_this));
    _this.getDirection = _this.getDirection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Utils.requestAnimationFrame(function () {
        _this2.scrollToIndex(_this2.props.index);
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.scrollToIndex(nextProps.index, nextProps.animationDuration);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      var _e$touches = _slicedToArray(e.touches, 1),
          touchVals = _e$touches[0];

      this.touchStartVals = touchVals;
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      if (e.touches.length > 1) {
        return;
      }

      var _e$touches2 = _slicedToArray(e.touches, 1),
          touchVals = _e$touches2[0];

      this.touchEndVals = touchVals;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      if (!this.touchEndVals) {
        return;
      }

      this.props.onSwipe(this.getDirection()); // Unset touchVals on swipeend

      this.touchStartVals = null;
      this.touchEndVals = null;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      var _this$touchStartVals = this.touchStartVals,
          startClientX = _this$touchStartVals.clientX,
          startClientY = _this$touchStartVals.clientY;
      var _this$touchEndVals = this.touchEndVals,
          endClientX = _this$touchEndVals.clientX,
          endClientY = _this$touchEndVals.clientY;
      var direction = {
        horizontal: undefined,
        vertical: undefined
      };
      var clientXDiff = Math.abs(endClientX - startClientX);
      var clientYDiff = Math.abs(endClientY - startClientY);

      if (endClientX > startClientX && clientXDiff > swipeThreshold) {
        direction.horizontal = "prev";
      } else if (clientXDiff > swipeThreshold) {
        direction.horizontal = "next";
      }

      if (endClientY > startClientY && clientYDiff > swipeThreshold) {
        direction.vertical = "prev";
      } else if (clientYDiff > swipeThreshold) {
        direction.vertical = "next";
      }

      return direction;
    }
  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var elem = this.listNode["item-".concat(index)];
      Utils.scrollElemToView(this.parentRef, elem, duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          index = _this$props.index,
          items = _this$props.items,
          renderItems = _this$props.renderItems,
          onSwipe = _this$props.onSwipe,
          animationDuration = _this$props.animationDuration,
          otherProps = _objectWithoutProperties(_this$props, ["className", "index", "items", "renderItems", "onSwipe", "animationDuration"]);

      return React__default.createElement("div", _extends({
        ref: function ref(context) {
          _this3.parentRef = context;
        },
        className: "nwc-carousel ".concat(className),
        onTouchStart: this.onTouchStart,
        onTouchMove: this.onTouchMove,
        onTouchEnd: this.onTouchEnd
      }, otherProps), this.renderItemsList);
    }
  }, {
    key: "renderItemsList",
    get: function get() {
      var _this4 = this;

      var _this$props2 = this.props,
          items = _this$props2.items,
          renderItems = _this$props2.renderItems;
      var itemsList = items.map(function (item, index) {
        var elem = renderItems(item, index, _this4.parentRef);
        return React.cloneElement(elem, {
          ref: function ref(context) {
            _this4.listNode["item-".concat(index)] = context;
          }
        });
      });
      return itemsList;
    }
  }]);

  return Carousel;
}(React.PureComponent);

Carousel.defaultProps = {
  className: "",
  onSwipe: Utils.noop,
  animationDuration: 600
};
Carousel.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  animationDuration: PropTypes.number,
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape({})), PropTypes.arrayOf(PropTypes.string)]).isRequired,
  renderItems: PropTypes.func.isRequired,
  onSwipe: PropTypes.func
};

var RecyclerView =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(RecyclerView, _PureComponent);

  function RecyclerView(props) {
    var _this;

    _classCallCheck(this, RecyclerView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RecyclerView).call(this, props));
    _this.state = {
      scrolledBy: 0,
      isContainerLoaded: false,
      isWrapperLoaded: false
    };
    _this.containerRef = null;
    _this.wrapperRef = null;
    _this.windowInnerWidth = window.innerWidth;
    _this.elemsInRow = props.elemsInRow;
    _this.removeScrollListener = null;
    _this.removeContainerScrollListener = null;
    _this.productSavedHeight = null;
    _this.storeProductHeight = _this.storeProductHeight.bind(_assertThisInitialized(_this));
    _this.setContainer = _this.setContainer.bind(_assertThisInitialized(_this));
    _this.setWrapper = _this.setWrapper.bind(_assertThisInitialized(_this));
    _this.triggerChange = _this.triggerChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RecyclerView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Utils.requestAnimationFrame(this.triggerChange);
      this.removeScrollListener = Utils.onElementScroll(window, this.triggerChange, {
        passive: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeScrollListener();
      this.removeContainerScrollListener();
    }
  }, {
    key: "setContainer",
    value: function setContainer(context) {
      this.containerRef = context;
      this.setState({
        isContainerLoaded: true
      });

      if (this.containerRef) {
        this.removeContainerScrollListener = Utils.onElementScroll(this.containerRef, this.triggerChange, {
          passive: true
        });
      }
    }
  }, {
    key: "setWrapper",
    value: function setWrapper(context) {
      this.wrapperRef = context;
      this.setState({
        isWrapperLoaded: true
      });
    }
  }, {
    key: "triggerChange",
    value: function triggerChange() {
      var elemsInRow = this.props.elemsInRow;
      var viewHeight = this.viewHeight,
          productSavedHeight = this.productSavedHeight;

      if (!productSavedHeight) {
        this.storeProductHeight();
        return;
      }

      var scrolledBy = Math.ceil(viewHeight / productSavedHeight) * elemsInRow;
      this.setState({
        scrolledBy: scrolledBy
      }, this.storeProductHeight);
    }
  }, {
    key: "storeProductHeight",
    value: function storeProductHeight() {
      var elemsInRow = this.props.elemsInRow;

      if (!this.productSavedHeight || this.elemsInRow !== elemsInRow || this.windowInnerWidth !== window.innerWidth) {
        this.elemsInRow = elemsInRow;
        this.windowInnerWidth = window.innerWidth;
        this.productSavedHeight = this.productHeight;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isContainerLoaded = _this$state.isContainerLoaded,
          isWrapperLoaded = _this$state.isWrapperLoaded;
      var _this$props = this.props,
          containerClassName = _this$props.containerClassName,
          wrapperClassName = _this$props.wrapperClassName;
      return React__default.createElement("div", {
        ref: this.setContainer,
        className: containerClassName,
        style: {
          height: "".concat(this.parentVirtualHeight, "px")
        }
      }, isContainerLoaded && React__default.createElement("div", {
        ref: this.setWrapper,
        className: wrapperClassName,
        style: {
          transform: "translateY(".concat(this.offsetTop, "px)")
        }
      }, isWrapperLoaded && this.renderItems || null) || null);
    }
  }, {
    key: "listVals",
    get: function get() {
      return Utils.getBoundClientRect(this.containerRef);
    }
  }, {
    key: "totalRows",
    get: function get() {
      var _this$props2 = this.props,
          noOfElements = _this$props2.noOfElements,
          elemsInRow = _this$props2.elemsInRow;
      return noOfElements / elemsInRow;
    }
  }, {
    key: "limits",
    get: function get() {
      var _this$props3 = this.props,
          elemsInRow = _this$props3.elemsInRow,
          noOfElements = _this$props3.noOfElements;
      var scrolledBy = this.state.scrolledBy;
      var offsetBy = elemsInRow * 8;
      var fromVal = scrolledBy - offsetBy;
      var till = scrolledBy + offsetBy;
      return {
        from: fromVal >= 0 ? fromVal : 0,
        till: till > noOfElements ? noOfElements : till
      };
    }
  }, {
    key: "productWidth",
    get: function get() {
      var elemsInRow = this.props.elemsInRow;
      return this.listVals.width / elemsInRow;
    }
  }, {
    key: "productHeight",
    get: function get() {
      var elemsInRow = this.props.elemsInRow;

      if (!this.wrapperRef) {
        return 0;
      }

      var renderItemsLength = this.renderItems ? this.renderItems.length : 0;
      var rowsInView = renderItemsLength / elemsInRow;
      var wrapperRefVals = Utils.getBoundClientRect(this.wrapperRef);
      return wrapperRefVals.height / rowsInView;
    }
  }, {
    key: "viewHeight",
    get: function get() {
      var listVals = this.listVals;
      var windowHeight = window.innerHeight;
      var windowTop = Utils.windowScroll().top;
      return windowHeight + (windowTop - listVals.top);
    }
  }, {
    key: "offsetTop",
    get: function get() {
      var isWrapperLoaded = this.state.isWrapperLoaded;

      if (!isWrapperLoaded) {
        return 0;
      }

      var productSavedHeight = this.productSavedHeight;
      var limits = this.limits;
      var elemsInRow = this.props.elemsInRow;
      var heightOfHiddens = limits.from / elemsInRow * productSavedHeight;
      return heightOfHiddens;
    }
  }, {
    key: "parentVirtualHeight",
    get: function get() {
      var productSavedHeight = this.productSavedHeight;

      if (!productSavedHeight) {
        return null;
      }

      var _this$props4 = this.props,
          noOfElements = _this$props4.noOfElements,
          elemsInRow = _this$props4.elemsInRow;
      var heightOfList = Math.ceil(noOfElements / elemsInRow) * productSavedHeight;
      return heightOfList;
    }
  }, {
    key: "renderItems",
    get: function get() {
      var limits = this.limits;
      var _this$props5 = this.props,
          renderList = _this$props5.renderList,
          list = _this$props5.list;
      var elemsToDisplay = list.slice(limits.from, limits.till);
      var items = [];
      elemsToDisplay.forEach(function (item, index) {
        items.push(renderList(item, index + limits.from));
      });
      return items;
    }
  }]);

  return RecyclerView;
}(React.PureComponent);

RecyclerView.defaultProps = {
  containerClassName: "",
  wrapperClassName: "",
  noOfElements: 0
};
RecyclerView.propTypes = {
  containerClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  noOfElements: PropTypes.number,
  elemsInRow: PropTypes.number.isRequired,
  renderList: PropTypes.func.isRequired
};

exports.Autocomplete = Autocomplete;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Close = Close;
exports.GridColumn = GridColumn;
exports.GridContainer = GridContainer;
exports.GridRow = GridRow;
exports.Img = Img;
exports.Input = Input$1;
exports.Label = Label;
exports.LazyImg = LazyImg;
exports.Loader = Loader;
exports.Masonry = Masonry;
exports.Modal = Modal;
exports.RecyclerView = RecyclerView;
exports.Ripple = Ripple;
exports.Select = Select;
exports.Toastr = Toastr;
exports.Utils = Utils;
//# sourceMappingURL=main.js.map
