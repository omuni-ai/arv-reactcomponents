"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _GridContainer = require("../GridContainer");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _ = require("./");

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridRowTest = function GridRowTest() {
  return _react2.default.createElement(
    _GridContainer2.default,
    null,
    _react2.default.createElement(
      _2.default,
      null,
      _react2.default.createElement(
        "div",
        null,
        "Hello"
      )
    )
  );
};

exports.default = GridRowTest;