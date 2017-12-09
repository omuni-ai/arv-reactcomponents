import React from 'react';
import PropTypes from 'prop-types';

import './_index.scss';

function Label(props) {
  const {
    htmlFor,
    children,
    ...otherProps
  } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps}>
      <input type="radio" className="nwc-label-radio" />
      {children}
    </label>
  );
}

Label.defaultProps = {
  htmlFor: '',
  children: null,
};

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};

export default Label;
