import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

import './styles/_index.scss';

class Close extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      className,
      ...otherProps
    } = this.props;
    return (
      <Button
        className={`nwc-close ${className}`}
        {...otherProps}
      >
        ×
      </Button>
    );
  }
}

Close.defaultProps = {
  className: '',
};

Close.propTypes = {
  className: PropTypes.string,
};

export default Close;
