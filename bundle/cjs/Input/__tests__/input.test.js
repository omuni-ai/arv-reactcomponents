"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  it("Input check if validation works", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("#sample-text-input").find("input");

    input.simulate("change", { target: { value: "A" } });

    input.simulate("change", { target: { value: "" } });

    input.simulate("change", { target: { value: 1 } });
  });

  it("Input checkbox lable click", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input#sample-checkbox");

    input.simulate("change");
  });

  it("Input checkbox input change", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input#sample-checkbox");

    input.simulate("keydown");
  });

  it("Input radio lable click", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input#sample-radio");

    input.simulate("change", {
      key: "A"
    });
  });

  it("Input radio input change", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input#sample-radio");

    input.simulate("keydown");
  });

  it("Input number value change check without maxLength", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input#sample-number-nomaxlength");

    input.simulate("change", {
      key: 1234
    });

    input.simulate("change", {
      key: 567
    });
  });

  it("Input number value change check with maxLength", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input#sample-number");

    input.simulate("change", {
      key: 1234
    });

    input.simulate("change", {
      key: 567
    });
  });
});