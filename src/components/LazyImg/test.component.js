import React from "react";

// Import common components
import { LazyImg } from "../";

const LazyImgExample = () => (
  <LazyImg
    index={0}
    className="nw-carouselexample-img"
    src="https://static.nnnow.com/client/assets/images/nnnow-logo-beta_1.png"
    offset={300}
    onWinLoad
  />
);

export default LazyImgExample;
