import React, { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

class GridRow extends Component {
  componentDidMount() {
    const { childNodes } = this.rowRef;
    Utils.requestAnimationFrame(() => {
      childNodes.forEach(item => {
        if (!/(^|\s)nwc-grid-col($|[\s])/.test(item.className)) {
          throw Error("`GridRow` component must have `GridColumn` as child");
        }
      });
    });
  }

  render() {
    const { className, children, ...otherProps } = this.props;

    return (
      <div
        className={`nwc-grid-row ${className}`}
        {...otherProps}
        ref={context => {
          this.rowRef = context;
        }}
      >
        {children}
      </div>
    );
  }
}

GridRow.defaultProps = {
  className: "",
};

GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default GridRow;
