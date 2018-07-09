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
    var input = wrapper.find("#select-test input.nwc-inp");

    var list = void 0;

    input.simulate("focus");

    setTimeout(function () {
      list = wrapper.find("#select-test .nwc-select-list-container");
      expect(list.length).toBe(1);

      input.simulate("blur");

      setTimeout(function () {
        list = wrapper.find("#select-test .nwc-select-list-container");
        expect(list.length).toBe(1);
        done();
      }, 300);
    }, 200);
  });

  it("List Item Click", function (done) {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
    var input = wrapper.find("#select-test input.nwc-inp");

    input.simulate("focus");

    setTimeout(function () {
      var list = wrapper.find("#select-test .nw-sample-select-list");
      var firstItem = list.at(0);

      firstItem.simulate("click");

      expect(wrapper.instance().state.selectSelectedValue).toBe("Delhi");
      done();
    }, 200);
  });
});