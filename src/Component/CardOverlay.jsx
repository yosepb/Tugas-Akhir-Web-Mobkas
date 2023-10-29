import React from "react";
import "../style.css";

const CardOverlay = ({ status }) => {
  return (
    <div className="card-overlays">
      <div className="cards">
        <i>{status}</i>
      </div>
    </div>
  );
};

export default CardOverlay;
