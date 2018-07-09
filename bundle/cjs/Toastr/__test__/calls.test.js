"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _ = require("../");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_2.default.setConfig({
  limitTo: 1
});

describe("Root Component Tests", function () {
  it("Show Toastr With Timeout", function (done) {
    _2.default.showToastr({
      className: "nwc-toastr-list-notification",
      message: "" + Math.round(Math.random() * Math.pow(10, 10)),
      timeout: 3000
    });

    setTimeout(function () {
      _2.default.showToastr({
        className: "nwc-toastr-list-notification",
        message: "" + Math.round(Math.random() * Math.pow(10, 10)),
        timeout: 3000
      });

      setTimeout(function () {
        _2.default.clearAll();
        done();
      }, 2000);
    }, 1000);
  });

  test("Close Click", function () {
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_2.default, null));

    _2.default.showToastr({
      className: "nwc-toastr-list-notification",
      message: "" + Math.round(Math.random() * Math.pow(10, 10)),
      timeout: 3000
    });

    mounted.update();
    mounted.find("button.nwc-close").simulate("click");
  });
});