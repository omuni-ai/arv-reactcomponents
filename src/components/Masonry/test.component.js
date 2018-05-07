import React, { Component } from "react";
import { Img, GridRow, GridColumn, Masonry } from "../../components";

class MasonryTest extends Component {
  static renderList(item) {
    return (
      <div key={item.index}>
        <div>{item.index}</div>
        <Img style={{ width: "100%" }} src={item.image} />
        <div>{item.content}</div>
        <br />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          index: 1,
          image:
            "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
          index: 2,
          image:
            "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
          index: 3,
          image:
            "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
        {
          index: 4,
          image:
            "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        },
      ],
    };
    this.columnCount = { lg: 2, md: 3, sm: 4, xs: 12 };
  }

  componentDidMount() {
    const newData = [
      {
        index: 5,
        image:
          "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 6,
        image:
          "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 7,
        image:
          "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 8,
        image:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 9,
        image:
          "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 10,
        image:
          "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 11,
        image:
          "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 12,
        image:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 13,
        image:
          "https://i.pinimg.com/236x/a7/0f/a2/a70fa29cbdd07046f782ba7ac952a2af--charlotte-north-carolina-charlotte-nc.jpg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 14,
        image:
          "https://img1.picmix.com/output/pic/normal/9/7/6/6/3696679_c7168.gif",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 15,
        image:
          "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
      {
        index: 16,
        image:
          "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-scenery-3-arun-sivaprasad.jpg",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      },
    ];

    setTimeout(() => {
      this.setState({
        data: [...this.state.data, ...newData],
      });
    }, 600);
  }

  render() {
    return (
      <GridColumn className="nw-block nw-block-white">
        <h1>Masonry</h1>
        <GridRow>
          <Masonry
            data={this.state.data}
            columnCount={this.columnCount}
            renderList={MasonryTest.renderList}
          />
        </GridRow>
      </GridColumn>
    );
  }
}

export default MasonryTest;
