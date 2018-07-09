import React from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

function Img(props) {
  const { className, src, alt, onLoad, onError, ...otherProps } = props;
  return (
    <img
      className={`nwc-img ${className}`}
      src={src}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      {...otherProps}
    />
  );
}

Img.defaultProps = {
  className: "",
  alt: "NNNOW",
  src: null,
  onLoad: Utils.noop,
  onError: Utils.noop,
};

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
};

export default Img;
