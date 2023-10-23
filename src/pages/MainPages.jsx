import React, { useState } from "react";
import CarouselCar from "../Component/CarouselCar";
import Navbar from "../Component/Navbar";
import MainBanner from "../Component/MainBanner";
import TutorialBuyCar from "../Component/TutorialBuyCar";
import ListMobil from "../Component/ListMobil";
import { BiSolidDownArrow } from "react-icons/Bi";

function MainPages() {
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

      <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          display: "flex",
          alignSelf: "center",
        }}
      >
        Mobil
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          backgroundColor: "#121b6e",
          position: "relative",
        }}
      >
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
            right: "300px",
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
              backgroundColor: "#121b6e",
            }}
          >
            <ListMobil />
          </div>
        </div>
      )}

      <p
        style={{
          fontSize: "40px",
          fontWeight: "700",
          display: "flex",
          alignSelf: "center",
        }}
      >
        {" "}
        Cara Beli Mobil
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
          backgroundColor: "#eceeff",
        }}
      >
        <TutorialBuyCar />
      </div>
    </div>
  );
}

export default MainPages;
