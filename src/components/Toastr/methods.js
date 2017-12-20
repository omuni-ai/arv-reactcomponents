function clearAll() {
  this.setState({
    toastrList: [],
  });
}

function hideToastr(item) {
  const { toastrList } = this.state;

  if (toastrList.findIndex(i => i.id === item.id) !== -1) {
    toastrList.splice(toastrList.findIndex(i => i.id === item.id), 1);
  }

  this.setState({
    toastrList,
  });
}

function showToastr(item) {
  const timeout = parseInt(item.timeout, 10);
  const { toastrList } = this.state;
  const itemClone = item;

  itemClone.id = `${Math.round(Math.random() * 10 ** 10)}`;
  toastrList.push(itemClone);

  this.setState({
    toastrList,
  });

  if (!Number.isNaN(timeout)) {
    setTimeout(() => {
      hideToastr.bind(this)(itemClone);
    }, timeout);
  }
}

function setConfig(obj) {
  this.limitTo = obj.limitTo;
}

function createBaseContainer() {
  const toastrContainer = document.createElement("div");
  toastrContainer.className = "nwc-toastr-holder";
  document.querySelectorAll("body")[0].appendChild(toastrContainer);
}

export { clearAll, hideToastr, showToastr, setConfig, createBaseContainer };
