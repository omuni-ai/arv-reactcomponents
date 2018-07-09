"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _window = window,
    scrollY = _window.scrollY;

var bodyFixedState = false;

function fixScroll() {
  var _window2 = window;
  scrollY = _window2.scrollY;

  setTimeout(function () {
    var bodyElem = document.querySelector("body");
    bodyElem.classList.toggle("nwc-hide-scrollbar", true);
    bodyElem.style.top = "-" + scrollY + "px";
    bodyFixedState = true;
  }, 0, false);
}

function unFixScroll() {
  var bodyElem = document.querySelector("body");
  bodyElem.classList.toggle("nwc-hide-scrollbar", false);
  bodyElem.style.top = null;
  if (scrollY) {
    window.scrollTo(0, scrollY);
  }
  setTimeout(function () {
    bodyFixedState = false;
  }, 0, false);
}

function isBodyFixed() {
  return bodyFixedState;
}

exports.fixScroll = fixScroll;
exports.unFixScroll = unFixScroll;
exports.isBodyFixed = isBodyFixed;