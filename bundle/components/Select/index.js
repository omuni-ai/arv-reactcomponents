import React, { PureComponent, cloneElement } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

// import for Page
import Label from "../Label";
import Input from "../Input";

const BLOCK_VIRTUAL_KEYBOARD = window.innerWidth <= 768;

class Select extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inpVal: "",
      isActive: false,
      selectedListIndex: props.selectedIndex,
    };

    this.inputId = `${Math.round(Math.random() * 10 ** 10)}`;
    this.blurTimeoutId = null;
    this.inputTimeoutId = null;
    this.navigateTimeoutId = null;
    this.listNode = [];
    this.listNodeItem = [];

    this.onInpValChange = this.onInpValChange.bind(this);
    this.onInpFocus = this.onInpFocus.bind(this);
    this.onInpBlur = this.onInpBlur.bind(this);
    this.renderListItems = this.renderListItems.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.selectAndHideList = this.selectAndHideList.bind(this);
    this.onUserInput = this.onUserInput.bind(this);
    this.scrollHighlightedElemInView = this.scrollHighlightedElemInView.bind(
      this,
    );
  }

  onInpValChange(e) {
    const inpVal = e.target.value;
    const regXSearchItemStartsWith = new RegExp(`^${inpVal}`, "i");
    let selectedListIndex = 0;

    this.props.inpList.find((item, index) => {
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

    this.setState({
      inpVal,
      selectedListIndex,
    });

    clearTimeout(this.inputTimeoutId);
    this.inputTimeoutId = setTimeout(() => {
      this.setState({
        inpVal: "",
      });
    }, 800);
  }

  onInpFocus() {
    const { isActive } = this.state;
    this.toggleDisplay(!isActive);
    clearTimeout(this.blurTimeoutId);
  }

  onInpBlur() {
    this.blurTimeoutId = setTimeout(() => {
      this.toggleDisplay(false);
    }, 200);
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
        Utils.preventDefault(e);
        isActive = false;
        this.selectAndHideList(this.state.selectedListIndex);
        return;
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
    this.listNode = [];

    const list = inpList.map((item, index) => {
      const elem = renderList(item);

      if (!elem) {
        return null;
      }

      const onClickFn = elem.props.onClick || Utils.noop;
      let addClass = "";
      if (index === this.state.selectedListIndex) {
        addClass = "is-active";
      }
      this.listNodeItem[index] = item;
      return cloneElement(elem, {
        className: `${elem.props.className || ""} ${addClass}`,
        ref: context => {
          this.listNode[`item-${index}`] = context;
        },
        onClick: e => {
          onClickFn(e);
          this.selectAndHideList(index);
        },
      });
    });

    return this.state.isActive ? (
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

  render() {
    const { inpVal } = this.state;

    const {
      id,
      className,
      selectedValue,
      inpList,
      getSelection,
      renderList,
      compareProp,
      selectedIndex,
      ...otherProps
    } = this.props;

    return (
      <div className={`nwc-select-container ${className}`}>
        <Label
          className="nwc-select"
          htmlFor={id || this.inputId}
          {...otherProps}
        >
          {selectedValue[compareProp] || selectedValue}
          <Input
            id={id || this.inputId}
            className="nwc-inp-hide nwc-inp-dash nwc-inp-sm"
            placeholder="Enter text"
            value={inpVal}
            onChange={this.onInpValChange}
            onKeyDown={this.onUserInput}
            onFocus={this.onInpFocus}
            onBlur={this.onInpBlur}
            ref={context => {
              this.inputRef = context;
            }}
            readOnly={BLOCK_VIRTUAL_KEYBOARD}
          />
          <i className="icomoon-arrow_bottom nwc-select-arrowbottom" />
        </Label>
        {this.renderListItems(inpVal, inpList, renderList)}
      </div>
    );
  }
}

Select.defaultProps = {
  id: null,
  className: "",
  selectedIndex: 0,
  getSelection: Utils.noop,
  compareProp: undefined,
};

Select.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  selectedIndex: PropTypes.number,
  selectedValue: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  inpList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  getSelection: PropTypes.func,
  renderList: PropTypes.func.isRequired,
  compareProp: PropTypes.string,
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};

export default Select;
