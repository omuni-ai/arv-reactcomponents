import React, { cloneElement } from "react";
import Utils from "../_jsUtils";

let selectedListIndex = 0;
let inputTimeoutId = null;
let navigateTimeoutId = null;
let listNode = [];
const listNodeItem = [];

function onInpValChange(e) {
  this.setState({
    inpVal: e.target.value,
  });

  clearTimeout(inputTimeoutId);
  inputTimeoutId = setTimeout(() => {
    this.setState({
      inpVal: "",
    });
  }, 800);
}

function hideSelectList(index = selectedListIndex) {
  selectedListIndex = index;
  const selectedNode = listNode[`item-${index}`];
  if (!selectedNode) {
    return;
  }

  this.setState({
    isSelectActive: false,
  });

  this.props.getSelection(listNodeItem[index]);
}

function toggleSelectDisplay(bool) {
  setTimeout(() => {
    this.setState({
      isSelectActive: bool,
    });

    Utils.scrollElemToView(
      this.listNodeWrapperRef,
      listNode[`item-${selectedListIndex}`],
    );
  }, 500);
}

function onUserInput(e) {
  e.stopPropagation();
  const listNodeLength = Object.keys(listNode).length - 1;
  const hideSelectListFn = hideSelectList.bind(this);
  let isSelectActive = true;

  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      selectedListIndex =
        selectedListIndex !== 0 ? selectedListIndex - 1 : listNodeLength;
      break;
    case "ArrowDown":
      selectedListIndex =
        selectedListIndex !== listNodeLength ? selectedListIndex + 1 : 0;
      break;
    case "ArrowRight":
    case "ArrowLeft":
      break;
    case "Enter":
    case "Tab":
      isSelectActive = false;
      hideSelectListFn();
      break;
    default:
    /* default */
  }

  clearTimeout(navigateTimeoutId);
  navigateTimeoutId = setTimeout(() => {
    Utils.scrollElemToView(
      this.listNodeWrapperRef,
      listNode[`item-${selectedListIndex}`],
    );
  }, 10);

  this.setState({
    isSelectActive,
  });
}

function renderListItems(inpVal, inpList, renderList) {
  const hideSelectListFn = hideSelectList.bind(this);
  const regXSearchItemStartsWith = new RegExp(`^${inpVal}`, "i");

  listNode = [];

  inpList.find((item, index) => {
    const testAgainst = item[this.props.compareProp] || item;

    if (
      inpVal &&
      inpVal.length > 0 &&
      regXSearchItemStartsWith.test(testAgainst)
    ) {
      selectedListIndex = index;
      return true;
    }
    return false;
  });

  const list = inpList.map((item, index) => {
    const elem = renderList(item);
    const onClickFn = elem.props.onClick || Utils.noop;
    let addClass = "";
    if (index === selectedListIndex) {
      addClass = "is-active";
    }
    listNodeItem[index] = item;
    return cloneElement(elem, {
      className: `${elem.props.className || ""} ${addClass}`,
      ref: context => {
        listNode[`item-${index}`] = context;
      },
      onClick: e => {
        onClickFn(e);
        hideSelectListFn(index);
      },
    });
  });

  return this.state.isSelectActive ? (
    <ul
      className="nwc-select-list-container"
      ref={context => {
        this.listNodeWrapperRef = context;
      }}
    >
      {list}
    </ul>
  ) : null;
}

export { onInpValChange, onUserInput, toggleSelectDisplay, renderListItems };
