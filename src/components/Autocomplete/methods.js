import React, { cloneElement } from "react";
import Utils from "../_jsUtils";

let selectedListIndex = 0;
let navigateTimeoutId = null;
let listNode = [];
const listNodeItem = [];

function hideAutocompleteList(index = selectedListIndex) {
  const selectedNode = listNode[`item-${index}`];
  if (!selectedNode) {
    return;
  }

  this.setState({
    isAutocompleteActive: false,
  });

  this.props.getSelection(listNodeItem[index]);
}

function toggleAutocompleteDisplay(bool) {
  selectedListIndex = 0;

  setTimeout(() => {
    this.setState({
      isAutocompleteActive: bool,
    });
  }, 500);
}

function onUserInput(e) {
  e.stopPropagation();
  const listNodeLength = Object.keys(listNode).length - 1;
  const hideAutocompleteListFn = hideAutocompleteList.bind(this);
  let isAutocompleteActive = true;

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
      isAutocompleteActive = false;
      hideAutocompleteListFn();
      break;
    default:
      selectedListIndex = 0;
  }

  clearTimeout(navigateTimeoutId);
  navigateTimeoutId = setTimeout(() => {
    Utils.scrollElemToView(
      this.listNodeWrapperRef,
      listNode[`item-${selectedListIndex}`],
    );
  }, 10);

  this.setState({
    isAutocompleteActive,
  });
}

function renderListItems(inpVal, inpList, renderList) {
  const { minTextLength } = this.props;
  const hideAutocompleteListFn = hideAutocompleteList.bind(this);

  listNode = [];

  const filteredList = inpList.filter(
    item => item.toLowerCase().indexOf(inpVal.toLowerCase()) > -1,
  );

  const list = filteredList.map((item, index) => {
    const elem = renderList(item);
    const onClickFn = elem.props.onClick || (() => {});
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
        hideAutocompleteListFn(index);
      },
    });
  });

  return this.state.isAutocompleteActive &&
    filteredList.length > 0 &&
    inpVal.length >= minTextLength ? (
    <ul
      className="nwc-autocomplete-list-container"
      ref={context => {
        this.listNodeWrapperRef = context;
      }}
    >
      {list}
    </ul>
  ) : null;
}

function renderAutocompleteInput(elem) {
  const { id } = this.props;
  const toggleAutocompleteDisplayFn = toggleAutocompleteDisplay.bind(this);
  const onKeyDownFn = elem.props.onKeyDown || (() => {});
  const onFocusFn = elem.props.onFocus || (() => {});
  const onBlurFn = elem.props.onBlur || (() => {});

  return cloneElement(elem, {
    id: id || this.inputId,
    onKeyDown: e => {
      onKeyDownFn(e);
      onUserInput.bind(this)(e);
    },
    onFocus: e => {
      onFocusFn(e);
      toggleAutocompleteDisplayFn(true);
    },
    onBlur: e => {
      onBlurFn(e);
      toggleAutocompleteDisplayFn(false);
    },
    ref: context => {
      this.inputNode = context;
    },
  });
}

export { renderAutocompleteInput, renderListItems };
