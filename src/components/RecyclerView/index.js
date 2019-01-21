import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Utils from "../_jsUtils";

class RecyclerView extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      scrolledBy: 0,
      isContainerLoaded: false,
      isWrapperLoaded: false,
    };

    this.containerRef = null;
    this.wrapperRef = null;
    this.windowInnerWidth = window.innerWidth;
    this.elemsInRow = props.elemsInRow;
    this.removeScrollListener = null;
    this.removeContainerScrollListener = null;
    this.productSavedHeight = null;
    this.storeProductHeight = this.storeProductHeight.bind(this);
    this.setContainer = this.setContainer.bind(this);
    this.setWrapper = this.setWrapper.bind(this);
    this.triggerChange = this.triggerChange.bind(this);
  }

  componentDidMount() {
    Utils.requestAnimationFrame(this.triggerChange);
    this.removeScrollListener = Utils.onElementScroll(
      window,
      this.triggerChange,
      { passive: true },
    );
  }

  componentWillUnmount() {
    this.removeScrollListener();
    this.removeContainerScrollListener();
  }

  get listVals() {
    return Utils.getBoundClientRect(this.containerRef);
  }

  get totalRows() {
    const { noOfElements, elemsInRow } = this.props;

    return noOfElements / elemsInRow;
  }

  get limits() {
    const { elemsInRow, noOfElements } = this.props;
    const { scrolledBy } = this.state;
    const offsetBy = elemsInRow * 8;

    const fromVal = scrolledBy - offsetBy;
    const till = scrolledBy + offsetBy;

    return {
      from: fromVal >= 0 ? fromVal : 0,
      till: till > noOfElements ? noOfElements : till,
    };
  }

  get productWidth() {
    const { elemsInRow } = this.props;

    return this.listVals.width / elemsInRow;
  }

  get productHeight() {
    const { elemsInRow } = this.props;

    if (!this.wrapperRef) {
      return 0;
    }

    const renderItemsLength = this.renderItems ? this.renderItems.length : 0;

    const rowsInView = renderItemsLength / elemsInRow;
    const wrapperRefVals = Utils.getBoundClientRect(this.wrapperRef);

    return wrapperRefVals.height / rowsInView;
  }

  get viewHeight() {
    const { listVals } = this;
    const windowHeight = window.innerHeight;
    const windowTop = Utils.windowScroll().top;

    return windowHeight + (windowTop - listVals.top);
  }

  get offsetTop() {
    const { isWrapperLoaded } = this.state;

    if (!isWrapperLoaded) {
      return 0;
    }

    const { productSavedHeight } = this;

    const { limits } = this;
    const { elemsInRow } = this.props;

    const heightOfHiddens = limits.from / elemsInRow * productSavedHeight;

    return heightOfHiddens;
  }

  get parentVirtualHeight() {
    const { productSavedHeight } = this;

    if (!productSavedHeight) {
      return null;
    }

    const { noOfElements, elemsInRow } = this.props;

    const heightOfList =
      Math.ceil(noOfElements / elemsInRow) * productSavedHeight;

    return heightOfList;
  }

  get renderItems() {
    const { limits } = this;
    const { renderList, list } = this.props;

    const elemsToDisplay = list.slice(limits.from, limits.till);

    const items = [];

    elemsToDisplay.forEach((item, index) => {
      items.push(renderList(item, index + limits.from));
    });

    return items;
  }

  setContainer(context) {
    this.containerRef = context;

    this.setState({
      isContainerLoaded: true,
    });

    if (this.containerRef) {
      this.removeContainerScrollListener = Utils.onElementScroll(
        this.containerRef,
        this.triggerChange,
        {
          passive: true,
        },
      );
    }
  }

  setWrapper(context) {
    this.wrapperRef = context;

    this.setState({
      isWrapperLoaded: true,
    });
  }

  triggerChange() {
    const { elemsInRow } = this.props;

    const { viewHeight, productSavedHeight } = this;

    if (!productSavedHeight) {
      this.storeProductHeight();
      return;
    }

    const scrolledBy = Math.ceil(viewHeight / productSavedHeight) * elemsInRow;

    this.setState(
      {
        scrolledBy,
      },
      this.storeProductHeight,
    );
  }

  storeProductHeight() {
    const { elemsInRow } = this.props;

    if (
      !this.productSavedHeight ||
      this.elemsInRow !== elemsInRow ||
      this.windowInnerWidth !== window.innerWidth
    ) {
      this.elemsInRow = elemsInRow;
      this.windowInnerWidth = window.innerWidth;
      this.productSavedHeight = this.productHeight;
    }
  }

  render() {
    const { isContainerLoaded, isWrapperLoaded } = this.state;
    const { containerClassName, wrapperClassName } = this.props;

    return (
      <div
        ref={this.setContainer}
        className={containerClassName}
        style={{ height: `${this.parentVirtualHeight}px` }}
      >
        {(isContainerLoaded && (
          <div
            ref={this.setWrapper}
            className={wrapperClassName}
            style={{ transform: `translateY(${this.offsetTop}px)` }}
          >
            {(isWrapperLoaded && this.renderItems) || null}
          </div>
        )) ||
          null}
      </div>
    );
  }
}

RecyclerView.defaultProps = {
  containerClassName: "",
  wrapperClassName: "",
  noOfElements: 0,
};

RecyclerView.propTypes = {
  containerClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  noOfElements: PropTypes.number,
  elemsInRow: PropTypes.number.isRequired,
  renderList: PropTypes.func.isRequired,
};

export default RecyclerView;
