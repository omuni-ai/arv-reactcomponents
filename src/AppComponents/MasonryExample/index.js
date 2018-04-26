import React, { Component } from "react";
import { Img, GridColumn, Masonry } from "../../components";

class MasonryExample extends Component {
  static renderList(item) {
    return (
      <div>
        <div>{item.index}</div>
        <Img style={{ width: "100%" }} src={item.image} />
        <div>{item.content}</div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.data = [
      {
        index: 1,
        image:
          "http://hdwpro.com/wp-content/uploads/2016/03/Spring-Scenery-Wallpaper.jpg",
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
          "http://www.freegreatpicture.com/files/30/20759-mountain-valley-scenery.jpg",
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
      {
        index: 5,
        image:
          "http://hdwpro.com/wp-content/uploads/2016/03/Spring-Scenery-Wallpaper.jpg",
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
          "http://www.freegreatpicture.com/files/30/20759-mountain-valley-scenery.jpg",
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
          "http://hdwpro.com/wp-content/uploads/2016/03/Spring-Scenery-Wallpaper.jpg",
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
          "http://www.freegreatpicture.com/files/30/20759-mountain-valley-scenery.jpg",
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
          "http://hdwpro.com/wp-content/uploads/2016/03/Spring-Scenery-Wallpaper.jpg",
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
          "http://www.freegreatpicture.com/files/30/20759-mountain-valley-scenery.jpg",
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
    this.columnCount = { lg: 5, md: 4, sm: 3, xs: 2 };
  }

  render() {
    return (
      <GridColumn className="nw-block nw-block-white">
        <Masonry
          data={this.data}
          columnCount={this.columnCount}
          renderList={MasonryExample.renderList}
        />
      </GridColumn>
    );
  }
}

export default MasonryExample;
