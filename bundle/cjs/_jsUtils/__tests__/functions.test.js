"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _ = require("../");

var _2 = _interopRequireDefault(_);

var _constants = require("../../constants");

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rAF = global.window.requestAnimationFrame;
var cAF = global.window.cancelAnimationFrame;
var rIC = global.window.requestIdleCallback;
var cIC = global.window.cancelIdleCallback;

var mockGetBoundClientRect = function mockGetBoundClientRect(top, right, bottom, left, width, height) {
  return function () {
    return {
      top: top,
      right: right,
      bottom: bottom,
      left: left,
      width: width,
      height: height
    };
  };
};

describe("fixScroll", function () {
  test("Window Fix and Unfix", function () {
    global.window.scrollY = 300;

    _2.default.fixScroll();
    _2.default.unFixScroll();
  });
});

describe("getBoundClientRect", function () {
  test("Empty object passed", function () {
    expect(_2.default.getBoundClientRect()).toBe(null);
  });
});

describe("isTouch function", function () {
  test("istouch test", function () {
    expect(_2.default.isTouch({
      sourceCapabilities: {
        firesTouchEvents: true
      }
    })).toBe(false);

    global.window.onmsgesturechange = jest.fn();

    expect(_2.default.isTouch({
      sourceCapabilities: {
        firesTouchEvents: true
      }
    })).toBe(true);

    global.window.ontouchstart = jest.fn();

    expect(_2.default.isTouch({
      sourceCapabilities: {
        firesTouchEvents: true
      }
    })).toBe(true);
  });
});

describe("localstorage", function () {
  global.console.warning = jest.fn();
  global.console.debug = jest.fn();

  test("Test Methods", function () {
    _2.default.localStorage.removeItem("key");
    expect(_2.default.localStorage.getItem("key")).toBe(null);
    _2.default.localStorage.setItem("key", "value");
    expect(_2.default.localStorage.getItem("key")).toBe("value");
    _2.default.localStorage.removeItem("key");
    expect(_2.default.localStorage.getItem("key")).toBe(null);
    _2.default.localStorage.setItem("key", "value");

    constants.localStorage = null;
    _2.default.localStorage.setItem("key", "value");
    _2.default.localStorage.getItem();
    _2.default.localStorage.getItem("key");
  });
});

describe("onElementScroll", function () {
  test("Modal open and close", function (done) {
    _2.default.onElementScroll(window, jest.fn());

    global.window.scrollY = 300;

    _2.default.fixScroll();
    global.window.dispatchEvent(new Event("scroll"));

    setTimeout(function () {
      _2.default.unFixScroll();
      global.window.dispatchEvent(new Event("scroll"));

      done();
    }, 300);
  });

  test("Window scroll test", function (done) {
    _2.default.onElementScroll(window, jest.fn());

    setTimeout(function () {
      global.window.pageYOffset = 300;
      global.window.dispatchEvent(new Event("scroll"));

      setTimeout(function () {
        global.window.pageYOffset = 100;
        global.window.dispatchEvent(new Event("scroll"));

        setTimeout(function () {
          done();
        }, 100);
      }, 100);
    }, 100);
  });
});

describe("polyfill", function () {
  test("polyfill", function () {
    _2.default.polyfill();
  });

  afterAll(function () {
    global.window.requestAnimationFrame = rAF;
    global.window.cancelAnimationFrame = cAF;
    global.window.requestIdleCallback = rIC;
    global.window.cancelIdleCallback = cIC;
  });
});

describe("animationFrame", function () {
  test("requestAnimationFrame", function (done) {
    var mockFn = jest.fn(function () {
      return 123123123;
    });

    var requestId = _2.default.requestAnimationFrame(mockFn);
    _2.default.cancelAnimationFrame(requestId);

    _2.default.requestAnimationFrame(mockFn);

    constants.windowRequestAnimationFrame = null;
    _2.default.requestAnimationFrame(mockFn);

    constants.vendorRequestAnimationFrame = jest.fn(function () {
      mockFn();
    });
    _2.default.requestAnimationFrame(mockFn);

    setTimeout(function () {
      expect(mockFn).toHaveBeenCalledTimes(3);

      done();
    }, 300);
  });
});

describe("scroll functions", function () {
  var element = void 0;
  var mounted = void 0;
  beforeAll(function () {
    element = _react2.default.createElement(
      "div",
      { className: "nw-parent" },
      _react2.default.createElement(
        "div",
        { className: "nw-child" },
        "child"
      )
    );
    mounted = (0, _enzyme.mount)(element);
  });

  test("scrollElemToTop", function (done) {
    mounted.find(".nw-parent").instance().getBoundingClientRect = mockGetBoundClientRect(10, 0, 0, 10, 300, 300);
    mounted.find(".nw-child").instance().getBoundingClientRect = mockGetBoundClientRect(0, 10, 10, 0, 300, 500);

    _2.default.scrollElemToTop(mounted.find(".nw-parent").instance(), mounted.find(".nw-child").instance());

    _2.default.scrollElemToTop(mounted.find(".nw-parent").instance(), mounted.find(".nw-child").instance(), 300);

    setTimeout(function () {
      done();
    }, 300);
  });

  test("scrollElemToView", function (done) {
    mounted.find(".nw-parent").instance().getBoundingClientRect = mockGetBoundClientRect(300, 300, 300, 300, 300, 300);
    mounted.find(".nw-child").instance().getBoundingClientRect = mockGetBoundClientRect(0, 0, 0, 0, 300, 500);

    _2.default.scrollElemToView(mounted.find(".nw-parent").instance(), mounted.find(".nw-child").instance());

    mounted.find(".nw-child").instance().getBoundingClientRect = mockGetBoundClientRect(1000, 1000, 1000, 1000, 300, 500);

    _2.default.scrollElemToView(mounted.find(".nw-parent").instance(), mounted.find(".nw-child").instance());

    _2.default.scrollElemToView(mounted.find(".nw-parent").instance(), mounted.find(".nw-child").instance(), 300);

    setTimeout(function () {
      done();
    }, 300);
  });

  test("scrollTo", function (done) {
    _2.default.scrollTo(window, 0, 300);

    _2.default.scrollTo(window, 0, 300, 300);

    setTimeout(function () {
      done();
    }, 300);
  });
});

describe("urlMethods", function () {
  test("getUrlParameter", function () {
    expect(_2.default.getUrlParameter("http://www.abc.com?a=1", "a")).toBe("1");
    expect(_2.default.getUrlParameter("http://www.abc.com?a=1", "b")).toBe(undefined);
  });

  test("setUrlParameter", function () {
    expect(_2.default.setUrlParameter("http://www.abc.com", "a", "1")).toBe("http://www.abc.com?a=1");
    expect(_2.default.setUrlParameter("http://www.abc.com?a=1", "a", "2")).toBe("http://www.abc.com?a=2");
  });
});