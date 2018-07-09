"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridContainerErrorTest = exports.GridContainerSuccessTest = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("./");

var _2 = _interopRequireDefault(_);

var _GridRow = require("../GridRow");

var _GridRow2 = _interopRequireDefault(_GridRow);

var _GridColumn = require("../GridColumn");

var _GridColumn2 = _interopRequireDefault(_GridColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridContainerSuccessTest = function GridContainerSuccessTest() {
  return _react2.default.createElement(
    _2.default,
    null,
    _react2.default.createElement(
      _GridRow2.default,
      null,
      _react2.default.createElement(
        _GridColumn2.default,
        null,
        "Hello"
      )
    )
  );
};

var GridContainerErrorTest = function GridContainerErrorTest() {
  return _react2.default.createElement(
    _2.default,
    null,
    _react2.default.createElement(
      "div",
      null,
      "Hello"
    )
  );
};

exports.GridContainerSuccessTest = GridContainerSuccessTest;
exports.GridContainerErrorTest = GridContainerErrorTest;