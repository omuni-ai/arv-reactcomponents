"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  it("Allows Input", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("change", { target: { value: "A" } });
    input.simulate("keyDown", {
      key: "A"
    });

    expect(input.instance().value).toBe("A");
  });

  it("On Enter Select Value", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("change", { target: { value: "Arr" } });
    input.simulate("keyDown");
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur: function blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        }
      }
    });

    expect(input.instance().value).toBe("Arrow");
  });

  it("On ArrowDown Select Value", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    input.simulate("focus");

    input.simulate("keyDown", {
      key: "ArrowDown"
    }).simulate("keyDown", {
      key: "ArrowDown"
    }).simulate("keyDown", {
      key: "ArrowDown"
    }).simulate("keyDown", {
      key: "ArrowDown"
    });

    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur: function blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        }
      }
    });

    expect(input.instance().value).toBe("Arrow");
  });

  it("On ArrowUp Select Value", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("keyDown", {
      key: "ArrowUp"
    }).simulate("keyDown", {
      key: "ArrowUp"
    });
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur: function blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        }
      }
    });

    expect(input.instance().value).toBe("Levis");
  });

  it("No Action on left - right Arrows", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    input.simulate("focus");
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur: function blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        }
      }
    });

    expect(input.instance().value).toBe("");

    input.simulate("focus");
    input.simulate("change", { target: { value: "" } });
    input.simulate("keyDown", {
      key: "ArrowRight"
    });
    input.simulate("keyDown", {
      key: "Enter",
      target: {
        blur: function blur() {
          // Needed since <EditableText /> calls target.blur()
          input.simulate("blur");
        }
      }
    });

    expect(input.instance().value).toBe("");
  });
});