"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

var _constants = require("../../constants");

var constants = _interopRequireWildcard(_constants);

var _ = require("../");

var _2 = _interopRequireDefault(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  beforeAll(function () {
    Object.defineProperty(global.window.history, "state", {
      value: {}
    });
  });

  it("Matches Shallow SnapShot", function () {
    expect((0, _enzymeToJson.shallowToJson)((0, _enzyme.shallow)(_react2.default.createElement(_test2.default, null)))).toMatchSnapshot();
  });

  it("Matches Mounted SnapShot", function (done) {
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));

    expect(_2.default.isModalOpen()).toBe(false);
    mounted.instance().showHaiMsg(true);
    expect(_2.default.isModalOpen()).toBe(true);

    setTimeout(function () {
      mounted.update();
      expect(mounted).toMatchSnapshot();
      mounted.find("button.nwc-close").simulate("click");

      setTimeout(function () {
        done();
      }, 300);
    }, 300);
  });

  it("Matches Mounted SnapShot Mobile", function (done) {
    constants.isMobile = true;
    var mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));

    expect(_2.default.isModalOpen()).toBe(false);
    mounted.instance().showHaiMsg(true);
    expect(_2.default.isModalOpen()).toBe(true);

    setTimeout(function () {
      mounted.update();
      expect(mounted).toMatchSnapshot();
      mounted.find("button.nwc-close").simulate("click");

      setTimeout(function () {
        done();
      }, 300);
    }, 300);
  });

  afterEach(function () {
    constants.isMobile = false;
  });
});