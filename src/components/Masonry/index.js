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

    this.initialize = this.initialize.bind(this);
    this.getMediaAndColCount = this.getMediaAndColCount.bind(this);

    this.initialize();
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      clearTimeout(this.resizeTimeoutId);
      this.resizeTimeoutId = setTimeout(() => {
        const mediaAndCount = this.getMediaAndColCount();
        if (this.state.columnCount !== mediaAndCount.count) {
          this.initialize();
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

    let grids = [];
    let masonryColumnCount = columnCount - 1;
    let i = 0;

    const tempData = data.slice(this.alreadyProcessed);
    this.alreadyProcessed += tempData.length;

    while (tempData.length > 0) {
      grids.push(renderList(tempData[i]));
      tempData.splice(i, 1);
      i += masonryColumnCount;

      if (tempData[i] === undefined) {
        this.gridColumns[this.colPos] = [
          ...(this.gridColumns[this.colPos] || []),
          ...grids,
        ];
        masonryColumnCount -= 1;
        i = 0;
        grids = [];

        if (this.colPos < columnCount - 1) {
          this.colPos += 1;
        } else {
          this.colPos = 0;
        }
      }
    }

    return this.gridColumns.map((item, key) => (
      <GridColumn
        className={`nwc-grid-col-xs-${media} ${className}`}
        // eslint-disable-next-line
        key={key}
      >
        {item}
      </GridColumn>
    ));
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
      // eslint-disable-next-line
      case width > screenMedia.md:
        if (md) {
          return { media: md, count: 12 / md };
        }
      // eslint-disable-next-line
      case width > screenMedia.sm:
        if (sm) {
          return { media: sm, count: 12 / sm };
        }
      // eslint-disable-next-line
      default:
        return { media: xs, count: 12 / xs };
    }
  }

  initialize() {
    this.colPos = 0;
    this.gridColumns = [];
    this.alreadyProcessed = 0;
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
