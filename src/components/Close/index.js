import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './styles/_index.scss';

function Close(props) {
  const {
    className,
    ...otherProps
  } = props;
  return (
    <Button
      className={`nwc-close ${className}`}
      {...otherProps}
    >
      ×
    </Button>
  );
}

Close.defaultProps = {
  className: '',
};

Close.propTypes = {
  className: PropTypes.string,
};

export default Close;
