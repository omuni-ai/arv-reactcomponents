"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

describe("Root Component Tests", function () {
  var mounted = void 0;
  beforeEach(function () {
    mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
  });

  it("Image index change", function (done) {
    setTimeout(function () {
      mounted.update();

      mounted.instance().changeIndex();

      done();
    }, 300);
  });

  it("Image On Load", function (done) {
    setTimeout(function () {
      mounted.update();

      var image = mounted.find(".nw-carouselexample-img1 img");

      image.simulate("load");

      done();
    }, 300);
  });

  it("Image On Fail", function (done) {
    setTimeout(function () {
      mounted.update();

      var image = mounted.find(".nw-carouselexample-img1 img");

      image.simulate("error");
      done();
    }, 300);
  });

  it("Image in Viewport 1", function (done) {
    mounted.find("div").at(0).instance().getBoundingClientRect = mockGetBoundClientRect(0, 300, 800, 0, 300, 400);
    setTimeout(function () {
      mounted.update();
      mounted.find("div.nw-carouselexample-img3").instance().getBoundingClientRect = mockGetBoundClientRect(301, 298, 398, 1, 298, 398);
      mounted.find("div.nw-carouselexample-img4").instance().getBoundingClientRect = mockGetBoundClientRect(301, 298, 398, 1, 298, 398);

      global.window.dispatchEvent(new Event("scroll"));

      done();
    }, 300);
  });

  it("Image in Viewport 2", function (done) {
    mounted.find("div").at(0).instance().getBoundingClientRect = mockGetBoundClientRect(0, 300, 400, 0, 300, 400);
    setTimeout(function () {
      mounted.update();
      mounted.find("div.nw-carouselexample-img3").instance().getBoundingClientRect = mockGetBoundClientRect(301, 298, 698, 1, 298, 398);
      mounted.find("div.nw-carouselexample-img4").instance().getBoundingClientRect = mockGetBoundClientRect(301, 298, 698, 1, 298, 398);

      global.window.dispatchEvent(new Event("scroll"));

      done();
    }, 300);
  });
});