import noop from "./noop";
import getBoundClientRect from "./getBoundClientRect";
import scrollElemToView from "./scrollElemToView";
import scrollElemToTop from "./scrollElemToTop";
import { fixScroll, unFixScroll, isBodyFixed } from "./fixScroll";
import preventEventPropagation from "./preventEventPropagation";
import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
import customPropTypes from "./customPropTypes";
import windowScroll from "./windowScroll";
import localStorage from "./localStorage";
import onElementScroll from "./onElementScroll";

const Utils = {
  noop,
  getBoundClientRect,
  scrollElemToView,
  scrollElemToTop,
  fixScroll,
  unFixScroll,
  isBodyFixed,
  preventEventPropagation,
  requestAnimationFrame,
  cancelAnimationFrame,
  customPropTypes,
  windowScroll,
  localStorage,
  onElementScroll,
};

export default Utils;
