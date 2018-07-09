"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Close = require("../Close");

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ToastrList(props) {
  var item = props.item,
      hideToastr = props.hideToastr,
      otherProps = _objectWithoutProperties(props, ["item", "hideToastr"]);

  return _react2.default.createElement(
    "li",
    _extends({
      key: "toastr-" + item.id,
      className: "nwc-toastr-list " + item.className
    }, otherProps),
    _react2.default.createElement(_Close2.default, {
      className: "nwc-close-sm",
      onClick: function onClick() {
        hideToastr(item);
      }
    }),
    item.message
  );
}

ToastrList.propTypes = {
  item: _propTypes2.default.shape({
    id: _propTypes2.default.string.isRequired,
    className: _propTypes2.default.string,
    message: _propTypes2.default.string.isRequired
  }).isRequired,
  hideToastr: _propTypes2.default.func.isRequired
};

exports.default = ToastrList;