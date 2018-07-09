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


var SelectExample = function (_Component) {
  _inherits(SelectExample, _Component);

  _createClass(SelectExample, null, [{
    key: "getOneEmptyList",
    value: function getOneEmptyList(item) {
      if (item === "Karnataka") {
        return null;
      }
      return _react2.default.createElement(
        "li",
        { key: item },
        item
      );
    }
  }, {
    key: "getList",
    value: function getList(item) {
      return _react2.default.createElement(
        "li",
        { className: "nw-sample-select-list", key: item },
        item
      );
    }
  }]);

  function SelectExample(props) {
    _classCallCheck(this, SelectExample);

    var _this = _possibleConstructorReturn(this, (SelectExample.__proto__ || Object.getPrototypeOf(SelectExample)).call(this, props));

    var selectList = ["Delhi", "Mumbai", "Gujarat", "Karnataka"];

    _this.state = {
      selectSelectedValue: selectList[0],
      inpList: selectList
    };

    _this.getSelectSelection = _this.getSelectSelection.bind(_this);
    return _this;
  }

  _createClass(SelectExample, [{
    key: "getSelectSelection",
    value: function getSelectSelection(selectedValue) {
      this.setState({
        selectSelectedValue: selectedValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          inpList = _state.inpList,
          selectSelectedValue = _state.selectSelectedValue;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_.Select, {
          selectedIndex: -1,
          id: "select-test",
          selectedValue: selectSelectedValue,
          inpList: inpList,
          getSelection: this.getSelectSelection,
          renderList: SelectExample.getList
        }),
        _react2.default.createElement(_.Select, {
          id: "select1-test",
          className: "nwc-select-secondary",
          selectedValue: selectSelectedValue,
          inpList: inpList,
          getSelection: this.getSelectSelection,
          renderList: SelectExample.getOneEmptyList
        })
      );
    }
  }]);

  return SelectExample;
}(_react.Component);

exports.default = SelectExample;