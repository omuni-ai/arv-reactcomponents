import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

class LazyImg extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inView: false,
      isLoaded: false,
      isError: false,
    };

    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.isImageInView = this.isImageInView.bind(this);
    this.initLazyLoad = this.initLazyLoad.bind(this);
  }

  componentDidMount() {
    this.initLazyLoad();
  }

  onLoad() {
    this.setState({
      isLoaded: true,
    });

    this.props.onLoad();
  }

  onError() {
    this.setState({
      isError: false,
    });

    this.props.onError();
  }

  get imgStateClassName() {
    return (
      (this.state.isLoaded && "is-loaded") ||
      (this.state.isError && "is-error") ||
      ""
    );
  }

  getImgTagIfInView() {
    const { src, alt } = this.props;
    const { inView } = this.state;

    if (inView) {
      return (
        <img
          className={`nwc-lazyimg ${this.imgStateClassName}`}
          src={src}
          alt={alt}
          onLoad={this.onLoad}
          onError={this.onError}
        />
      );
    }

    return null;
  }

  initLazyLoad() {
    if (this.isImageInView()) {
      this.setState({
        inView: true,
      });

      return;
    }

    Utils.onElementScroll(window, () => {
      if (this.isImageInView()) {
        this.setState({
          inView: true,
        });
      }
    });
  }

  isImageInView() {
    const { offset } = this.props;
    const windowScrollVals = Utils.windowScroll();
    const elementVals = Utils.getBoundClientRect(this.imgContainerRef);

    if (
      elementVals &&
      ((elementVals.top - offset > windowScrollVals.top &&
        elementVals.top - offset < windowScrollVals.bottom) ||
        (elementVals.bottom + offset > windowScrollVals.top &&
          elementVals.bottom + offset < windowScrollVals.bottom) ||
        (elementVals.top - offset < windowScrollVals.top &&
          elementVals.bottom + offset > windowScrollVals.bottom))
    ) {
      return true;
    }

    return false;
  }

  render() {
    const { className, src, alt, onLoad, onError, ...otherProps } = this.props;

    return (
      <div
        className={`nwc-lazyimg-container ${className}`}
        ref={context => {
          this.imgContainerRef = context;
        }}
        {...otherProps}
      >
        {this.getImgTagIfInView()}
      </div>
    );
  }
}

LazyImg.defaultProps = {
  className: "",
  alt: "NNNOW",
  src: null,
  onLoad: Utils.noop,
  onError: Utils.noop,
  offset: 0,
};

LazyImg.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  offset: PropTypes.number,
};

export default LazyImg;
