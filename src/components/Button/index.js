import React from "react";
import PropTypes from "prop-types";
import "./styles/_index.scss";

function Button(props) {
  const { className, children, ...otherProps } = props;
  return (
    <button className={`nwc-btn ${className}`} tabIndex="0" {...otherProps}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: "",
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Button;
