import React, { cloneElement } from 'react';
import { scrollElemToView } from '../_jsUtils';

let selectedListIndex = 0;
let inputTimeoutId = null;
let navigateTimeoutId = null;

function onInpValChange(e) {
  this.setState({
    inpVal: e.target.value,
  });

  clearTimeout(inputTimeoutId);
  inputTimeoutId = setTimeout(() => {
    this.setState({
      inpVal: '',
    });
  }, 800);
}

function hideDropdownList(index = selectedListIndex) {
  selectedListIndex = index;
  const selectedNode = this.state.listNode[`item-${index}`];
  if (!selectedNode) {
    return;
  }

  this.setState({
    isDropdownActive: false,
  });

  this.props.getSelection(this.state.listNodeItem[index]);
}

function toggleDropdownDisplay(bool) {
  setTimeout(() => {
    this.setState({
      isDropdownActive: bool,
    });

    scrollElemToView(
      this.listNodeWrapperRef,
      this.state.listNode[`item-${selectedListIndex}`],
    );
  }, 500);
}

function onUserInput(e) {
  e.stopPropagation();
  const listNodeLength = Object.keys(this.state.listNode).length - 1;
  const hideDropdownListFn = hideDropdownList.bind(this);
  let isDropdownActive = true;

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
      isDropdownActive = false;
      hideDropdownListFn();
      break;
    default:
      /* default */
  }

  clearTimeout(navigateTimeoutId);
  navigateTimeoutId = setTimeout(() => {
    scrollElemToView(
      this.listNodeWrapperRef,
      this.state.listNode[`item-${selectedListIndex}`],
    );
  }, 10);

  this.setState({
    isDropdownActive,
  });
}

function renderListItems(inpVal, inpList, renderList) {
  const hideDropdownListFn = hideDropdownList.bind(this);
  const regXSearchItemStartsWith = new RegExp(`^${inpVal}`, 'i');

  this.state.listNode = [];

  try {
    inpList.forEach((item, index) => {
      if (inpVal && inpVal.length > 0 && regXSearchItemStartsWith.test(item)) {
        selectedListIndex = index;
        throw Error('break');
      }
    });
  } catch (err) {
    /** break */
  }

  const list = inpList.map((item, index) => {
    const elem = renderList(item);
    const onClickFn = elem.props.onClick || (() => {});
    let addClass = '';
    if (index === selectedListIndex) {
      addClass = 'is-active';
    }
    this.state.listNodeItem[index] = item;
    return cloneElement(elem, {
      className: `${elem.props.className || ''} ${addClass}`,
      ref: (c) => { this.state.listNode[`item-${index}`] = c; },
      onClick: (e) => { onClickFn(e); hideDropdownListFn(index); },
    });
  });

  return this.state.isDropdownActive ?
    (
      <ul
        className="nwc-dropdown-list-container"
        ref={(c) => { this.listNodeWrapperRef = c; }}
      >
        {list}
      </ul>
    ) :
    null;
}

export {
  onInpValChange,
  onUserInput,
  toggleDropdownDisplay,
  renderListItems,
};
