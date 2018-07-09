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

var _jsUtils = require("../_jsUtils");

var _jsUtils2 = _interopRequireDefault(_jsUtils);

var _Label = require("../Label");

var _Label2 = _interopRequireDefault(_Label);

var _methods = require("./methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import for Page


var Input = function (_PureComponent) {
  _inherits(Input, _PureComponent);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.getValidatedOutput = _this.getValidatedOutput.bind(_this);
    _this.inputId = "" + Math.round(Math.random() * Math.pow(10, 10));
    return _this;
  }

  _createClass(Input, [{
    key: "getValidatedOutput",
    value: function getValidatedOutput(value) {
      var _props = this.props,
          type = _props.type,
          maxLength = _props.maxLength,
          validateWithPattern = _props.validateWithPattern;


      var newValue = (0, _methods.restrictVal)(value, type, maxLength);

      var isValidObj = (0, _methods.validateValue)(newValue, validateWithPattern);
      var isValid = isValidObj.isValid,
          errorMsg = isValidObj.errorMsg;


      return {
        value: newValue,
        isValid: isValid,
        errorMsg: errorMsg
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          type = _props2.type,
          inputRef = _props2.inputRef,
          validateWithPattern = _props2.validateWithPattern,
          otherProps = _objectWithoutProperties(_props2, ["id", "className", "type", "inputRef", "validateWithPattern"]);

      if (!this.isCheckTypes) {
        return _react2.default.createElement("input", _extends({
          id: id || this.inputId,
          className: "nwc-inp  " + className,
          type: type,
          tabIndex: "0",
          ref: inputRef
        }, otherProps));
      }

      return _react2.default.createElement(
        _Label2.default,
        { className: "nwc-inp-container", htmlFor: id || this.inputId },
        _react2.default.createElement(
          "span",
          { className: "nwc-inp-hiddenwrapper" },
          _react2.default.createElement("input", _extends({
            id: id || this.inputId,
            type: type,
            tabIndex: "0",
            ref: inputRef
          }, otherProps))
        ),
        _react2.default.createElement("i", { className: "" + this.cloneClassName })
      );
    }
  }, {
    key: "cloneClassName",
    get: function get() {
      var _props3 = this.props,
          type = _props3.type,
          checked = _props3.checked,
          disabled = _props3.disabled,
          className = _props3.className;

      var isCheckedClass = checked ? "is-checked" : "";
      var isDisabled = disabled ? "is-disabled" : "";
      var additionalClasses = className + " " + isCheckedClass + " " + isDisabled;
      switch (type) {
        case "checkbox":
          return "nwc-inp-checkbox " + additionalClasses;
        case "radio":
          return "nwc-inp-radio " + additionalClasses;
        /* istanbul ignore next */
        default:
          return "";
      }
    }
  }, {
    key: "isCheckTypes",
    get: function get() {
      var type = this.props.type;

      switch (type) {
        case "checkbox":
        case "radio":
          return true;
        default:
          return false;
      }
    }
  }]);

  return Input;
}(_react.PureComponent);

Input.defaultProps = {
  id: null,
  name: null,
  className: "",
  type: "text",
  placeholder: null,
  value: null,
  checked: null,
  maxLength: null,
  inputRef: _jsUtils2.default.noop,
  disabled: false,
  validateWithPattern: null
};

Input.propTypes = {
  id: _propTypes2.default.string,
  name: _jsUtils2.default.customPropTypes.Input, // eslint-disable-line react/no-typos
  className: _propTypes2.default.string,
  type: _propTypes2.default.string,
  placeholder: _jsUtils2.default.customPropTypes.Input, // eslint-disable-line react/no-typos
  value: _jsUtils2.default.customPropTypes.Input, // eslint-disable-line react/no-typos
  checked: _jsUtils2.default.customPropTypes.Input, // eslint-disable-line react/no-typos
  onChange: _propTypes2.default.func.isRequired,
  maxLength: _propTypes2.default.number,
  inputRef: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  validateWithPattern: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    pattern: _propTypes2.default.instanceOf(RegExp),
    msg: _propTypes2.default.string
  }))
};

exports.default = Input;