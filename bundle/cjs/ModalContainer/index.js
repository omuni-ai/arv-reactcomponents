"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require("../constants");

var _Close = require("../Close");

var _Close2 = _interopRequireDefault(_Close);

var _jsUtils = require("../_jsUtils");

var _jsUtils2 = _interopRequireDefault(_jsUtils);

var _methods = require("./methods");

var _methods2 = _interopRequireDefault(_methods);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var modalOpen = false;

var ModalContainer = function (_PureComponent) {
  _inherits(ModalContainer, _PureComponent);

  _createClass(ModalContainer, null, [{
    key: "isModalOpen",
    value: function isModalOpen() {
      return modalOpen;
    }
  }, {
    key: "handleHistoryOnOpen",
    value: function handleHistoryOnOpen() {
      var currentState = window.history.state;
      if (currentState) {
        currentState.modal = true;
        window.history.pushState(currentState, "");
      }
    }
  }]);

  function ModalContainer(props) {
    _classCallCheck(this, ModalContainer);

    var _this = _possibleConstructorReturn(this, (ModalContainer.__proto__ || Object.getPrototypeOf(ModalContainer)).call(this, props));

    _this.onClose = _this.onClose.bind(_this);
    _this.onEscapeClose = _this.onEscapeClose.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(ModalContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      modalOpen = true;
      if (!this.props.preventfix) {
        _jsUtils2.default.fixScroll();
      }

      if (_constants.isMobile) {
        ModalContainer.handleHistoryOnOpen();
      }
      window.addEventListener("popstate", this.closeModal);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      setTimeout(function () {
        modalOpen = false;
      }, 100);
      if (!this.props.preventfix) {
        _jsUtils2.default.unFixScroll();
      }
      window.removeEventListener("popstate", this.closeModal);
    }
  }, {
    key: "onClose",
    value: function onClose(e) {
      var currentState = window.history.state;
      if (_constants.isMobile && currentState && currentState.modal) {
        window.history.back();
      } else {
        this.closeModal(e);
      }
    }
  }, {
    key: "onEscapeClose",
    value: function onEscapeClose(e) {
      _jsUtils2.default.preventEventPropagation(e);
      if (e.key === "Escape") {
        this.onClose(e);
      }
    }
  }, {
    key: "closeModal",
    value: function closeModal(e) {
      var onClose = this.props.onClose;

      onClose(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          onClose = _props.onClose,
          preventfix = _props.preventfix,
          otherProps = _objectWithoutProperties(_props, ["className", "children", "onClose", "preventfix"]);

      return _react2.default.createElement(
        "div",
        _extends({
          role: "button",
          className: "nwc-modal-container " + className,
          tabIndex: 0,
          onClick: this.onClose,
          onKeyDown: this.onEscapeClose,
          ref: _methods2.default
        }, otherProps),
        _react2.default.createElement(
          "div",
          {
            role: "presentation",
            className: "nwc-modal",
            onClick: _jsUtils2.default.preventEventPropagation,
            onKeyDown: null
          },
          _react2.default.createElement(_Close2.default, {
            className: "nwc-close-normal nwc-modal-close",
            onClick: this.onClose
          }),
          _react2.default.createElement(
            "div",
            { className: "nwc-custom-scrollbar nwc-modal-children" },
            children
          )
        )
      );
    }
  }]);

  return ModalContainer;
}(_react.PureComponent);

ModalContainer.defaultProps = {
  className: "",
  preventfix: false
};

ModalContainer.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]).isRequired,
  onClose: _propTypes2.default.func.isRequired,
  preventfix: _propTypes2.default.bool
};

exports.default = ModalContainer;