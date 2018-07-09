"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  it("Navigation Clicks work", function () {
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var buttonNxt = mounted.find(".nw-carouseltest-btnnext").at(1);
    var buttonPrev = mounted.find(".nw-carouseltest-btnprev").at(1);

    buttonNxt.simulate("click");
    buttonPrev.simulate("click");
  });

  it("Navigation Swipe work", function () {
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var wrapper = mounted.find(".nw-carouselexample").at(1);

    wrapper.simulate("touchstart", {
      touches: [{
        clientX: 0,
        clientY: 0
      }]
    });
    wrapper.simulate("touchmove", {
      touches: [{
        clientX: 51,
        clientY: 51
      }]
    });
    wrapper.simulate("touchend");
    wrapper.simulate("touchend");

    wrapper.simulate("touchstart", {
      touches: [{
        clientX: 51,
        clientY: 51
      }]
    });
    wrapper.simulate("touchmove", {
      touches: [{
        clientX: 0,
        clientY: 0
      }]
    });
    wrapper.simulate("touchend");
  });
});