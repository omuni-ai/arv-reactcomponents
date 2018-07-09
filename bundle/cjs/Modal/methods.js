"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function createBaseContainer() {
  var modalContainer = document.createElement("div");
  modalContainer.className = "nwc-modal-holder";
  if (document.querySelectorAll("body")[0]) {
    document.querySelectorAll("body")[0].appendChild(modalContainer);
  }
}

exports.default = createBaseContainer;