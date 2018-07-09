"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var screenMedia = exports.screenMedia = {
  lg: 1200,
  md: 992,
  sm: 768
};

var isMobile = exports.isMobile = window.innerWidth <= 768;
var localStorage = exports.localStorage = "localStorage" in window && window.localStorage || null;

var windowRequestAnimationFrame = exports.windowRequestAnimationFrame = window.requestAnimationFrame;
var windowCancelAnimationFrame = exports.windowCancelAnimationFrame = window.cancelAnimationFrame;

var vendorsPrefixes = exports.vendorsPrefixes = ["ms", "moz", "webkit", "o"];
var vendorRequestAnimationFrame = exports.vendorRequestAnimationFrame = vendorsPrefixes.find(function (prefix) {
  return window[prefix + "RequestAnimationFrame"];
});
var vendorCancelAnimationFrame = exports.vendorCancelAnimationFrame = vendorsPrefixes.find(function (prefix) {
  return window[prefix + "CancelAnimationFrame"] || window[prefix + "CancelRequestAnimationFrame"];
});