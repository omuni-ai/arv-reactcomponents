"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RippleTest() {
  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      _.Ripple,
      { className: "nwc-ripple-dark" },
      _react2.default.createElement(
        _.Button,
        { className: "nwc-btn-secondary" },
        "Button with Dark Ripple"
      )
    ),
    _react2.default.createElement(
      _.Ripple,
      { className: "nwc-ripple-light" },
      _react2.default.createElement(
        _.Button,
        { className: "nwc-btn-dark-background" },
        "Button with light Ripple"
      )
    )
  );
}

exports.default = RippleTest;