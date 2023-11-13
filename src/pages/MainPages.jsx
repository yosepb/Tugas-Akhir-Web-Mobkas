import React, { useState } from "react";
import CarouselCar from "../Component/CarouselCar";
import Navbar from "../Component/Navbar";
import MainBanner from "../Component/MainBanner";
import TutorialBuyCar from "../Component/TutorialBuyCar";
import ListMobil from "../Component/ListMobil";
import { BiSolidDownArrow } from "react-icons/Bi";
import WidgetNavbar from "../components/WidgetNavbar";
import Footer from "../Component/Footer";

function MainPages() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <WidgetNavbar />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MainBanner />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            backgroundColor: "#121b6e",
            position: "relative",
            marginTop: "20px",
            paddingBottom: "40px",
          }}
        >
          <CarouselCar />
          <button
            className="brespon"
            style={{
              fontSize: "20px",
              fontWeight: "600",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              marginTop: "40px",
              textAlign: "center",
              flexDirection: "column",
              backgroundColor: "transparent",
            }}
            onClick={() => setToggle(!toggle)}
          >
            <p
              style={{
                color: "black",
                padding: "10px",
                borderRadius: "10px",
                backgroundColor: "yellow",
                width: "8rem",
              }}
            >
              All Car
            </p>
            {/* <BiSolidDownArrow
              style={{
                width: "150px",
                height: "150px",
                marginTop: "-40px",
                color: "yellow",
              }}
            /> */}
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
                marginTop: "10px",
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

        {/* <p style={sx.caraBeli}> Cara Beli Mobil</p>
        <div style={sx.boxTutor}>
          <TutorialBuyCar />
        </div> */}
      </div>
      <Footer />
    </>
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
