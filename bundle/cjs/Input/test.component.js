"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import common components


var InputTest = function (_Component) {
  _inherits(InputTest, _Component);

  function InputTest(props) {
    _classCallCheck(this, InputTest);

    var _this = _possibleConstructorReturn(this, (InputTest.__proto__ || Object.getPrototypeOf(InputTest)).call(this, props));

    _this.state = {
      isValidateInputValid: true,
      validateInputValue: "",
      validateInputErrorMsg: "",
      checkboxChecked: false,
      radioChecked: false,
      inputNumber: ""
    };

    _this.validateInputChange = _this.validateInputChange.bind(_this);
    _this.changeNumber1 = _this.changeNumber1.bind(_this);
    _this.changeNumber = _this.changeNumber.bind(_this);
    _this.toggleValue = _this.toggleValue.bind(_this);
    return _this;
  }

  _createClass(InputTest, [{
    key: "validateInputChange",
    value: function validateInputChange(e) {
      var validateOutput = this.validateInputRef.getValidatedOutput(e.target.value);
      this.setState({
        isValidateInputValid: validateOutput.isValid,
        validateInputValue: validateOutput.value,
        validateInputErrorMsg: validateOutput.errorMsg
      });
    }
  }, {
    key: "changeNumber1",
    value: function changeNumber1(e) {
      var validateOutput = this.validateNumberRef1.getValidatedOutput(e.target.value);
      this.setState({
        isValidateInputValid: validateOutput.isValid,
        validateInputValue: validateOutput.value,
        validateInputErrorMsg: validateOutput.errorMsg
      });
    }
  }, {
    key: "changeNumber",
    value: function changeNumber(e) {
      var validateOutput = this.validateNumberRef.getValidatedOutput(e.target.value);
      this.setState({
        isValidateInputValid: validateOutput.isValid,
        validateInputValue: validateOutput.value,
        validateInputErrorMsg: validateOutput.errorMsg
      });
    }
  }, {
    key: "toggleValue",
    value: function toggleValue(e, stateProp) {
      if (e.key && e.key !== "Enter") {
        return;
      }
      this.setState(_defineProperty({}, stateProp, !this.state[stateProp]));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          validateInputValue = _state.validateInputValue,
          validateInputErrorMsg = _state.validateInputErrorMsg,
          checkboxChecked = _state.checkboxChecked,
          radioChecked = _state.radioChecked,
          inputNumber = _state.inputNumber;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_.Input, {
          id: "sample-text-input",
          className: "" + this.errorClass,
          placeholder: "Enter between [1-5]",
          value: validateInputValue,
          onChange: this.validateInputChange,
          ref: function ref(c) {
            _this2.validateInputRef = c;
          },
          maxLength: 6,
          validateWithPattern: [{
            pattern: /^((\d+)*)?$/,
            msg: "Value must be a number"
          }, {
            pattern: /^(([1-5]+)*)?$/,
            msg: "Between 1-5"
          }]
        }),
        _react2.default.createElement(
          "div",
          null,
          validateInputErrorMsg
        ),
        _react2.default.createElement(_.Input, {
          id: "sample-checkbox",
          name: "sampleCheckbox",
          type: "checkbox",
          value: "0",
          checked: checkboxChecked,
          className: "" + this.errorClass,
          onChange: function onChange(e) {
            _this2.toggleValue(e, "checkboxChecked");
          },
          onKeyDown: function onKeyDown(e) {
            _this2.toggleValue(e, "checkboxChecked");
          }
        }),
        _react2.default.createElement(_.Input, {
          id: "sample-radio",
          name: "sampleRadio",
          type: "radio",
          value: "0",
          checked: radioChecked,
          className: "" + this.errorClass,
          onChange: function onChange(e) {
            _this2.toggleValue(e, "radioChecked");
          },
          onKeyDown: function onKeyDown(e) {
            _this2.toggleValue(e, "radioChecked");
          }
        }),
        _react2.default.createElement(_.Input, {
          id: "sample-number-nomaxlength",
          name: "sampleNumber",
          type: "number",
          value: inputNumber,
          className: "" + this.errorClass,
          onChange: this.changeNumber1,
          ref: function ref(c) {
            _this2.validateNumberRef1 = c;
          }
        }),
        _react2.default.createElement(_.Input, {
          id: "sample-number",
          name: "sampleNumber",
          type: "number",
          value: inputNumber,
          className: "" + this.errorClass,
          onChange: this.changeNumber,
          ref: function ref(c) {
            _this2.validateNumberRef = c;
          },
          maxLength: 5
        })
      );
    }
  }, {
    key: "errorClass",
    get: function get() {
      return !this.state.isValidateInputValid ? "is-invalid" : "";
    }
  }]);

  return InputTest;
}(_react.Component);

exports.default = InputTest;