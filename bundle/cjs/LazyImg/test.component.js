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


var LazyImgExample = function (_Component) {
  _inherits(LazyImgExample, _Component);

  function LazyImgExample(props) {
    _classCallCheck(this, LazyImgExample);

    var _this = _possibleConstructorReturn(this, (LazyImgExample.__proto__ || Object.getPrototypeOf(LazyImgExample)).call(this, props));

    _this.state = {
      index: 0,
      isLoaded: false
    };

    _this.setRef = _this.setRef.bind(_this);
    return _this;
  }

  _createClass(LazyImgExample, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _.Utils.requestAnimationFrame(function () {
        _this2.setState({
          isLoaded: true
        });
      });
    }
  }, {
    key: "setRef",
    value: function setRef(ref) {
      this.wrapperRef = ref;
    }
  }, {
    key: "changeIndex",
    value: function changeIndex() {
      this.setState({
        index: 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          isLoaded = _state.isLoaded,
          index = _state.index;


      return _react2.default.createElement(
        "div",
        { ref: this.setRef },
        _react2.default.createElement(_.LazyImg, {
          index: index,
          className: "nw-carouselexample-img1",
          src: "https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png",
          offset: 300,
          onWinLoad: true
        }),
        _react2.default.createElement(_.LazyImg, {
          index: 0,
          className: "nw-carouselexample-img2",
          src: "https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png",
          offset: 300
        }),
        isLoaded && _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_.LazyImg, {
            index: 0,
            className: "nw-carouselexample-img3",
            src: "https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png",
            parentElement: this.wrapperRef
          }),
          _react2.default.createElement(_.LazyImg, {
            index: 0,
            className: "nw-carouselexample-img4",
            src: "https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png",
            offset: 300,
            parentElement: this.wrapperRef
          })
        ) || null
      );
    }
  }]);

  return LazyImgExample;
}(_react.Component);

exports.default = LazyImgExample;