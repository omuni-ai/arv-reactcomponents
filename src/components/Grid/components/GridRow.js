import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridRow extends Component {
  componentDidMount() {
    window.requestAnimationFrame(() => {
      const { childNodes } = this.rowRef;
      childNodes.forEach((item) => {
        if (!(/(^|\s)nwc-grid-col($|[\s])/.test(item.className))) {
          throw Error('`GridRow` component must have `GridColumn` as child');
        }
      });
    });
  }

  render() {
    const {
      className, children, ...otherProps
    } = this.props;

    return (
      <div
        className={`nwc-grid-row ${className}`}
        {...otherProps}
        ref={(c) => { this.rowRef = c; }}
      >
        {children}
      </div>
    );
  }
}

GridRow.defaultProps = {
  className: null,
};

GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
};

export default GridRow;
