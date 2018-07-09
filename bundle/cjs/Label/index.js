"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Label(props) {
  var htmlFor = props.htmlFor,
      children = props.children,
      otherProps = _objectWithoutProperties(props, ["htmlFor", "children"]);

  return _react2.default.createElement(
    "label",
    _extends({ htmlFor: htmlFor }, otherProps),
    _react2.default.createElement("input", { type: "hidden" }),
    children
  );
}

Label.defaultProps = {
  children: ""
};

Label.propTypes = {
  htmlFor: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node
};

exports.default = Label;