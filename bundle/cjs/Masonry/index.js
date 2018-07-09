"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _constants = require("../constants");

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Masonry = function (_PureComponent) {
  _inherits(Masonry, _PureComponent);

  function Masonry(props) {
    _classCallCheck(this, Masonry);

    var _this = _possibleConstructorReturn(this, (Masonry.__proto__ || Object.getPrototypeOf(Masonry)).call(this, props));

    var mediaAndCount = _this.getMediaAndColCount();
    _this.state = {
      media: mediaAndCount.media,
      columnCount: mediaAndCount.count
    };

    _this.resizeTimeoutId = null;

    _this.initialize = _this.initialize.bind(_this);
    _this.getMediaAndColCount = _this.getMediaAndColCount.bind(_this);

    _this.initialize();
    return _this;
  }

  _createClass(Masonry, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", function () {
        clearTimeout(_this2.resizeTimeoutId);
        _this2.resizeTimeoutId = setTimeout(function () {
          var mediaAndCount = _this2.getMediaAndColCount();
          if (_this2.state.columnCount !== mediaAndCount.count) {
            _this2.initialize();
            _this2.setState({
              media: mediaAndCount.media,
              columnCount: mediaAndCount.count
            });
          }
        }, 300);
      });
    }
  }, {
    key: "getMediaAndColCount",
    value: function getMediaAndColCount() {
      var columnCount = this.props.columnCount;
      var lg = columnCount.lg,
          md = columnCount.md,
          sm = columnCount.sm,
          _columnCount$xs = columnCount.xs,
          xs = _columnCount$xs === undefined ? 6 : _columnCount$xs;

      var width = window.innerWidth;

      switch (true) {
        case width > _constants.screenMedia.lg:
          if (lg) {
            return { media: lg, count: 12 / lg };
          }
        // eslint-disable-next-line
        case width > _constants.screenMedia.md:
          if (md) {
            return { media: md, count: 12 / md };
          }
        // eslint-disable-next-line
        case width > _constants.screenMedia.sm:
          if (sm) {
            return { media: sm, count: 12 / sm };
          }
        // eslint-disable-next-line
        default:
          return { media: xs, count: 12 / xs };
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.colPos = 0;
      this.gridColumns = [];
      this.alreadyProcessed = 0;
    }
  }, {
    key: "render",
    value: function render() {
      return this.columns;
    }
  }, {
    key: "columns",
    get: function get() {
      var _props = this.props,
          className = _props.className,
          data = _props.data,
          renderList = _props.renderList;
      var _state = this.state,
          media = _state.media,
          columnCount = _state.columnCount;


      var grids = [];
      var masonryColumnCount = columnCount - 1;
      var i = 0;

      var tempData = data.slice(this.alreadyProcessed);
      this.alreadyProcessed += tempData.length;

      while (tempData.length > 0) {
        grids.push(renderList(tempData[i]));
        tempData.splice(i, 1);
        i += masonryColumnCount;

        if (tempData[i] === undefined) {
          this.gridColumns[this.colPos] = [].concat(_toConsumableArray(this.gridColumns[this.colPos] || []), _toConsumableArray(grids));
          masonryColumnCount -= 1;
          i = 0;
          grids = [];

          if (this.colPos < columnCount - 1) {
            this.colPos += 1;
          } else {
            this.colPos = 0;
          }
        }
      }

      return this.gridColumns.map(function (item, key) {
        return _react2.default.createElement(
          _.GridColumn,
          {
            className: "nwc-grid-col-xs-" + media + " " + className
            // eslint-disable-next-line
            , key: key
          },
          item
        );
      });
    }
  }]);

  return Masonry;
}(_react.PureComponent);

Masonry.defaultProps = {
  className: ""
};

Masonry.propTypes = {
  className: _propTypes2.default.string,
  columnCount: _propTypes2.default.shape({
    lg: _propTypes2.default.number,
    md: _propTypes2.default.number,
    sm: _propTypes2.default.number,
    xs: _propTypes2.default.number
  }).isRequired,
  renderList: _propTypes2.default.func.isRequired,
  data: _propTypes2.default.arrayOf(_propTypes2.default.shape({})).isRequired
};

exports.default = Masonry;