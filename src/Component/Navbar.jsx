import React from "react";
import { BsCart3 } from "react-icons/Bs";

function Navbar() {
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "#121b6e",
        width: "100vw",
        top: "0px",
        display: "flex",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <img
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <BsCart3
            style={{
              width: "20px",
              height: "20px",
            }}
          />

          <p>HI : Gilang Erlangga</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
