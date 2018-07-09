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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    _classCallCheck(this, Autocomplete);

    var _this = _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call(this, props));

    _this.state = {
      selectedListIndex: props.selectedIndex,
      isActive: false
    };

    _this.navigateTimeoutId = null;
    _this.listNode = [];
    _this.listNodeItem = [];

    _this.renderInput = _this.renderInput.bind(_this);
    _this.renderListItems = _this.renderListItems.bind(_this);
    _this.toggleDisplay = _this.toggleDisplay.bind(_this);
    _this.selectAndHideList = _this.selectAndHideList.bind(_this);
    _this.onUserInput = _this.onUserInput.bind(_this);
    _this.scrollHighlightedElemInView = _this.scrollHighlightedElemInView.bind(_this);
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "onUserInput",
    value: function onUserInput(e) {
      var _this2 = this;

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
        _this2.scrollHighlightedElemInView();
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
      var _this3 = this;

      this.setState({
        isActive: bool
      }, function () {
        _this3.scrollHighlightedElemInView();
      });
    }
  }, {
    key: "renderListItems",
    value: function renderListItems(inpVal, inpList, renderList) {
      var _this4 = this;

      var minTextLength = this.props.minTextLength;


      this.listNode = [];

      var filteredList = inpList.filter(function (item) {
        return item.toLowerCase().indexOf(inpVal && inpVal.toLowerCase() || "") > -1;
      });

      var list = filteredList.map(function (item, index) {
        var elem = renderList(item);

        if (!elem) {
          return null;
        }

        var onClickFn = elem.props.onClick || _jsUtils2.default.noop;
        var addClass = "";
        if (index === _this4.state.selectedListIndex) {
          addClass = "is-active";
        }
        _this4.listNodeItem[index] = item;
        return (0, _react.cloneElement)(elem, {
          className: (elem.props.className || "") + " " + addClass,
          ref: function ref(context) {
            _this4.listNode["item-" + index] = context;
          },
          onClick: function onClick(e) {
            onClickFn(e);
            _this4.selectAndHideList(index);
          }
        });
      });

      return this.state.isActive && filteredList.length > 0 && inpVal.length >= minTextLength ? _react2.default.createElement(
        "ul",
        {
          className: "nwc-autocomplete-list-container",
          ref: function ref(context) {
            _this4.listNodeWrapperRef = context;
          }
        },
        list
      ) : null;
    }
  }, {
    key: "renderInput",
    value: function renderInput(elem) {
      var _this5 = this;

      var id = elem.props.id;

      var onKeyDownFn = elem.props.onKeyDown || _jsUtils2.default.noop;
      var onFocusFn = elem.props.onFocus || _jsUtils2.default.noop;
      var onBlurFn = elem.props.onBlur || _jsUtils2.default.noop;

      return (0, _react.cloneElement)(elem, {
        id: id || this.inputId,
        onKeyDown: function onKeyDown(e) {
          onKeyDownFn(e);
          _this5.onUserInput(e);
        },
        onFocus: function onFocus(e) {
          onFocusFn(e);
          _this5.toggleDisplay(true);
        },
        onBlur: function onBlur(e) {
          onBlurFn(e);
          setTimeout(function () {
            _this5.toggleDisplay(false);
          }, 300);
        },
        ref: function ref(context) {
          _this5.inputNode = context;
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inpList = _props.inpList,
          getSelection = _props.getSelection,
          renderInput = _props.renderInput,
          renderList = _props.renderList,
          minTextLength = _props.minTextLength,
          selectedIndex = _props.selectedIndex,
          otherProps = _objectWithoutProperties(_props, ["className", "inpList", "getSelection", "renderInput", "renderList", "minTextLength", "selectedIndex"]);

      var elem = renderInput();

      return _react2.default.createElement(
        "div",
        _extends({ className: "nwc-autocomplete " + className }, otherProps),
        this.renderInput(elem),
        this.renderListItems(elem.props.value, inpList, renderList)
      );
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.defaultProps = {
  className: "",
  selectedIndex: 0,
  getSelection: _jsUtils2.default.noop,
  minTextLength: 0
};

Autocomplete.propTypes = {
  className: _propTypes2.default.string,
  selectedIndex: _propTypes2.default.number,
  inpList: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,
  getSelection: _propTypes2.default.func,
  renderInput: _propTypes2.default.func.isRequired,
  renderList: _propTypes2.default.func.isRequired,
  minTextLength: _propTypes2.default.number
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

exports.default = Autocomplete;