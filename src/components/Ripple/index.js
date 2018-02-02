import React, { PureComponent, cloneElement } from "react";
import PropTypes from "prop-types";

import Utils from "../_jsUtils";
import Dummy from "../Dummy";

class Ripple extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.modifyChildren = this.modifyChildren.bind(this);
  }

  componentWillUnmount() {
    this.handleClick = null;
    clearTimeout(this.timeoutId);
  }

  modifyChildren(child) {
    const onClickFn = child.props.onClick || Utils.noop;

    const wrappedElement = (
      <Dummy>
        {child.props.children}
        <div
          className={`nwc-ripple ${this.props.className}`}
          ref={context => {
            this.rippleRef = context;
          }}
        />
      </Dummy>
    );

    const clonedElement = cloneElement(child, {
      className: `nwc-ripple-container ${child.props.className}`,
      children: wrappedElement,
      onClick: e => {
        this.handleClick(e);
        onClickFn(e);
      },
    });

    return clonedElement;
  }

  toggleRippleClass(bool) {
    this.rippleRef.classList.toggle("is-active", bool);
  }

  handleClick(e) {
    const componentRef = this.rippleRef.parentElement;
    const parentClientRect = Utils.getBoundClientRect(componentRef);
    const child = this.rippleRef;

    const rippleWH = Math.max(parentClientRect.width, parentClientRect.height);
    child.style.height = `${rippleWH}px`;
    child.style.width = `${rippleWH}px`;

    const x = e.pageX - parentClientRect.left - rippleWH / 2;
    const y = e.pageY - parentClientRect.top - rippleWH / 2;
    child.style.left = `${x}px`;
    child.style.top = `${y}px`;

    this.toggleRippleClass(false);
    this.timeoutId = setTimeout(() => {
      this.toggleRippleClass(true);
    }, 100);
  }

  render() {
    return React.Children.map(this.props.children, this.modifyChildren);
  }
}

Ripple.defaultProps = {
  className: "",
};

Ripple.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

export default Ripple;
