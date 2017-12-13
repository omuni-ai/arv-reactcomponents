import React from 'react';
import PropTypes from 'prop-types';

function GridRow(props) {
  const {
    className, children, ...otherProps
  } = props;
  return (
    <div className={`nwc-grid-row ${className}`} {...otherProps}>
      {children}
    </div>
  );
}

GridRow.defaultProps = {
  className: '',
};

GridRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
};

export default GridRow;
