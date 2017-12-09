import React, { cloneElement } from 'react';

let selectedListIndex = null;
let navigateTimeoutId = null;

function setInputVal(e) {
  this.setState({
    inputVal: e.target.value,
    isActive: true,
  });
}

function hideAutocompleteList(index = selectedListIndex) {
  const selectedNode = this.listNode[`item-${index}`];
  if (!selectedNode) {
    return;
  }
  const selectedVal = selectedNode.getAttribute('value');
  this.setState({
    inputVal: selectedVal,
    isActive: false,
  });

  this.props.getSelection(this.listNodeItem[index]);
}

function hideAutocompleteOnBlur() {
  setTimeout(() => {
    this.setState({
      isActive: false,
    });
  }, 500);
}

function renderListItems(inpVal, inpList, renderList) {
  this.listNodeItem = [];
  this.listNode = [];
  const filteredList = inpList.filter(item => (
    item.toLowerCase().indexOf(inpVal.toLowerCase()) > -1
  ));

  const list = filteredList.map((item, index) => {
    const elem = renderList(item);
    let addClass = '';
    if (index === selectedListIndex) {
      addClass = 'is-active';
    }
    this.listNodeItem[index] = item;
    return cloneElement(elem, {
      className: `${elem.props.className} ${addClass}`,
      ref: (c) => { this.listNode[`item-${index}`] = c; },
      onClick: () => { this.hideAutocompleteList(index); },
    });
  });

  return this.state.isActive && filteredList.length > 0 && inpVal.length > 2 ?
    (
      <ul
        className="nwc-autocomplete-list-container"
        ref={(c) => { this.listNodeWrapper = c; }}
      >
        {list}
      </ul>
    ) :
    null;
}

function renderAutocompleteInput(renderInput) {
  const elem = renderInput();
  return cloneElement(elem, {
    value: this.state.inputVal,
    onChange: this.setInputVal,
    onFocus: this.setInputVal,
    onKeyDown: this.navigateUsingKey,
    onBlur: () => { hideAutocompleteOnBlur.bind(this)(); },
    ref: (c) => { this.inputNode = c; },
  });
}

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

function navigateUsingKey(e) {
  e.stopPropagation();
  const listNodeLength = Object.keys(this.listNode).length - 1;
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
      this.hideAutocompleteList();
      break;
    default:
      selectedListIndex = 0;
  }

  clearTimeout(navigateTimeoutId);
  navigateTimeoutId = setTimeout(() => {
    scrollElemToView(
      this.listNodeWrapper,
      this.listNode[`item-${selectedListIndex}`],
    );
  }, 10);

  if (selectedListIndex !== null) {
    this.forceUpdate();
  }
}

export {
  setInputVal,
  hideAutocompleteList,
  renderListItems,
  renderAutocompleteInput,
  navigateUsingKey,
};
