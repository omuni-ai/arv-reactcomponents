import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GridContainer extends Component {
  get classNameForStrict() {
    return this.props.strict ? 'nwc-grid-container-strict' : '';
  }

  render() {
    const {
      className, strict, children, ...otherProps
    } = this.props;

    return (
      <div className={`nwc-grid-container ${this.classNameForStrict} ${className}`} {...otherProps}>
        {children}
      </div>
    );
  }
}

GridContainer.defaultProps = {
  className: '',
  strict: false,
};

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  strict: PropTypes.bool,
};

export default GridContainer;
