import React, { useState, useEffect } from "react";
import CarouselCar from "../Component/CarouselCar";
import Navbar from "../Component/Navbar";
import MainBanner from "../Component/MainBanner";
import TutorialBuyCar from "../Component/TutorialBuyCar";
import ListMobil from "../Component/ListMobil";
import { BiSolidDownArrow } from "react-icons/Bi";
import ProductFilter from "../Component/Filter";
import configApi from "../config.api";

function MainPages() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${configApi.BASE_URL}/produk`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const [toggle, setToggle] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <MainBanner />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#121b6e",
          position: "relative",
          marginTop: "20px",
        }}
      >
        {/* {products.length > 0 && <CarouselCar />} */}
        <CarouselCar />
        <button
          style={{
            fontSize: "20px",
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "none",
            marginTop: "80px",
            textAlign: "center",
            flexDirection: "column",
            backgroundColor: "transparent",
            position: "absolute",
            right: "100px",
          }}
          onClick={() => setToggle(!toggle)}
        >
          <p
            style={{
              color: "white",
            }}
          >
            All Car
          </p>
          <BiSolidDownArrow
            style={{
              width: "150px",
              height: "150px",
              marginTop: "-40px",
              color: "yellow",
            }}
          />
        </button>
      </div>

      {toggle && (
        <div>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "700",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            {" "}
            All Mobil
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100vw",
            }}
          >
            <ListMobil />
          </div>
        </div>
      )}

      <p style={sx.caraBeli}> Cara Beli Mobil</p>
      <div style={sx.boxTutor}>
        <TutorialBuyCar />
      </div>
    </div>
  );
}

export default MainPages;

export const sx = {
  boxTutor: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#eceeff",
  },
  caraBeli: {
    fontSize: "40px",
    fontWeight: "700",
    display: "flex",
    alignSelf: "center",
  },
};