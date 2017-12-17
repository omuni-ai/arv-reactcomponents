import React from 'react';
import PropTypes from 'prop-types';

import './styles/_index.scss';

function Label(props) {
  const {
    htmlFor,
    children,
    ...otherProps
  } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps}>
      <input type="hidden" />
      {children}
    </label>
  );
}

Label.defaultProps = {
  children: '',
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Label;
