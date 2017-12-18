import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import "./styles/_index.scss";

// eslint-disable-next-line react/prefer-stateless-function
class Close extends Component {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <Button className={`nwc-close ${className}`} {...otherProps}>
        ×
      </Button>
    );
  }
}

Close.defaultProps = {
  className: "",
};

Close.propTypes = {
  className: PropTypes.string,
};

export default Close;
