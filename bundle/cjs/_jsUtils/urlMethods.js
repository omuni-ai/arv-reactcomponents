"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getUrlParameter = function getUrlParameter(url, name) {
  var replacedName = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + replacedName + "=([^&#]*)");
  var results = regex.exec(url);
  return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var setUrlParameter = function setUrlParameter(url, name, value) {
  var regex = new RegExp("([?&])" + name + "=.*?(&|$)", "i");
  var separator = url.indexOf("?") !== -1 ? "&" : "?";
  if (url.match(regex)) {
    return url.replace(regex, "$1" + name + "=" + value + "$2");
  }

  return "" + url + separator + name + "=" + value;
};

exports.getUrlParameter = getUrlParameter;
exports.setUrlParameter = setUrlParameter;