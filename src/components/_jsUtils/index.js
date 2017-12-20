import noop from "./noop";
import getBoundClientRect from "./getBoundClientRect";
import scrollElemToView from "./scrollElemToView";
import { fixScroll, unFixScroll } from "./fixScroll";
import preventEventPropagation from "./preventEventPropagation";
import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
import customPropTypes from "./customPropTypes";

const Utils = {
  noop,
  getBoundClientRect,
  scrollElemToView,
  fixScroll,
  unFixScroll,
  preventEventPropagation,
  requestAnimationFrame,
  cancelAnimationFrame,
  customPropTypes,
};

export default Utils;
