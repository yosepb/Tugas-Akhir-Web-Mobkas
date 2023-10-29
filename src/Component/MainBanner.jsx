import React from "react";
import Wallpaper from "../assets/wall.jpg";

function MainBanner() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          marginTop: "20px",
          width: "1200px",
          height: "400px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Wallpaper})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#ffffff",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
          }}
        >
          SECONDHAND SUPERCAR STORE
        </h1>
      </div>
    </div>
  );
}

export default MainBanner;
