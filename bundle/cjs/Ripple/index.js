"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jsUtils = require("../_jsUtils");

var _jsUtils2 = _interopRequireDefault(_jsUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ripple = function (_PureComponent) {
  _inherits(Ripple, _PureComponent);

  function Ripple(props) {
    _classCallCheck(this, Ripple);

    var _this = _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, props));

    _this.handleClick = _this.handleClick.bind(_this);
    _this.modifyChildren = _this.modifyChildren.bind(_this);
    return _this;
  }

  _createClass(Ripple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeoutId);
    }
  }, {
    key: "modifyChildren",
    value: function modifyChildren(child) {
      var _this2 = this;

      var onClickFn = child.props.onClick || _jsUtils2.default.noop;

      var wrappedElement = _react2.default.createElement(
        _react.Fragment,
        null,
        child.props.children,
        _react2.default.createElement("span", {
          className: "nwc-ripple " + this.props.className,
          ref: function ref(context) {
            _this2.rippleRef = context;
          }
        })
      );

      var clonedElement = (0, _react.cloneElement)(child, {
        className: "nwc-ripple-container " + child.props.className,
        children: wrappedElement,
        onClick: function onClick(e) {
          _this2.handleClick(e);
          onClickFn(e);
        }
      });

      return clonedElement;
    }
  }, {
    key: "toggleRippleClass",
    value: function toggleRippleClass(bool) {
      this.rippleRef.classList.toggle("is-active", bool);
    }
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      var _this3 = this;

      var componentRef = this.rippleRef.parentElement;
      var parentClientRect = _jsUtils2.default.getBoundClientRect(componentRef);
      var child = this.rippleRef;

      var rippleWH = Math.max(parentClientRect.width, parentClientRect.height);
      child.style.height = rippleWH + "px";
      child.style.width = rippleWH + "px";

      var x = e.pageX - parentClientRect.left - rippleWH / 2;
      var y = e.pageY - parentClientRect.top - rippleWH / 2;
      child.style.left = x + "px";
      child.style.top = y + "px";

      this.toggleRippleClass(false);
      this.timeoutId = setTimeout(function () {
        _this3.toggleRippleClass(true);
      }, 100);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.Children.map(this.props.children, this.modifyChildren);
    }
  }]);

  return Ripple;
}(_react.PureComponent);

Ripple.defaultProps = {
  className: ""
};

Ripple.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element]).isRequired
};

exports.default = Ripple;