function createBaseContainer() {
  const modalContainer = document.createElement("div");
  modalContainer.className = "nwc-modal-holder";
  if (document.querySelectorAll("body")[0]) {
    document.querySelectorAll("body")[0].appendChild(modalContainer);
  }
}

export default createBaseContainer;
