import React from "react";
import PropTypes from "prop-types";
import "./styles/_index.scss";

function Img(props) {
  const { className, src, defaultSrc, alt, ...otherProps } = props;
  return (
    <img
      className={`nwc-img ${className}`}
      src={src || defaultSrc}
      alt={alt}
      {...otherProps}
    />
  );
}

Img.defaultProps = {
  className: "",
  alt: "NNNOW",
  src: null,
  defaultSrc: "",
};

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  alt: PropTypes.string,
};

export default Img;
