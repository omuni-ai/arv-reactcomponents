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

var _Input = require("../Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import for Page


var BLOCK_VIRTUAL_KEYBOARD = window.innerWidth <= 768;

var Select = function (_PureComponent) {
  _inherits(Select, _PureComponent);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      inpVal: "",
      isActive: false,
      selectedListIndex: props.selectedIndex
    };

    _this.inputId = "" + Math.round(Math.random() * Math.pow(10, 10));
    _this.blurTimeoutId = null;
    _this.inputTimeoutId = null;
    _this.navigateTimeoutId = null;
    _this.listNode = [];
    _this.listNodeItem = [];

    _this.onInpValChange = _this.onInpValChange.bind(_this);
    _this.onInpFocus = _this.onInpFocus.bind(_this);
    _this.onInpBlur = _this.onInpBlur.bind(_this);
    _this.renderListItems = _this.renderListItems.bind(_this);
    _this.toggleDisplay = _this.toggleDisplay.bind(_this);
    _this.selectAndHideList = _this.selectAndHideList.bind(_this);
    _this.onUserInput = _this.onUserInput.bind(_this);
    _this.scrollHighlightedElemInView = _this.scrollHighlightedElemInView.bind(_this);
    return _this;
  }

  _createClass(Select, [{
    key: "onInpValChange",
    value: function onInpValChange(e) {
      var _this2 = this;

      var inpVal = e.target.value;
      var regXSearchItemStartsWith = new RegExp("^" + inpVal, "i");
      var selectedListIndex = 0;

      this.props.inpList.find(function (item, index) {
        var testAgainst = item[_this2.props.compareProp] || item;

        if (inpVal && inpVal.length > 0 && regXSearchItemStartsWith.test(testAgainst)) {
          selectedListIndex = index;
          return true;
        }

        return false;
      });

      this.setState({
        inpVal: inpVal,
        selectedListIndex: selectedListIndex
      });

      clearTimeout(this.inputTimeoutId);
      this.inputTimeoutId = setTimeout(function () {
        _this2.setState({
          inpVal: ""
        });
      }, 800);
    }
  }, {
    key: "onInpFocus",
    value: function onInpFocus() {
      var isActive = this.state.isActive;

      this.toggleDisplay(!isActive);
      clearTimeout(this.blurTimeoutId);
    }
  }, {
    key: "onInpBlur",
    value: function onInpBlur() {
      var _this3 = this;

      this.blurTimeoutId = setTimeout(function () {
        _this3.toggleDisplay(false);
      }, 200);
    }
  }, {
    key: "onUserInput",
    value: function onUserInput(e) {
      var _this4 = this;

      _jsUtils2.default.preventEventPropagation(e);
      var listNodeLength = Object.keys(this.listNode).length - 1;
      var isActive = true;
      var selectedListIndex = this.state.selectedListIndex;


      switch (e.key) {
        case "ArrowUp":
          _jsUtils2.default.preventDefault(e);
          selectedListIndex = this.state.selectedListIndex > 0 ? this.state.selectedListIndex - 1 : listNodeLength;
          break;
        case "ArrowDown":
          selectedListIndex = listNodeLength !== 0 && this.state.selectedListIndex < listNodeLength ? this.state.selectedListIndex + 1 : 0;
          break;
        case "ArrowRight":
        case "ArrowLeft":
          break;
        case "Enter":
          _jsUtils2.default.preventDefault(e);
          isActive = false;
          this.selectAndHideList(this.state.selectedListIndex);
          return;
        case "Tab":
          isActive = false;
          this.selectAndHideList(this.state.selectedListIndex);
          return;
        default:
          selectedListIndex = 0;
      }

      this.setState({
        selectedListIndex: selectedListIndex,
        isActive: isActive
      }, function () {
        _this4.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "scrollHighlightedElemInView",
    value: function scrollHighlightedElemInView() {
      _jsUtils2.default.scrollElemToView(this.listNodeWrapperRef, this.listNode["item-" + this.state.selectedListIndex]);
    }
  }, {
    key: "selectAndHideList",
    value: function selectAndHideList(index) {
      if (index === -1) {
        return;
      }
      this.props.getSelection(this.listNodeItem[index]);
      this.setState({
        selectedListIndex: index,
        isActive: false
      });
    }
  }, {
    key: "toggleDisplay",
    value: function toggleDisplay(bool) {
      var _this5 = this;

      this.setState({
        isActive: bool
      }, function () {
        _this5.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "renderListItems",
    value: function renderListItems(inpVal, inpList, renderList) {
      var _this6 = this;

      this.listNode = [];

      var list = inpList.map(function (item, index) {
        var elem = renderList(item);

        if (!elem) {
          return null;
        }

        var onClickFn = elem.props.onClick || _jsUtils2.default.noop;
        var addClass = "";
        if (index === _this6.state.selectedListIndex) {
          addClass = "is-active";
        }
        _this6.listNodeItem[index] = item;
        return (0, _react.cloneElement)(elem, {
          className: (elem.props.className || "") + " " + addClass,
          ref: function ref(context) {
            _this6.listNode["item-" + index] = context;
          },
          onClick: function onClick(e) {
            onClickFn(e);
            _this6.selectAndHideList(index);
          }
        });
      });

      return this.state.isActive ? _react2.default.createElement(
        "ul",
        {
          className: "nwc-select-list-container",
          ref: function ref(context) {
            _this6.listNodeWrapperRef = context;
          }
        },
        list
      ) : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var inpVal = this.state.inpVal;

      var _props = this.props,
          id = _props.id,
          className = _props.className,
          selectedValue = _props.selectedValue,
          inpList = _props.inpList,
          getSelection = _props.getSelection,
          renderList = _props.renderList,
          compareProp = _props.compareProp,
          selectedIndex = _props.selectedIndex,
          otherProps = _objectWithoutProperties(_props, ["id", "className", "selectedValue", "inpList", "getSelection", "renderList", "compareProp", "selectedIndex"]);

      return _react2.default.createElement(
        "div",
        { className: "nwc-select-container " + className },
        _react2.default.createElement(
          _Label2.default,
          _extends({
            className: "nwc-select",
            htmlFor: id || this.inputId
          }, otherProps),
          selectedValue[compareProp] || selectedValue,
          _react2.default.createElement(_Input2.default, {
            id: id || this.inputId,
            className: "nwc-inp-hide nwc-inp-dash nwc-inp-sm",
            placeholder: "Enter text",
            value: inpVal,
            onChange: this.onInpValChange,
            onKeyDown: this.onUserInput,
            onFocus: this.onInpFocus,
            onBlur: this.onInpBlur,
            ref: function ref(context) {
              _this7.inputRef = context;
            },
            readOnly: BLOCK_VIRTUAL_KEYBOARD
          }),
          _react2.default.createElement("i", { className: "icomoon-arrow_bottom nwc-select-arrowbottom" })
        ),
        this.renderListItems(inpVal, inpList, renderList)
      );
    }
  }]);

  return Select;
}(_react.PureComponent);

Select.defaultProps = {
  id: null,
  className: "",
  selectedIndex: 0,
  getSelection: _jsUtils2.default.noop,
  compareProp: undefined
};

Select.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  selectedIndex: _propTypes2.default.number,
  selectedValue: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string, _propTypes2.default.number]).isRequired,
  inpList: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.object), _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,
  getSelection: _propTypes2.default.func,
  renderList: _propTypes2.default.func.isRequired,
  compareProp: _propTypes2.default.string
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

exports.default = Select;