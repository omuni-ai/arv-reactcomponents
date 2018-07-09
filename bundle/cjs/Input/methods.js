"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function restrictVal(value, type, maxLength) {
  var newValue = value;

  switch (type) {
    case "number":
      if (maxLength) {
        return newValue.slice(0, maxLength);
      }
      return newValue;
    default:
      return newValue;
  }
}

function validateValue(value, validateWithPattern) {
  var errorObj = { isValid: true, errorMsg: "" };

  if (!Array.isArray(validateWithPattern)) {
    return errorObj;
  }

  validateWithPattern.find(function (item) {
    if (!item.pattern.test(value)) {
      errorObj.isValid = false;
      errorObj.errorMsg = item.msg;
      return true;
    }
    return false;
  });

  return errorObj;
}

exports.restrictVal = restrictVal;
exports.validateValue = validateValue;