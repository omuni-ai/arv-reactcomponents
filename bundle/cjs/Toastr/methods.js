"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function clearAll() {
  this.setState({
    toastrList: []
  });
}

function hideToastr(item) {
  var toastrList = this.state.toastrList;


  if (toastrList.findIndex(function (i) {
    return i.id === item.id;
  }) !== -1) {
    toastrList.splice(toastrList.findIndex(function (i) {
      return i.id === item.id;
    }), 1);
  }

  this.setState({
    toastrList: toastrList
  });
}

function showToastr(item) {
  var _this = this;

  var timeout = parseInt(item.timeout, 10);
  var toastrList = this.state.toastrList;

  var itemClone = item;

  itemClone.id = "" + Math.round(Math.random() * Math.pow(10, 10));
  toastrList.push(itemClone);

  this.setState({
    toastrList: toastrList
  });

  if (!Number.isNaN(timeout)) {
    setTimeout(function () {
      hideToastr.bind(_this)(itemClone);
    }, timeout);
  }
}

function setConfig(obj) {
  this.limitTo = obj.limitTo;
}

function createBaseContainer() {
  var toastrContainer = document.createElement("div");
  toastrContainer.className = "nwc-toastr-holder";
  if (document.querySelectorAll("body")[0]) {
    document.querySelectorAll("body")[0].appendChild(toastrContainer);
  }
}

exports.clearAll = clearAll;
exports.hideToastr = hideToastr;
exports.showToastr = showToastr;
exports.setConfig = setConfig;
exports.createBaseContainer = createBaseContainer;