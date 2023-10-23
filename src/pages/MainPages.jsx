import React, { useState } from "react";
import CarouselCar from "../Component/CarouselCar";
import Navbar from "../Component/Navbar";
import MainBanner from "../Component/MainBanner";
import TutorialBuyCar from "../Component/TutorialBuyCar";
import ListMobil from "../Component/ListMobil";

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
        }}
      >
        <CarouselCar />
      </div>
      <button
        style={{
          width: "120px",
          height: "40px",
          fontSize: "20px",
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          border: "none",
          marginTop: "80px",
        }}
        onClick={() => setToggle(!toggle)}
      >
        <p>All Car</p>
      </button>
      {toggle && (
        <div>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "700",
              display: "flex",
              alignSelf: "center",
              justifyContent: "center",
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
