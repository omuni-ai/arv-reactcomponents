import React, { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

import "./styles/_index.scss";

class GridColumn extends Component {
  componentDidMount() {
    Utils.requestAnimationFrame(() => {
      const { childNodes } = this.colRef;
      childNodes.forEach(item => {
        if (/(^|\s)nwc-grid-col($|[\s])/.test(item.className)) {
          throw Error(`\`GridColumn\` cannot have \`GridColumn\` as immediate child. 
            Use \`GridRow\` inbetween when nesting two columns.`);
        }
      });
    });
  }

  render() {
    const { className, children, ...otherProps } = this.props;

    return (
      <div
        className={`nwc-grid-col ${className}`}
        {...otherProps}
        ref={context => {
          this.colRef = context;
        }}
      >
        {children}
      </div>
    );
  }
}

GridColumn.defaultProps = {
  className: "",
};

GridColumn.propTypes = {
  className: PropTypes.string, // eslint-disable-line react/no-typos
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default GridColumn;
