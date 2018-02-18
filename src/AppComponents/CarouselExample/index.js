import React, { PureComponent } from "react";
import {
  GridRow,
  GridColumn,
  Carousel,
  Utils,
  LazyImg,
  Button,
} from "../../components";

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
        />
      </div>
    );
  }

  render() {
    const { index } = this.state;

    return (
      <GridColumn className="nw-block-wrapper nwc-grid-col-sm-12">
        <h1>Carousel</h1>
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
                this.setIndex(0);
              }}
            >
              1
            </Button>
            <Button
              onClick={() => {
                this.setIndex(1);
              }}
            >
              2
            </Button>
            <Button
              onClick={() => {
                this.setIndex(2);
              }}
            >
              3
            </Button>
            <Button
              onClick={() => {
                this.setIndex(3);
              }}
            >
              4
            </Button>
          </GridColumn>
        </GridRow>
      </GridColumn>
    );
  }
}

export default CarouselExample;
