import React, { PureComponent, cloneElement } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

const swipeThreshold = 50;
class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    this.listNode = [];
    this.touchStartVals = null;
    this.touchEndVals = null;
    this.touchmoveTimeoutId = null;

    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.getDirection = this.getDirection.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    Utils.requestIdleCallback(() => {
      this.scrollToIndex(nextProps.index);
    });
  }

  onTouchStart(e) {
    const [touchVals] = e.touches;

    this.touchStartVals = touchVals;
  }

  onTouchMove(e) {
    const [touchVals] = e.touches;

    this.touchEndVals = touchVals;
  }

  onTouchEnd() {
    if (!this.touchEndVals) {
      return;
    }

    this.props.onSwipe(this.getDirection());

    // Unset touchVals on swipeend
    this.touchStartVals = null;
    this.touchEndVals = null;
  }

  get renderItemsList() {
    const { items, renderItems } = this.props;
    const itemsList = items.map((item, index) => {
      const elem = renderItems(item, index);

      return cloneElement(elem, {
        ref: context => {
          this.listNode[`item-${index}`] = context;
        },
      });
    });

    return itemsList;
  }

  getDirection() {
    const {
      clientX: startClientX,
      clientY: startClientY,
    } = this.touchStartVals;
    const { clientX: endClientX, clientY: endClientY } = this.touchEndVals;

    const direction = {
      horizontal: undefined,
      vertical: undefined,
    };

    const clientXDiff = Math.abs(endClientX - startClientX);
    const clientYDiff = Math.abs(endClientY - startClientY);

    if (endClientX > startClientX && clientXDiff > swipeThreshold) {
      direction.horizontal = "prev";
    } else if (clientXDiff > swipeThreshold) {
      direction.horizontal = "next";
    }

    if (endClientY > startClientY && clientYDiff > swipeThreshold) {
      direction.vertical = "prev";
    } else if (clientYDiff > swipeThreshold) {
      direction.vertical = "next";
    }

    return direction;
  }

  scrollToIndex(index) {
    const elem = this.listNode[`item-${index}`];

    Utils.scrollElemToView(this.parentRef, elem, 600);
  }

  render() {
    const { className } = this.props;

    return (
      <div
        ref={context => {
          this.parentRef = context;
        }}
        className={`nwc-carousel ${className}`}
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
      >
        {this.renderItemsList}
      </div>
    );
  }
}

Carousel.defaultProps = {
  className: "",
  onSwipe: Utils.noop,
};

Carousel.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  renderItems: PropTypes.func.isRequired,
  onSwipe: PropTypes.func,
};

export default Carousel;
