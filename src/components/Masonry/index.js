import React, { Component, cloneElement } from "react";
import PropTypes from "prop-types";

import { screenMedia } from "../constants";

const emptyGrid = <div className="nwc-masonry-emptygrid">&nbsp;</div>;
class Masonry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnCount: this.getColumnCount(),
    };

    this.resizeTimeoutId = null;

    this.getColumnCount = this.getColumnCount.bind(this);
    this.setRef = this.setRef.bind(this);
    this.setColumnCount = this.setColumnCount.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimeoutId);
      this.resizeTimeoutId = setTimeout(() => {
        const columnCount = this.getColumnCount();
        if (this.state.columnCount !== columnCount) {
          this.setColumnCount(columnCount);

          this.setState({
            columnCount,
          });
        }
      }, 300);
    });
  }

  get grids() {
    const { data, renderList } = this.props;
    const { columnCount } = this.state;
    const arrayLength = data.length + (data.length % 2 === 0 ? 1 : 0);

    const paddingArray = new Array(
      columnCount * Math.ceil(arrayLength / columnCount) - arrayLength, // eslint-disable-line
    );
    paddingArray.fill(null);

    const grids = [];
    let masonryColumnCount = columnCount - 1;
    let i = 0;
    const newArray = [...data, ...paddingArray];

    while (newArray.length > 0) {
      if (newArray[i] === undefined) {
        masonryColumnCount -= 1;
        i = 0;
      }

      if (newArray[i] !== null) {
        const elem = renderList(newArray[i]);
        grids.push(
          cloneElement(elem, {
            className: `nwc-masonry-grid ${elem.props.className || ""}`,
          }),
        );
      } else {
        grids.push(emptyGrid);
      }

      newArray.splice(i, 1);
      i += masonryColumnCount;
    }

    return grids;
  }

  getColumnCount() {
    const { data, columnCount } = this.props;
    const { lg, md, sm, xs } = columnCount;
    const width = window.innerWidth;

    let matchingColumnCount;
    switch (true) {
      case width > screenMedia.lg:
        matchingColumnCount = lg;
        break;
      case width > screenMedia.md:
        matchingColumnCount = md;
        break;
      case width > screenMedia.sm:
        matchingColumnCount = sm;
        break;
      default:
        matchingColumnCount = xs;
    }

    return data.length - 1 > matchingColumnCount * 2
      ? matchingColumnCount
      : Math.ceil(data.length / 2);
  }

  setRef(ref) {
    this.parentRef = ref;
    this.setColumnCount(this.getColumnCount());
  }

  setColumnCount(count) {
    this.parentRef.style.WebkitColumnCount = count;
    this.parentRef.style.MozColumnCount = count;
    this.parentRef.style.columnCount = count;
  }

  render() {
    const {
      className,
      columnCount,
      renderList,
      data,
      ...otherProps
    } = this.props;
    return (
      <div
        ref={this.setRef}
        className={`nwc-masonry ${className}`}
        {...otherProps}
      >
        {this.grids}
      </div>
    );
  }
}

Masonry.defaultProps = {
  className: "",
};

Masonry.propTypes = {
  className: PropTypes.string,
  columnCount: PropTypes.shape({
    lg: PropTypes.number,
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
  }).isRequired,
  renderList: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Masonry;
