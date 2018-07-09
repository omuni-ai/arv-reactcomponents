"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function Input(props, propName) {
  var CheckFor = {
    text: ["value", "placeholder"],
    checkbox: ["value", "name", "checked"],
    radio: ["value", "name", "checked"]
  };

  if (CheckFor[props.type] && CheckFor[props.type].indexOf(propName) !== -1 && props[propName] === null) {
    /* istanbul ignore next */
    return new Error("Missed `" + propName + "` prop on input type " + props.type);
  }

  return null;
}

var customPropTypes = {
  Input: Input
};

exports.default = customPropTypes;