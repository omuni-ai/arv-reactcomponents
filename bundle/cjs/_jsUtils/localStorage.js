"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("../constants");

var getItem = function getItem(key) {
  if (_constants.localStorage) {
    if (!_constants.localStorage[key]) {
      return null;
    }
    var objectWithTime = JSON.parse(_constants.localStorage[key]);
    return objectWithTime.content;
  }
}; /* eslint-disable */


var setItem = function setItem(key, value) {
  if (_constants.localStorage) {
    var objectWithTime = { content: value, timestamp: new Date() };
    _constants.localStorage[key] = JSON.stringify(objectWithTime);
  }
};
var removeItem = function removeItem(key) {
  if (_constants.localStorage) {
    if (!_constants.localStorage[key]) return;
    delete _constants.localStorage[key];
  }
};

var obj = {
  getItem: getItem,
  setItem: setItem,
  removeItem: removeItem
};

exports.default = obj;

// var emptyAllData = function(ObjectPassed) {
//   var key;
//   if (ObjectPassed) {
//     /*if we dont have key in constant or jenkins we will not store in Cache
//     *  if (!key || !env.expirationTimeForCachingApi.key) return;*/
//     for (key in ObjectPassed) {
//       self.removeItem(ObjectPassed[key]);
//     }
//     return;
//   }
//   for (key in localStorage) {
//     self.removeItem(key);
//   }
// };