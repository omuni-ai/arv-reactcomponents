"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _enzyme = require("enzyme");

var _enzymeToJson = require("enzyme-to-json");

var _test = require("../test.component");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Root Component Tests", function () {
  var mounted = void 0;
  beforeAll(function () {
    mounted = (0, _enzyme.mount)(_react2.default.createElement(_test2.default, null));
  });
  it("Matches Shallow SnapShot", function () {
    expect((0, _enzymeToJson.shallowToJson)((0, _enzyme.shallow)(_react2.default.createElement(_test2.default, null)))).toMatchSnapshot();
  });

  it("Matches Mounted SnapShot", function () {
    expect(mounted).toMatchSnapshot();
  });

  afterAll(function () {
    mounted.unmount();
  });
});