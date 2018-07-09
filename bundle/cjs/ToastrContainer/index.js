"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ToastrList = require("../ToastrList");

var _ToastrList2 = _interopRequireDefault(_ToastrList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ToastrContainer(props) {
  var toastrList = props.toastrList,
      limitTo = props.limitTo,
      hideToastr = props.hideToastr;

  return _react2.default.createElement(
    "div",
    { role: "button", tabIndex: 0 },
    _react2.default.createElement(
      "ul",
      { className: "nwc-toastrcontainer-list" },
      [].concat(_toConsumableArray(toastrList)).reverse().map(function (item, index) {
        if (index < limitTo) {
          return _react2.default.createElement(_ToastrList2.default, { item: item, key: item.id, hideToastr: hideToastr });
        }

        return null;
      })
    )
  );
}

ToastrContainer.propTypes = {
  toastrList: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  limitTo: _propTypes2.default.number.isRequired,
  hideToastr: _propTypes2.default.func.isRequired
};

exports.default = ToastrContainer;