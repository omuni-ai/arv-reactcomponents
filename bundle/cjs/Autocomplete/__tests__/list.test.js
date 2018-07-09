"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  it("Allows Input", function (done) {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    var list = void 0;

    input.simulate("focus");
    list = wrapper.find(".nwc-autocomplete-list-container");
    expect(list.length).toBe(1);

    input.simulate("blur");

    setTimeout(function () {
      list = wrapper.find(".nwc-autocomplete-list-container");
      expect(list.length).toBe(1);
      done();
    }, 300);
  });

  it("List Item Click", function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("input");

    input.simulate("focus");
    var list = wrapper.find(".autocomplete-listitems");
    var firstItem = list.at(0);

    firstItem.simulate("click");

    expect(input.instance().value).toBe("Arrow");
  });
});