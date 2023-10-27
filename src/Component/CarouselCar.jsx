import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import CardCar from "./CardCar";
import configApi from "../config.api";

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

export default function CarouselCar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${configApi.BASE_URL}/produk`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

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

  // const cardData = [
  //   {
  //     title: "Card 1",
  //     description: "Description for Card 1",
  //     imageUrl: "https://via.placeholder.com/200x200",
  //     id: 1,
  //   },
  //   {
  //     title: "Card 2",
  //     description: "Description for Card 1",
  //     imageUrl: "https://via.placeholder.com/200x200",
  //     id: 2,
  //   },
  //   {
  //     title: "Card 3",
  //     description: "Description for Card 1",
  //     imageUrl: "https://via.placeholder.com/200x200",
  //     id: 3,
  //   },
  //   {
  //     title: "Card 4",
  //     description: "Description for Card 1",
  //     imageUrl: "https://via.placeholder.com/200x200",
  //     id: 4,
  //   },
  //   {
  //     title: "Card 5",
  //     description: "Description for Card 1",
  //     imageUrl: "https://via.placeholder.com/200x200",
  //     id: 5,
  //   },
  //   {
  //     title: "Card 6",
  //     description: "Description for Card 1",
  //     imageUrl: "https://via.placeholder.com/200x200",
  //     id: 6,
  //   },
  // ];

  // console.log(products);

  return (
    <div style={{ width: "1310px", padding: "20px", marginTop: "40px" }}>
      <Slider {...settings}>
        {products.length > 0 &&
          products.map((product) => {
            if (
              !(product.status === "Dipesan" || product.status === "Terjual")
            ) {
              return <CardCar key={product._id} product={product} />;
            }
            console.log(product.status);
          })}
      </Slider>
    </div>
  );
}
