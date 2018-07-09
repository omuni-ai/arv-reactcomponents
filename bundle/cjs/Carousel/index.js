"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

var swipeThreshold = 50;

var Carousel = function (_PureComponent) {
  _inherits(Carousel, _PureComponent);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.state = {
      mounted: false
    };

    _this.listNode = [];
    _this.touchStartVals = null;
    _this.touchEndVals = null;
    _this.touchmoveTimeoutId = null;

    _this.scrollToIndex = _this.scrollToIndex.bind(_this);
    _this.onTouchStart = _this.onTouchStart.bind(_this);
    _this.onTouchMove = _this.onTouchMove.bind(_this);
    _this.onTouchEnd = _this.onTouchEnd.bind(_this);
    _this.getDirection = _this.getDirection.bind(_this);
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _jsUtils2.default.requestAnimationFrame(function () {
        _this2.setState({
          mounted: true
        }, function () {
          _this2.scrollToIndex(_this2.props.index);
        });
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.scrollToIndex(nextProps.index, nextProps.animationDuration);
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      var _e$touches = _slicedToArray(e.touches, 1),
          touchVals = _e$touches[0];

      this.touchStartVals = touchVals;
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      if (e.touches.length > 1) {
        return;
      }

      var _e$touches2 = _slicedToArray(e.touches, 1),
          touchVals = _e$touches2[0];

      this.touchEndVals = touchVals;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      if (!this.touchEndVals) {
        return;
      }

      this.props.onSwipe(this.getDirection());

      // Unset touchVals on swipeend
      this.touchStartVals = null;
      this.touchEndVals = null;
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      var _touchStartVals = this.touchStartVals,
          startClientX = _touchStartVals.clientX,
          startClientY = _touchStartVals.clientY;
      var _touchEndVals = this.touchEndVals,
          endClientX = _touchEndVals.clientX,
          endClientY = _touchEndVals.clientY;


      var direction = {
        horizontal: undefined,
        vertical: undefined
      };

      var clientXDiff = Math.abs(endClientX - startClientX);
      var clientYDiff = Math.abs(endClientY - startClientY);

      if (endClientX > startClientX && clientXDiff > swipeThreshold) {
        direction.horizontal = "prev";
      } else if (clientXDiff > swipeThreshold) {
        direction.horizontal = "next";
      }

      if (endClientY > startClientY && clientYDiff > swipeThreshold) {
        direction.vertical = "prev";
      } else if (clientYDiff > swipeThreshold) {
        direction.vertical = "next";
      }

      return direction;
    }
  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(index) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var elem = this.listNode["item-" + index];

      _jsUtils2.default.scrollElemToView(this.parentRef, elem, duration);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var mounted = this.state.mounted;

      var _props = this.props,
          className = _props.className,
          index = _props.index,
          items = _props.items,
          renderItems = _props.renderItems,
          onSwipe = _props.onSwipe,
          animationDuration = _props.animationDuration,
          otherProps = _objectWithoutProperties(_props, ["className", "index", "items", "renderItems", "onSwipe", "animationDuration"]);

      return _react2.default.createElement(
        "div",
        _extends({
          ref: function ref(context) {
            _this3.parentRef = context;
          },
          className: "nwc-carousel " + className,
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd
        }, otherProps),
        mounted && this.renderItemsList
      );
    }
  }, {
    key: "renderItemsList",
    get: function get() {
      var _this4 = this;

      var _props2 = this.props,
          items = _props2.items,
          renderItems = _props2.renderItems;

      var itemsList = items.map(function (item, index) {
        var elem = renderItems(item, index, _this4.parentRef);

        return (0, _react.cloneElement)(elem, {
          ref: function ref(context) {
            _this4.listNode["item-" + index] = context;
          }
        });
      });

      return itemsList;
    }
  }]);

  return Carousel;
}(_react.PureComponent);

Carousel.defaultProps = {
  className: "",
  onSwipe: _jsUtils2.default.noop,
  animationDuration: 600
};

Carousel.propTypes = {
  className: _propTypes2.default.string,
  index: _propTypes2.default.number.isRequired,
  animationDuration: _propTypes2.default.number,
  items: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.shape({})), _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,
  renderItems: _propTypes2.default.func.isRequired,
  onSwipe: _propTypes2.default.func
};

exports.default = Carousel;