"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  test("On Button Click", function (done) {
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));

    mounted.find("button.nwc-btn-secondary").simulate("click");

    setTimeout(done, 100);
  });
});