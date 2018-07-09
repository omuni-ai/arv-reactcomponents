"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ToastrContainer = require("../ToastrContainer");

var _ToastrContainer2 = _interopRequireDefault(_ToastrContainer);

var _methods = require("./methods");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Close from '../Close';


var hideToastrFn = void 0;

var Toastr = function (_Component) {
  _inherits(Toastr, _Component);

  function Toastr(props) {
    _classCallCheck(this, Toastr);

    var _this = _possibleConstructorReturn(this, (Toastr.__proto__ || Object.getPrototypeOf(Toastr)).call(this, props));

    _this.state = {
      toastrList: [] // eslint-disable-line react/no-unused-state
    };

    Toastr.clearAll = _methods.clearAll.bind(_this);
    Toastr.showToastr = _methods.showToastr.bind(_this);
    Toastr.setConfig = _methods.setConfig.bind(_this);
    Toastr.setConfig({ limitTo: 5 });
    hideToastrFn = _methods.hideToastr.bind(_this);
    return _this;
  }

  _createClass(Toastr, [{
    key: "render",
    value: function render() {
      var toastrList = this.state.toastrList;


      return _reactDom2.default.createPortal(_react2.default.createElement(_ToastrContainer2.default, {
        toastrList: toastrList,
        limitTo: this.limitTo,
        hideToastr: hideToastrFn
      }), document.querySelectorAll(".nwc-toastr-holder")[0]);
    }
  }]);

  return Toastr;
}(_react.Component);

(0, _methods.createBaseContainer)();

_reactDom2.default.render(_react2.default.createElement(Toastr, null), document.querySelectorAll(".nwc-toastr-holder")[0]);

exports.default = Toastr;