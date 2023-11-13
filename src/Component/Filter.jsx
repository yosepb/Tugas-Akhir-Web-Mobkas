import React from "react";

const ProductFilter = ({ setFilter }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button onClick={() => setFilter("all")} style={sx.buton}>
          All
        </button>
        <button onClick={() => setFilter("Tersedia")} style={sx.buton}>
          Tersedia
        </button>
        <button onClick={() => setFilter("Dipesan")} style={sx.buton}>
          Dipesan
        </button>
        <button onClick={() => setFilter("Terjual")} style={sx.buton}>
          Terjual
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;

export const sx = {
  buton: {
    width: "100px",
    backgroundColor: "yellow",
    height: "40px",
    borderRadius: "20px",
    border: "none",
  },
};
