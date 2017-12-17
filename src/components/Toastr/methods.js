import React from 'react';
import ReactDOM from 'react-dom';
import Close from '../Close';

function hideToastr(item) {
  const { toastrList } = this.state;

  this.setState({
    toastrList: toastrList.splice(toastrList.findIndex(i => i === item) + 1, 1),
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

  if (!Number.isNaN(timeout)) {
    setTimeout(() => {
      hideToastr.bind(this)(itemClone);
    }, timeout);
  }
}

function renderToastr() {
  const {
    toastrList,
  } = this.state;

  const hideToastrFn = hideToastr.bind(this);

  ReactDOM.render(
    <ul className="nwc-toastr-list">
      {
        toastrList.map((item) => {
          const msgTypeClass = (item.type && `nwc-toastr-msg-${item.type}`) || '';
          return (
            <li
              key={`toastr-${item.id}`}
              className={`nwc-toastr-msg ${msgTypeClass}`}
            >
              <Close
                className="nwc-close-sm"
                onClick={() => { hideToastrFn(item); }}
              />
              {item.message}
            </li>
          );
        })
      }
    </ul>,
    document.querySelectorAll('.nwc-toastr-container')[0],
  );
}

export {
  showToastr,
  renderToastr,
};
