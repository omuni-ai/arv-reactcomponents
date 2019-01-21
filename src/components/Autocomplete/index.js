import React, { Component, cloneElement } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

class Autocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedListIndex: props.selectedIndex,
      isActive: false,
    };

    this.navigateTimeoutId = null;
    this.listNode = [];
    this.listNodeItem = [];

    this.renderInput = this.renderInput.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.selectAndHideList = this.selectAndHideList.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
    this.scrollHighlightedElemInView = this.scrollHighlightedElemInView.bind(
      this,
    );
  }

  onUserInput(e) {
    Utils.preventEventPropagation(e);
    const listNodeLength = Object.keys(this.listNode).length - 1;
    let isActive = true;
    let { selectedListIndex } = this.state;

    switch (e.key) {
      case "ArrowUp":
        Utils.preventDefault(e);
        selectedListIndex =
          this.state.selectedListIndex > 0
            ? this.state.selectedListIndex - 1
            : listNodeLength;
        break;
      case "ArrowDown":
        selectedListIndex =
          listNodeLength !== 0 && this.state.selectedListIndex < listNodeLength
            ? this.state.selectedListIndex + 1
            : 0;
        break;
      case "ArrowRight":
      case "ArrowLeft":
        break;
      case "Enter":
      case "Tab":
        isActive = false;
        this.selectAndHideList(this.state.selectedListIndex);
        return;
      default:
        selectedListIndex = 0;
    }

    this.setState(
      {
        selectedListIndex,
        isActive,
      },
      () => {
        this.scrollHighlightedElemInView();
      },
    );
  }

  get isActiveClassName() {
    const { isActive } = this.state;

    return (isActive && "is-active") || "";
  }

  scrollHighlightedElemInView() {
    Utils.scrollElemToView(
      this.listNodeWrapperRef,
      this.listNode[`item-${this.state.selectedListIndex}`],
    );
  }

  selectAndHideList(index) {
    if (index === -1) {
      return;
    }
    this.props.getSelection(this.listNodeItem[index]);
    this.setState({
      selectedListIndex: index,
      isActive: false,
    });
  }

  toggleDisplay(bool) {
    this.setState(
      {
        isActive: bool,
      },
      () => {
        this.scrollHighlightedElemInView();
      },
    );
  }

  renderListItems(inpVal, inpList, renderList) {
    const { minTextLength } = this.props;

    this.listNode = [];
    const list = [];
    let skipped = 0;

    inpList.forEach((item, index) => {
      const elem = renderList(item);
      const newIndex = index - skipped;

      if (!elem) {
        skipped += 1;
        return;
      }

      const onSelectFn = elem.props.onSelect || Utils.noop;
      let addClass = "";
      if (newIndex === this.state.selectedListIndex) {
        addClass = "is-active";
      }
      this.listNodeItem[newIndex] = item;
      const clonedElem = cloneElement(elem, {
        className: `${elem.props.className || ""} ${addClass}`,
        ref: context => {
          this.listNode[`item-${newIndex}`] = context;
        },
        onClick: e => {
          onSelectFn(e);
          this.selectAndHideList(newIndex);
        },
        onMouseDown: e => {
          onSelectFn(e);
          this.selectAndHideList(newIndex);
        },
      });

      list.push(clonedElem);
    });

    return this.state.isActive &&
      list.length > 0 &&
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

  renderInput(elem) {
    const { id } = elem.props;
    const onKeyDownFn = elem.props.onKeyDown || Utils.noop;
    const onFocusFn = elem.props.onFocus || Utils.noop;
    const onBlurFn = elem.props.onBlur || Utils.noop;

    return cloneElement(elem, {
      id: id || this.inputId,
      onKeyDown: e => {
        onKeyDownFn(e);
        this.onUserInput(e);
      },
      onFocus: e => {
        onFocusFn(e);
        this.toggleDisplay(true);
      },
      onBlur: e => {
        onBlurFn(e);
        setTimeout(() => {
          this.toggleDisplay(false);
        }, 300);
      },
      ref: context => {
        this.inputNode = context;
      },
    });
  }

  render() {
    const {
      className,
      inpList,
      getSelection,
      renderInput,
      renderList,
      minTextLength,
      selectedIndex,
      ...otherProps
    } = this.props;

    const elem = renderInput();

    return (
      <div
        className={`nwc-autocomplete ${className} ${this.isActiveClassName}`}
        onTouchStart={Utils.preventEventPropagation}
        {...otherProps}
      >
        {this.renderInput(elem)}
        {this.renderListItems(elem.props.value, inpList, renderList)}
      </div>
    );
  }
}

Autocomplete.defaultProps = {
  className: "",
  selectedIndex: 0,
  getSelection: Utils.noop,
  minTextLength: 0,
};

Autocomplete.propTypes = {
  className: PropTypes.string,
  selectedIndex: PropTypes.number,
  inpList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getSelection: PropTypes.func,
  renderInput: PropTypes.func.isRequired,
  renderList: PropTypes.func.isRequired,
  minTextLength: PropTypes.number,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default Autocomplete;
