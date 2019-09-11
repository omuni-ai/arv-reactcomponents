import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "intersection-observer";

import Utils from "../_jsUtils";

let bypass = false;
class LazyImg extends PureComponent {
  static bypass() {
    bypass = true;
  }

  static allow() {
    bypass = false;
  }

  constructor(props) {
    super(props);

    this.state = {
      inView: false,
      isLoaded: false,
      isError: false,
    };

    const observerOptions = {
      root: props.parentElement,
      rootMargin: `${props.rootMargin}px`,
      threshold: props.threshold,
    };

    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.setContext = this.setContext.bind(this);
    this.intersectionCallback = this.intersectionCallback.bind(this);

    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      this.observer = new IntersectionObserver(
        this.intersectionCallback,
        observerOptions,
      );
    } else {
      bypass = true;
    }
  }

  onLoad() {
    this.setState({
      isLoaded: true,
    });

    this.props.onLoad();
  }

  onError() {
    this.setState({
      isError: true,
    });

    if (!bypass) {
      this.props.onError();
    }
  }

  get imgStateClassName() {
    return (
      ((bypass || this.state.isLoaded) && "is-loaded") ||
      (this.state.isError && "is-error") ||
      ""
    );
  }

  get imgTagIfInView() {
    const { src, alt, onWinLoad } = this.props;
    const { inView } = this.state;

    if (bypass || onWinLoad || inView) {
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

  setContext(context) {
    this.imgContainerRef = context;
    const { onWinLoad } = this.props;
    if (!bypass && !onWinLoad) {
      this.observer.observe(context);
    }
  }

  intersectionCallback(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.requestIdleCallback(() => {
          this.setState({
            inView: true,
          });

          this.observer.unobserve(entry.target);
        });
      }
    });
  }

  render() {
    const {
      onWinLoad,
      index,
      offset,
      className,
      src,
      alt,
      onLoad,
      onError,
      rootMargin,
      threshold,
      parentElement,
      ...otherProps
    } = this.props;

    return (
      <div
        className={`nwc-lazyimg-container ${className}`}
        ref={this.setContext}
        {...otherProps}
      >
        {this.imgTagIfInView}
      </div>
    );
  }
}

LazyImg.defaultProps = {
  onWinLoad: false,
  className: "",
  alt: "",
  src: null,
  onLoad: Utils.noop,
  onError: Utils.noop,
  offset: 0,
  parentElement: null,
  rootMargin: 0,
  threshold: [0.1],
};

LazyImg.propTypes = {
  onWinLoad: PropTypes.bool,
  index: PropTypes.number.isRequired,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  offset: PropTypes.number,
  parentElement: PropTypes.shape({}),
  rootMargin: PropTypes.number,
  threshold: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
};

export default LazyImg;
