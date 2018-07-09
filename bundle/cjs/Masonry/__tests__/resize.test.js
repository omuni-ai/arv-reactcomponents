"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  var windowInnerWidth = global.window.innerWidth;
  beforeEach(function () {
    (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
  });

  it("Resize cols adjust properly", function (done) {
    setTimeout(function () {
      global.window.innerWidth = 1201;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  it("Resize cols adjust properly", function (done) {
    setTimeout(function () {
      global.window.innerWidth = 993;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  it("Resize cols adjust properly", function (done) {
    setTimeout(function () {
      global.window.innerWidth = 769;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  it("Resize cols adjust properly", function (done) {
    setTimeout(function () {
      global.window.innerWidth = 500;
      global.window.dispatchEvent(new Event("resize"));
      setTimeout(done, 300);
    }, 600);
  });

  afterEach(function () {
    global.window.innerWidth = windowInnerWidth;
  });
});