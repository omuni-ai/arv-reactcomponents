import React from 'react';
import PropTypes from 'prop-types';
import './styles/_index.scss';

function Button(props) {
  const {
    className,
    children,
    ...otherProps
  } = props;
  return (
    <button className={`nwc-btn ${className}`} tabIndex="0" {...otherProps}>{children}</button>
  );
}

Button.defaultProps = {
  className: null,
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
