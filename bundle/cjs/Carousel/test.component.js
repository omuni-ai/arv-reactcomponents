"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselTest = function (_PureComponent) {
  _inherits(CarouselTest, _PureComponent);

  function CarouselTest(props) {
    _classCallCheck(this, CarouselTest);

    var _this = _possibleConstructorReturn(this, (CarouselTest.__proto__ || Object.getPrototypeOf(CarouselTest)).call(this, props));

    _this.state = {
      index: 0
    };

    _this.items = [{
      id: "zsfef",
      image: "https://cdn04.nnnow.com/web-images/medium/styles/7AZZWRHJ7WR/1473936756887/2.jpg"
    }, {
      id: "afaf",
      image: "https://cdn02.nnnow.com/web-images/medium/styles/GE1QP56A4BB/1487854795485/2.jpg"
    }, {
      id: "fafa",
      image: "https://cdn17.nnnow.com/web-images/medium/styles/MA8M6WD5PAL/1473157768702/2.jpg"
    }, {
      id: "sggaf",
      image: "https://cdn16.nnnow.com/web-images/medium/styles/V4XYIADIQ9C/1481106617805/2.jpg"
    }];

    _this.renderItems = _this.renderItems.bind(_this);
    _this.setParent = _this.setParent.bind(_this);
    return _this;
  }

  _createClass(CarouselTest, [{
    key: "setIndex",
    value: function setIndex(index) {
      this.setState({
        index: index
      });
    }
  }, {
    key: "setParent",
    value: function setParent() {
      var _document$querySelect = document.querySelectorAll(".nw-carouselexample"),
          _document$querySelect2 = _slicedToArray(_document$querySelect, 1),
          carouselContainer = _document$querySelect2[0];

      this.carouselContainer = carouselContainer;
    }
  }, {
    key: "renderItems",
    value: function renderItems(item) {
      return _react2.default.createElement(
        "div",
        {
          key: item.id,
          role: "presentation",
          className: "nw-carouselexample-item",
          onKeyDown: _.Utils.noop
        },
        _react2.default.createElement(_.LazyImg, {
          index: this.state.index,
          className: "nw-carouselexample-img",
          src: item.image,
          offset: 300,
          parentElement: this.carouselContainer
        })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var index = this.state.index;


      var nextIndex = index + 1;
      var limitNextIndex = nextIndex >= this.items.length ? index : nextIndex;

      var prevIndex = index - 1;
      var limitPrevIndex = prevIndex < 0 ? index : prevIndex;

      return _react2.default.createElement(
        _.GridColumn,
        { className: "nw-block-wrapper nwc-grid-col-sm-12" },
        _react2.default.createElement(
          "h1",
          null,
          "Carousel"
        ),
        _react2.default.createElement(
          _.GridRow,
          null,
          _react2.default.createElement(
            _.GridColumn,
            { className: "nwc-grid-col-sm-12 nw-block nw-block-white" },
            _react2.default.createElement(_.Carousel, {
              ref: this.setParent,
              className: "nw-carouselexample",
              index: index,
              items: this.items,
              renderItems: this.renderItems
            }),
            _react2.default.createElement(
              _.Button,
              {
                className: "nw-carouseltest-btnprev",
                onClick: function onClick() {
                  _this2.setIndex(limitPrevIndex);
                }
              },
              "<"
            ),
            _react2.default.createElement(
              _.Button,
              {
                className: "nw-carouseltest-btnnext",
                onClick: function onClick() {
                  _this2.setIndex(limitNextIndex);
                }
              },
              ">"
            )
          )
        )
      );
    }
  }]);

  return CarouselTest;
}(_react.PureComponent);

exports.default = CarouselTest;