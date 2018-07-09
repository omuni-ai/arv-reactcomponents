"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasonryTest = function (_Component) {
  _inherits(MasonryTest, _Component);

  _createClass(MasonryTest, null, [{
    key: "renderList",
    value: function renderList(item) {
      return _react2.default.createElement(
        "div",
        { key: item.index },
        _react2.default.createElement(
          "div",
          null,
          item.index
        ),
        _react2.default.createElement(_.Img, { style: { width: "100%" }, src: item.image }),
        _react2.default.createElement(
          "div",
          null,
          item.content
        ),
        _react2.default.createElement("br", null)
      );
    }
  }]);

  function MasonryTest(props) {
    _classCallCheck(this, MasonryTest);

    var _this = _possibleConstructorReturn(this, (MasonryTest.__proto__ || Object.getPrototypeOf(MasonryTest)).call(this, props));

    _this.state = {
      data: [{
        index: 1,
        image: "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 2,
        image: "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 3,
        image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 4,
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }]
    };
    _this.columnCount = { lg: 2, md: 3, sm: 4, xs: 12 };
    return _this;
  }

  _createClass(MasonryTest, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var newData = [{
        index: 5,
        image: "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 6,
        image: "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 7,
        image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 8,
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 9,
        image: "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 10,
        image: "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 11,
        image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 12,
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 13,
        image: "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 14,
        image: "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 15,
        image: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }, {
        index: 16,
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
      }];

      setTimeout(function () {
        _this2.setState({
          data: [].concat(_toConsumableArray(_this2.state.data), newData)
        });
      }, 600);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _.GridColumn,
        { className: "nw-block nw-block-white" },
        _react2.default.createElement(
          "h1",
          null,
          "Masonry"
        ),
        _react2.default.createElement(
          _.GridRow,
          null,
          _react2.default.createElement(_.Masonry, {
            data: this.state.data,
            columnCount: this.columnCount,
            renderList: MasonryTest.renderList
          })
        )
      );
    }
  }]);

  return MasonryTest;
}(_react.Component);

exports.default = MasonryTest;