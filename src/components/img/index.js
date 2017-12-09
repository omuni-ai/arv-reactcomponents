import React from 'react';
import PropTypes from 'prop-types';
import './_index.scss';

function Img(props) {
  const {
    className, src, defaultSrc, alt, ...otherProps
  } = props;
  return (
    <img className={`nwc-img ${className}`} src={src || defaultSrc} alt={alt} {...otherProps} />
  );
}

Img.defaultProps = {
  alt: 'NNNOW',
  src: PropTypes.string.defaultSrc,
  defaultSrc: '',
};

Img.propTypes = {
  className: PropTypes.string.isRequired,
  src: PropTypes.string,
  defaultSrc: PropTypes.string,
  alt: PropTypes.string,
};

export default Img;
