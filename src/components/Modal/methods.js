function createBaseContainer() {
  const modalContainer = document.createElement("div");
  modalContainer.className = "nwc-modal-holder";
  document.querySelectorAll("body")[0].appendChild(modalContainer);
}

export default createBaseContainer;
