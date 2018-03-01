import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Utils from "../_jsUtils";

const LazyImgRef = [];
class LazyImg extends PureComponent {
  static triggerLoad() {
    LazyImgRef.forEach(item => {
      let self = item;
      const itemIndex = LazyImgRef.indexOf(self);

      self.setState({
        inView: true,
      });

      LazyImgRef.splice(itemIndex, 1);
      self = null;
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      inView: false,
      isLoaded: false,
      isError: false,
    };

    this.removeListener = Utils.noop;
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.isInViewport = this.isInViewport.bind(this);
    this.isImageInView = this.isImageInView.bind(this);
    this.initLazyLoad = this.initLazyLoad.bind(this);
  }

  componentDidMount() {
    this.initLazyLoad();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.index !== this.props.index) {
      setTimeout(() => {
        if (this.isImageInView()) {
          this.setState({
            inView: true,
          });
        }
      }, 300);
    }
  }

  componentWillUnmount() {
    this.removeListener();
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

  get imgTagIfInView() {
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
    }

    this.removeListener = Utils.onElementScroll(
      window,
      () => {
        if (this.isImageInView()) {
          const { src } = this.props;
          const imgClone = document.createElement("img");
          imgClone.src = src;
          LazyImgRef.push(this);

          Utils.requestIdleCallback(LazyImg.triggerLoad, 300);
          this.removeListener();
        }
      },
      { passive: true },
    );
  }

  isInViewport(parentVals, elementVals) {
    const { offset } = this.props;

    if (!parentVals) {
      return true;
    }

    return (
      elementVals &&
      ((elementVals.top - offset > parentVals.top &&
        elementVals.top - offset < parentVals.bottom) ||
        (elementVals.bottom + offset > parentVals.top &&
          elementVals.bottom + offset < parentVals.bottom) ||
        (elementVals.top - offset < parentVals.top &&
          elementVals.bottom + offset > parentVals.bottom)) &&
      ((elementVals.left - offset > parentVals.left &&
        elementVals.left - offset < parentVals.right) ||
        (elementVals.right + offset > parentVals.left &&
          elementVals.right + offset < parentVals.right) ||
        (elementVals.left - offset < parentVals.left &&
          elementVals.right + offset > parentVals.right))
    );
  }

  isImageInView() {
    const { parentElement } = this.props;
    const { onWinLoad } = this.state;
    const windowScrollVals = Utils.windowScroll();
    const parentElementVals =
      (parentElement && Utils.getBoundClientRect(parentElement)) || null;
    const elementVals = Utils.getBoundClientRect(this.imgContainerRef);

    if (
      onWinLoad ||
      (this.isInViewport(windowScrollVals, elementVals) &&
        this.isInViewport(parentElementVals, elementVals))
    ) {
      return true;
    }

    return false;
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
      parentElement,
      ...otherProps
    } = this.props;

    return (
      <div
        className={`nwc-lazyimg-container ${className}`}
        ref={context => {
          this.imgContainerRef = context;
        }}
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
  alt: "NNNOW",
  src: null,
  onLoad: Utils.noop,
  onError: Utils.noop,
  offset: 0,
  parentElement: null,
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
};

export default LazyImg;
