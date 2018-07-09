"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import common components


var AutocompleteTest = function (_Component) {
  _inherits(AutocompleteTest, _Component);

  _createClass(AutocompleteTest, null, [{
    key: "getList",
    value: function getList(item) {
      if (item === "Hidden") {
        return null;
      }

      return _react2.default.createElement(
        "li",
        { className: "autocomplete-listitems", key: item },
        item
      );
    }
  }]);

  function AutocompleteTest(props) {
    _classCallCheck(this, AutocompleteTest);

    var _this = _possibleConstructorReturn(this, (AutocompleteTest.__proto__ || Object.getPrototypeOf(AutocompleteTest)).call(this, props));

    _this.state = {
      autocompleteInputValue: "",
      inpList: ["Arrow", "Levis", "Hidden", "Gap"]
    };

    _this.onInpValChange = _this.onInpValChange.bind(_this);
    _this.getInput = _this.getInput.bind(_this);
    _this.getAutocompleteSelection = _this.getAutocompleteSelection.bind(_this);
    return _this;
  }

  _createClass(AutocompleteTest, [{
    key: "onInpValChange",
    value: function onInpValChange(e) {
      this.setState({
        autocompleteInputValue: e.target.value
      });
    }
  }, {
    key: "getAutocompleteSelection",
    value: function getAutocompleteSelection(selectedValue) {
      this.setState({
        autocompleteInputValue: selectedValue
      });
    }
  }, {
    key: "getInput",
    value: function getInput() {
      var autocompleteInputValue = this.state.autocompleteInputValue;


      return _react2.default.createElement(_.Input, {
        id: "autocomplete-input",
        placeholder: "Enter text",
        value: autocompleteInputValue,
        onChange: this.onInpValChange
      });
    }
  }, {
    key: "render",
    value: function render() {
      var inpList = this.state.inpList;


      return _react2.default.createElement(_.Autocomplete, {
        selectedIndex: -1,
        inpList: inpList,
        getSelection: this.getAutocompleteSelection,
        renderInput: this.getInput,
        renderList: AutocompleteTest.getList
      });
    }
  }]);

  return AutocompleteTest;
}(_react.Component);

exports.default = AutocompleteTest;