import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

// eslint-disable-next-line react/prefer-stateless-function
class Close extends PureComponent {
  render() {
    const { className, ...otherProps } = this.props;
    return (
      <Button className={`nwc-close ${className}`} {...otherProps}>
        &nbsp;
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
