import React from "react";

const ProductFilter = ({ setFilter }) => {
  return (
    <div>
      <div>
        <button onClick={() => setFilter("all")} style={sx.buton}>
          All
        </button>
        <button onClick={() => setFilter("tersedia")} style={sx.buton}>
          Tersedia
        </button>
        <button onClick={() => setFilter("diproses")} style={sx.buton}>
          Diproses
        </button>
        <button onClick={() => setFilter("terjual")} style={sx.buton}>
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
