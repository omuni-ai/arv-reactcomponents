import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { screenMedia } from "../constants";
import { GridColumn } from "../";

class Masonry extends PureComponent {
  constructor(props) {
    super(props);

    const mediaAndCount = this.getMediaAndColCount();
    this.state = {
      media: mediaAndCount.media,
      columnCount: mediaAndCount.count,
    };

    this.resizeTimeoutId = null;

    this.getMediaAndColCount = this.getMediaAndColCount.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimeoutId);
      this.resizeTimeoutId = setTimeout(() => {
        const mediaAndCount = this.getMediaAndColCount();
        if (this.state.columnCount !== mediaAndCount.count) {
          this.setState({
            media: mediaAndCount.media,
            columnCount: mediaAndCount.count,
          });
        }
      }, 300);
    });
  }

  get columns() {
    const { className, data, renderList } = this.props;
    const { media, columnCount } = this.state;

    const columns = [];
    let grids = [];
    let masonryColumnCount = columnCount - 1;
    let i = 0;

    const tempData = [...data];

    while (tempData.length > 0) {
      grids.push(renderList(tempData[i]));
      tempData.splice(i, 1);
      i += masonryColumnCount;

      if (tempData[i] === undefined) {
        columns.push(
          <GridColumn
            className={`nwc-grid-col-xs-${media} ${className}`}
            key={columns.length}
          >
            {grids}
          </GridColumn>,
        );
        grids = [];
        masonryColumnCount -= 1;
        i = 0;
      }
    }

    return columns;
  }

  getMediaAndColCount() {
    const { columnCount } = this.props;
    const { lg, md, sm, xs = 6 } = columnCount;
    const width = window.innerWidth;

    switch (true) {
      case width > screenMedia.lg:
        if (lg) {
          return { media: lg, count: 12 / lg };
        }
      case width > screenMedia.md: // eslint-disable-line
        if (md) {
          return { media: md, count: 12 / md };
        }
      case width > screenMedia.sm: // eslint-disable-line
        if (sm) {
          return { media: sm, count: 12 / sm };
        }
      default: // eslint-disable-line
        return { media: xs, count: 12 / xs };
    }
  }

  render() {
    return this.columns;
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
