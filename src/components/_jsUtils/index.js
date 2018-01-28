import noop from "./noop";
import getBoundClientRect from "./getBoundClientRect";
import scrollElemToView from "./scrollElemToView";
import scrollElemToTop from "./scrollElemToTop";
import { fixScroll, unFixScroll, isBodyFixed } from "./fixScroll";
import preventEventPropagation from "./preventEventPropagation";
import preventDefault from "./preventDefault";
import requestAnimationFrame from "./requestAnimationFrame";
import cancelAnimationFrame from "./cancelAnimationFrame";
import customPropTypes from "./customPropTypes";
import windowScroll from "./windowScroll";
import localStorage from "./localStorage";
import onElementScroll from "./onElementScroll";
import { getUrlParameter, setUrlParameter } from "./urlMethods";

const Utils = {
  noop,
  getBoundClientRect,
  scrollElemToView,
  scrollElemToTop,
  fixScroll,
  unFixScroll,
  isBodyFixed,
  preventEventPropagation,
  preventDefault,
  requestAnimationFrame,
  cancelAnimationFrame,
  customPropTypes,
  windowScroll,
  localStorage,
  onElementScroll,
  getUrlParameter,
  setUrlParameter,
};

export default Utils;
