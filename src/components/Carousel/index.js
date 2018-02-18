import React, { PureComponent, cloneElement } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

class Carousel extends PureComponent {
  constructor(props) {
    super(props);

    this.listNode = [];
    this.scrollToIndex = this.scrollToIndex.bind(this);

    this.itemsList = this.renderItemsList();
  }

  componentWillReceiveProps(nextProps) {
    Utils.requestIdleCallback(() => {
      this.scrollToIndex(nextProps.index);
    });
  }

  scrollToIndex(index) {
    const elem = this.listNode[`item-${index}`];

    Utils.scrollElemToView(this.parentRef, elem, 600);
  }

  renderItemsList() {
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

  render() {
    const { className } = this.props;

    return (
      <div
        ref={context => {
          this.parentRef = context;
        }}
        className={`nwc-carousel ${className}`}
      >
        {this.itemsList}
      </div>
    );
  }
}

Carousel.defaultProps = {
  className: "",
};

Carousel.propTypes = {
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({})),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  renderItems: PropTypes.func.isRequired,
};

export default Carousel;
