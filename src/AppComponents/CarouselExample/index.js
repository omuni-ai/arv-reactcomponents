import React, { PureComponent } from "react";
import {
  GridRow,
  GridColumn,
  Carousel,
  Utils,
  LazyImg,
  Button,
} from "../../components";

import ShowCode from "../ShowCode";

const componentFilePath = "CarouselExample/index.js";

class CarouselExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.items = [
      {
        id: "zsfef",
        image:
          "https://cdn04.nnnow.com/web-images/medium/styles/7AZZWRHJ7WR/1473936756887/2.jpg",
      },
      {
        id: "afaf",
        image:
          "https://cdn02.nnnow.com/web-images/medium/styles/GE1QP56A4BB/1487854795485/2.jpg",
      },
      {
        id: "fafa",
        image:
          "https://cdn17.nnnow.com/web-images/medium/styles/MA8M6WD5PAL/1473157768702/2.jpg",
      },
      {
        id: "sggaf",
        image:
          "https://cdn16.nnnow.com/web-images/medium/styles/V4XYIADIQ9C/1481106617805/2.jpg",
      },
    ];

    this.onItemClick = this.onItemClick.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  onItemClick(index) {
    console.log(this.state.index, index);
  }

  setIndex(index) {
    this.setState({
      index,
    });
  }

  renderItems(item, index) {
    return (
      <div
        key={item.id}
        role="presentation"
        className="nw-carouselexample-item"
        onKeyDown={Utils.noop}
        onClick={() => {
          this.onItemClick(index);
        }}
      >
        <LazyImg
          index={this.state.index}
          className="nw-carouselexample-img"
          src={item.image}
          rootMargin="1500px"
        />
      </div>
    );
  }
  render() {
    const { index } = this.state;
    const nextIndex = index + 1;
    const limitNextIndex = nextIndex >= this.items.length ? index : nextIndex;

    const prevIndex = index - 1;
    const limitPrevIndex = prevIndex < 0 ? index : prevIndex;

    return (
      <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
        <h1 className="nw-header">Carousel</h1>
        <ShowCode fileName={componentFilePath} />
        <GridRow>
          <GridColumn className="nwc-grid-col-sm-12 nw-block nw-block-white">
            <Carousel
              className="nw-carouselexample"
              index={index}
              items={this.items}
              renderItems={this.renderItems}
            />
            <Button
              onClick={() => {
                this.setIndex(limitPrevIndex);
              }}
            >
              &lt;
            </Button>
            <Button
              onClick={() => {
                this.setIndex(limitNextIndex);
              }}
            >
              &gt;
            </Button>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default CarouselExample;
