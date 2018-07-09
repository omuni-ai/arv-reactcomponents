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

var LazyImgRef = [];
var windowScrollVals = _jsUtils2.default.windowScroll();

var LazyImg = function (_PureComponent) {
  _inherits(LazyImg, _PureComponent);

  _createClass(LazyImg, null, [{
    key: "triggerLoad",
    value: function triggerLoad() {
      LazyImgRef.forEach(function (item) {
        var self = item;
        var itemIndex = LazyImgRef.indexOf(self);

        self.setState({
          inView: true
        });

        LazyImgRef.splice(itemIndex, 1);
        self = null;
      });
    }
  }]);

  function LazyImg(props) {
    _classCallCheck(this, LazyImg);

    var _this = _possibleConstructorReturn(this, (LazyImg.__proto__ || Object.getPrototypeOf(LazyImg)).call(this, props));

    _this.state = {
      inView: false,
      isLoaded: false,
      isError: false,
      onWinLoad: props.onWinLoad || false
    };

    _this.removeListener = _jsUtils2.default.noop;
    _this.onLoad = _this.onLoad.bind(_this);
    _this.onError = _this.onError.bind(_this);
    _this.isInViewport = _this.isInViewport.bind(_this);
    _this.isImageInView = _this.isImageInView.bind(_this);
    _this.setContext = _this.setContext.bind(_this);
    _this.calcElemVals = _this.calcElemVals.bind(_this);
    _this.initLazyLoad = _this.initLazyLoad.bind(_this);
    return _this;
  }

  _createClass(LazyImg, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(this.initLazyLoad, 300);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps && nextProps.index !== this.props.index) {
        setTimeout(function () {
          _this2.calcElemVals(_this2.imgContainerRef);
          if (_this2.isImageInView()) {
            _this2.setState({
              inView: true
            });
          }
        }, 300);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeListener();
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      this.setState({
        isLoaded: true
      });

      this.props.onLoad();
    }
  }, {
    key: "onError",
    value: function onError() {
      this.setState({
        isError: true
      });

      this.props.onError();
    }
  }, {
    key: "setContext",
    value: function setContext(context) {
      this.imgContainerRef = context;
    }
  }, {
    key: "calcElemVals",
    value: function calcElemVals(elem) {
      var parentElement = this.props.parentElement;


      this.elementVals = _jsUtils2.default.getBoundClientRect(elem);
      this.parentElementVals = parentElement && _jsUtils2.default.getBoundClientRect(parentElement) || null;
    }
  }, {
    key: "initLazyLoad",
    value: function initLazyLoad() {
      var _this3 = this;

      var src = this.props.src;

      this.calcElemVals(this.imgContainerRef);

      if (this.isImageInView()) {
        this.setState({
          inView: true
        });
      }

      this.removeListener = _jsUtils2.default.onElementScroll(window, function () {
        if (_this3.isImageInView()) {
          var imgClone = document.createElement("img");
          imgClone.src = src;
          LazyImgRef.push(_this3);

          _jsUtils2.default.cancelIdleCallback(LazyImg.triggerLoad);
          _jsUtils2.default.requestIdleCallback(LazyImg.triggerLoad, 300);
          _this3.removeListener();
        }
      }, { passive: true });
    }
  }, {
    key: "isInViewport",
    value: function isInViewport(parentVals, elementVals) {
      var offset = this.props.offset;


      if (!parentVals) {
        return true;
      }

      return elementVals && (elementVals.top - offset > parentVals.top && elementVals.top - offset < parentVals.bottom || elementVals.bottom + offset > parentVals.top && elementVals.bottom + offset < parentVals.bottom || elementVals.top - offset < parentVals.top && elementVals.bottom + offset > parentVals.bottom) && (elementVals.left - offset > parentVals.left && elementVals.left - offset < parentVals.right || elementVals.right + offset > parentVals.left && elementVals.right + offset < parentVals.right || elementVals.left - offset < parentVals.left && elementVals.right + offset > parentVals.right);
    }
  }, {
    key: "isImageInView",
    value: function isImageInView() {
      var onWinLoad = this.state.onWinLoad;


      if (onWinLoad || this.isInViewport(windowScrollVals, this.elementVals) && this.isInViewport(this.parentElementVals, this.elementVals)) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          onWinLoad = _props.onWinLoad,
          index = _props.index,
          offset = _props.offset,
          className = _props.className,
          src = _props.src,
          alt = _props.alt,
          onLoad = _props.onLoad,
          onError = _props.onError,
          parentElement = _props.parentElement,
          otherProps = _objectWithoutProperties(_props, ["onWinLoad", "index", "offset", "className", "src", "alt", "onLoad", "onError", "parentElement"]);

      return _react2.default.createElement(
        "div",
        _extends({
          className: "nwc-lazyimg-container " + className,
          ref: this.setContext
        }, otherProps),
        this.imgTagIfInView
      );
    }
  }, {
    key: "imgStateClassName",
    get: function get() {
      return this.state.isLoaded && "is-loaded" || this.state.isError && "is-error" || "";
    }
  }, {
    key: "imgTagIfInView",
    get: function get() {
      var _props2 = this.props,
          src = _props2.src,
          alt = _props2.alt;
      var inView = this.state.inView;


      if (inView) {
        return _react2.default.createElement("img", {
          className: "nwc-lazyimg " + this.imgStateClassName,
          src: src,
          alt: alt,
          onLoad: this.onLoad,
          onError: this.onError
        });
      }

      return null;
    }
  }]);

  return LazyImg;
}(_react.PureComponent);

_jsUtils2.default.onElementScroll(window, function () {
  windowScrollVals = _jsUtils2.default.windowScroll();
}, { passive: true });

LazyImg.defaultProps = {
  onWinLoad: false,
  className: "",
  alt: "NNNOW",
  src: null,
  onLoad: _jsUtils2.default.noop,
  onError: _jsUtils2.default.noop,
  offset: 0,
  parentElement: null
};

LazyImg.propTypes = {
  onWinLoad: _propTypes2.default.bool,
  index: _propTypes2.default.number.isRequired,
  className: _propTypes2.default.string,
  src: _propTypes2.default.string,
  alt: _propTypes2.default.string,
  onLoad: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  offset: _propTypes2.default.number,
  parentElement: _propTypes2.default.shape({})
};

exports.default = LazyImg;