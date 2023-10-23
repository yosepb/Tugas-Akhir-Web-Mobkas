import React, { Component } from "react";
import Slider from "react-slick";
import CardCar from "./CardCar";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#121b6e",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#121b6e",
        width: "30px",
        height: "30px",
      }}
      onClick={onClick}
    />
  );
}

export default class CarouselCar extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    const cardData = [
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://via.placeholder.com/200x200",
        id: 1,
      },
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://via.placeholder.com/200x200",
        id: 2,
      },
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://via.placeholder.com/200x200",
        id: 3,
      },
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://via.placeholder.com/200x200",
        id: 3,
      },
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://via.placeholder.com/200x200",
        id: 3,
      },
      {
        title: "Card 1",
        description: "Description for Card 1",
        imageUrl: "https://via.placeholder.com/200x200",
        id: 3,
      },
    ];
    return (
      <div style={{}}>
        <Slider
          {...settings}
          style={{
            width: "1300px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          {cardData.map((item) => (
            <CardCar key={item.id} items={item} />
          ))}
        </Slider>
      </div>
    );
  }
}
