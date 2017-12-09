import React, { cloneElement } from 'react';

let selectedListIndex = null;
let navigateTimeoutId = null;

function getBoundClientRect(elem) { // crossbrowser version
  const box = elem.getBoundingClientRect();

  const { body, documentElement } = document;

  const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;

  const clientTop = documentElement.clientTop || body.clientTop || 0;
  const clientLeft = documentElement.clientLeft || body.clientLeft || 0;

  const top = box.top + (scrollTop - clientTop);
  const left = box.left + (scrollLeft - clientLeft);

  return {
    top,
    right: left + box.width,
    bottom: top + box.height,
    left,
    width: box.width,
    height: box.height,
  };
}

function hideAutocompleteList(index = selectedListIndex) {
  const selectedNode = this.state.listNode[`item-${index}`];
  if (!selectedNode) {
    return;
  }

  this.setState({
    isAutocompleteActive: false,
  });

  this.props.getSelection(this.state.listNodeItem[index]);
}

function toggleAutocompleteDisplay(bool) {
  setTimeout(() => {
    this.setState({
      isAutocompleteActive: bool,
    });
  }, 500);
}

function scrollElemToView(parent, child) {
  const parentElem = parent;
  const childElem = child;
  if (parentElem && child) {
    const parentVals = getBoundClientRect(parentElem);
    const childVals = getBoundClientRect(childElem);
    let offset = 0;
    if (childVals.bottom > parentVals.bottom) {
      offset = childVals.bottom - parentVals.bottom;
    } else if (childVals.top < parentVals.top) {
      offset = childVals.top - parentVals.top;
    }

    parentElem.scrollTop += offset;
  }
}

function onUserInput(e) {
  e.stopPropagation();
  const listNodeLength = Object.keys(this.state.listNode).length - 1;
  const hideAutocompleteListFn = hideAutocompleteList.bind(this);
  let isAutocompleteActive = true;

  switch (e.key) {
    case 'ArrowUp':
      e.preventDefault();
      selectedListIndex = selectedListIndex !== 0 ?
        selectedListIndex - 1 :
        listNodeLength;
      break;
    case 'ArrowDown':
      selectedListIndex = selectedListIndex !== listNodeLength ?
        selectedListIndex + 1 :
        0;
      break;
    case 'ArrowRight':
    case 'ArrowLeft':
      break;
    case 'Enter':
    case 'Tab':
      isAutocompleteActive = false;
      hideAutocompleteListFn();
      break;
    default:
      selectedListIndex = 0;
  }

  clearTimeout(navigateTimeoutId);
  navigateTimeoutId = setTimeout(() => {
    scrollElemToView(
      this.listNodeWrapperRef,
      this.state.listNode[`item-${selectedListIndex}`],
    );
  }, 10);

  this.setState({
    isAutocompleteActive,
  });
}

function renderListItems(inpVal, inpList, renderList) {
  const hideAutocompleteListFn = hideAutocompleteList.bind(this);
  const filteredList = inpList.filter(item => (
    item.toLowerCase().indexOf(inpVal.toLowerCase()) > -1
  ));

  const list = filteredList.map((item, index) => {
    const elem = renderList(item);
    let addClass = '';
    if (index === selectedListIndex) {
      addClass = 'is-active';
    }
    this.state.listNodeItem[index] = item;
    return cloneElement(elem, {
      className: `${elem.props.className || ''} ${addClass}`,
      ref: (c) => { this.state.listNode[`item-${index}`] = c; },
      onClick: () => { hideAutocompleteListFn(index); },
    });
  });

  return this.state.isAutocompleteActive && filteredList.length > 0 && inpVal.length > 2 ?
    (
      <ul
        className="nwc-autocomplete-list-container"
        ref={(c) => { this.listNodeWrapperRef = c; }}
      >
        {list}
      </ul>
    ) :
    null;
}

function renderAutocompleteInput(elem) {
  const toggleAutocompleteDisplayFn = toggleAutocompleteDisplay.bind(this);

  return cloneElement(elem, {
    onKeyDown: onUserInput.bind(this),
    onFocus: () => { toggleAutocompleteDisplayFn(true); },
    onBlur: () => { toggleAutocompleteDisplayFn(false); },
    ref: (c) => { this.inputNode = c; },
  });
}

export {
  renderAutocompleteInput,
  renderListItems,
};
