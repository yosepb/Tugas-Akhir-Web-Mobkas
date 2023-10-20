import React from "react";
import CarouselCar from "../Component/CarouselCar";
import Navbar from "../Component/Navbar";
import MainBanner from "../Component/MainBanner";
import TutorialBuyCar from "../Component/TutorialBuyCar";

function MainPages() {
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
          width: "60%",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "40px",
            fontWeight: "700",
            display: "flex",
            alignSelf: "start",
          }}
        >
          Mobil
        </p>
        <CarouselCar />
      </div>
      <div>
        <TutorialBuyCar />
      </div>
    </div>
  );
}

export default MainPages;
