import React from 'react';
import ReactDOM from 'react-dom';
import Close from '../Close';

function clearAll() {
  this.setState({
    toastrList: [],
  });
}

function hideToastr(item) {
  const { toastrList } = this.state;

  toastrList.splice(toastrList.findIndex(i => i === item), 1);

  this.setState({
    toastrList,
  });
}

function hideToastrOnKeyDown(e) {
  if (e.key && e.key !== 'Escape') {
    return;
  }

  const { toastrList } = this.state;

  toastrList.splice(0, 1);

  this.setState({
    toastrList,
  });
}

function showToastr(item) {
  const timeout = parseInt(item.timeout, 10);
  const { toastrList } = this.state;
  const itemClone = item;

  itemClone.id = `${Math.round(Math.random() * (10 ** 10))}`;
  toastrList.push(itemClone);

  this.setState({
    toastrList,
  });

  setTimeout(() => {
    this.containerRef.focus();
  }, 10);

  if (!Number.isNaN(timeout)) {
    setTimeout(() => {
      hideToastr.bind(this)(itemClone);
    }, timeout);
  }
}

function renderList() {
  const {
    toastrList,
  } = this.state;

  const toastrListRev = [...toastrList].reverse();
  const hideToastrFn = hideToastr.bind(this);

  const listItems = toastrListRev.map((item, index) => {
    if (index >= this.limitTo) {
      hideToastrFn(toastrList[0]);
    }
    return (
      <li
        key={`toastr-${item.id}`}
        className={`nwc-toastr-msg ${item.className}`}
      >
        <Close
          className="nwc-close-sm"
          onClick={() => { hideToastrFn(item); }}
        />
        {item.message}
      </li>
    );
  });

  return listItems;
}

function renderToastr() {
  const {
    toastrList,
  } = this.state;
  const hideToastrOnKeyDownFn = hideToastrOnKeyDown.bind(this);
  const renderListFn = renderList.bind(this);

  ReactDOM.render(
    <div
      role="button"
      tabIndex={0}
      ref={(c) => { this.containerRef = c; }}
      onKeyDown={(e) => { hideToastrOnKeyDownFn(e, toastrList[0]); }}
    >
      <ul className="nwc-toastr-list">
        {renderListFn()}
      </ul>
    </div>,
    document.querySelectorAll('.nwc-toastr-container')[0],
  );
}

function setConfig(obj) {
  this.limitTo = obj.limitTo;
}

function createBaseContainer() {
  const toastrContainer = document.createElement('div');
  toastrContainer.className = 'nwc-toastr-container';
  document.querySelectorAll('body')[0].appendChild(toastrContainer);
}

export {
  clearAll,
  showToastr,
  renderToastr,
  setConfig,
  createBaseContainer,
};
