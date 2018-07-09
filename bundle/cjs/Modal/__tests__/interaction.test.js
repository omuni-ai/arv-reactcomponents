"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

var _ = require("../");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  test("Escape on Close", function (done) {
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));

    mounted.instance().showHaiMsg(true);

    mounted.update();

    mounted.find("div.nwc-modal-container").simulate("keydown", {
      key: "Escape"
    });

    setTimeout(function () {
      expect(_2.default.isModalOpen()).toBe(false);

      done();
    }, 300);
  });
});