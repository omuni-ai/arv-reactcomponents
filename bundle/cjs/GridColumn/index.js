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

var GridColumn = function (_PureComponent) {
  _inherits(GridColumn, _PureComponent);

  function GridColumn() {
    _classCallCheck(this, GridColumn);

    return _possibleConstructorReturn(this, (GridColumn.__proto__ || Object.getPrototypeOf(GridColumn)).apply(this, arguments));
  }

  _createClass(GridColumn, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var childNodes = this.colRef.childNodes;

      _jsUtils2.default.requestAnimationFrame(function () {
        childNodes.forEach(function (item) {
          if (/(^|\s)nwc-grid-col($|[\s])/.test(item.className)) {
            throw Error("`GridColumn` cannot have `GridColumn` as immediate child. \n            Use `GridRow` inbetween when nesting two columns.");
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          otherProps = _objectWithoutProperties(_props, ["className", "children"]);

      return _react2.default.createElement(
        "div",
        _extends({
          className: "nwc-grid-col " + className
        }, otherProps, {
          ref: function ref(context) {
            _this2.colRef = context;
          }
        }),
        children
      );
    }
  }]);

  return GridColumn;
}(_react.PureComponent);

GridColumn.defaultProps = {
  className: ""
};

GridColumn.propTypes = {
  className: _propTypes2.default.string, // eslint-disable-line react/no-typos
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.element), _propTypes2.default.element, _propTypes2.default.string]).isRequired
};

exports.default = GridColumn;