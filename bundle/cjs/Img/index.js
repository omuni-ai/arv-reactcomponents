"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jsUtils = require("../_jsUtils");

var _jsUtils2 = _interopRequireDefault(_jsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Img(props) {
  var className = props.className,
      src = props.src,
      alt = props.alt,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = _objectWithoutProperties(props, ["className", "src", "alt", "onLoad", "onError"]);

  return _react2.default.createElement("img", _extends({
    className: "nwc-img " + className,
    src: src,
    alt: alt,
    onLoad: onLoad,
    onError: onError
  }, otherProps));
}

Img.defaultProps = {
  className: "",
  alt: "NNNOW",
  src: null,
  onLoad: _jsUtils2.default.noop,
  onError: _jsUtils2.default.noop
};

Img.propTypes = {
  className: _propTypes2.default.string,
  src: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  onLoad: _propTypes2.default.func,
  onError: _propTypes2.default.func
};

exports.default = Img;