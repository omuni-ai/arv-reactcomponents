"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Loader(props) {
  var className = props.className;

  return _react2.default.createElement(
    "svg",
    {
      className: "nwc-loader " + className,
      xmlns: "http://www.w3.org/2000/svg",
      width: "200px",
      height: "200px",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "xMidYMid"
    },
    _react2.default.createElement("circle", {
      className: "nwc-loader-circle",
      cx: "50",
      cy: "50",
      fill: "none",
      stroke: "#f2258b",
      strokeWidth: "8",
      r: "35",
      strokeDasharray: "164.93361431346415 56.97787143782138",
      transform: "rotate(313.584 50 50)"
    })
  );
}

Loader.defaultProps = {
  className: ""
};

Loader.propTypes = {
  className: _propTypes2.default.string
};

exports.default = Loader;