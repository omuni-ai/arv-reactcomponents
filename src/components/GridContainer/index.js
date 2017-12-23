import React, { Component } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

class GridContainer extends Component {
  componentDidMount() {
    Utils.requestAnimationFrame(() => {
      const { childNodes } = this.containerRef;
      childNodes.forEach(item => {
        if (!/(^|\s)nwc-grid-row($|[\s])/.test(item.className)) {
          throw Error("`GridContainer` component must have `GridRow` as child");
        }
      });
    });
  }

  get classNameForStrict() {
    return this.props.strict ? "nwc-grid-container-strict" : "";
  }

  render() {
    const { className, strict, children, ...otherProps } = this.props;

    return (
      <div
        className={`nwc-grid-container ${this.classNameForStrict} ${className}`}
        {...otherProps}
        ref={context => {
          this.containerRef = context;
        }}
      >
        {children}
      </div>
    );
  }
}

GridContainer.defaultProps = {
  className: "",
  strict: false,
  // children: undefined,
};

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  // children: PropTypes.oneOfType([
  //   PropTypes.shape({
  //     type: PropTypes.oneOf([GridRow]),
  //   }),
  //   PropTypes.arrayOf(PropTypes.shape({
  //     type: PropTypes.oneOf([GridRow]),
  //   })),
  // ]),
  strict: PropTypes.bool,
};

export default GridContainer;
