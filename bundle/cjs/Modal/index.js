"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ModalContainer = require("../ModalContainer");

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

var _methods = require("./methods");

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Modal(props) {
  var isOpen = props.isOpen,
      otherProps = _objectWithoutProperties(props, ["isOpen"]);

  if (isOpen) {
    return _reactDom2.default.createPortal(_react2.default.createElement(_ModalContainer2.default, otherProps), document.querySelector(".nwc-modal-holder"));
  }
  return null;
}

(0, _methods2.default)();

Modal.isModalOpen = _ModalContainer2.default.isModalOpen;
Modal.propTypes = {
  isOpen: _propTypes2.default.bool.isRequired
};

exports.default = Modal;