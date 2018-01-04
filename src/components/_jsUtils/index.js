import noop from "./noop";
import getBoundClientRect from "./getBoundClientRect";
import scrollElemToView from "./scrollElemToView";
import { fixScroll, unFixScroll, isBodyFixed } from "./fixScroll";
import preventEventPropagation from "./preventEventPropagation";
import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
import customPropTypes from "./customPropTypes";
import windowScroll from "./windowScroll";
import localStorage from "./localStorage";

const Utils = {
  noop,
  getBoundClientRect,
  scrollElemToView,
  fixScroll,
  unFixScroll,
  isBodyFixed,
  preventEventPropagation,
  requestAnimationFrame,
  cancelAnimationFrame,
  customPropTypes,
  windowScroll,
  localStorage,
};

export default Utils;
