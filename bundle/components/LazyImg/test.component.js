import React, { Component, Fragment } from "react";

// Import common components
import { LazyImg, Utils } from "../";

class LazyImgExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      isLoaded: false,
    };

    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    Utils.requestAnimationFrame(() => {
      this.setState({
        isLoaded: true,
      });
    });
  }

  setRef(ref) {
    this.wrapperRef = ref;
  }

  changeIndex() {
    this.setState({
      index: 1,
    });
  }

  render() {
    const { isLoaded, index } = this.state;

    return (
      <div ref={this.setRef}>
        <LazyImg
          index={index}
          className="nw-carouselexample-img1"
          src="https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png"
          offset={300}
          onWinLoad
        />
        <LazyImg
          index={0}
          className="nw-carouselexample-img2"
          src="https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png"
          offset={300}
        />
        {(isLoaded && (
          <Fragment>
            <LazyImg
              index={0}
              className="nw-carouselexample-img3"
              src="https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png"
              parentElement={this.wrapperRef}
            />
            <LazyImg
              index={0}
              className="nw-carouselexample-img4"
              src="https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png"
              offset={300}
              parentElement={this.wrapperRef}
            />
          </Fragment>
        )) ||
          null}
      </div>
    );
  }
}

export default LazyImgExample;
