import React, { cloneElement } from 'react';
import { scrollElemToView } from '../_jsUtils';

let selectedListIndex = null;
let navigateTimeoutId = null;

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
