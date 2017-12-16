import React from 'react';
import PropTypes from 'prop-types';

function GridColumn(props) {
  const {
    className, children, ...otherProps
  } = props;
  return (
    <div
      className={`nwc-grid-col ${className}`}
      {...otherProps}
    >
      {children}
    </div>
  );
}

GridColumn.defaultProps = {
  className: undefined,
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
