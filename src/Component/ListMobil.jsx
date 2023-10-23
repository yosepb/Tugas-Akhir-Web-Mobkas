import React from "react";
import CardCar from "./CardCar";

function ListMobil() {
  const data = {
    title: "Card 1",
    description: "Description for Card 1",
    imageUrl: "https://via.placeholder.com/200x200",
    id: 3,
  };

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "80%",
          flexWrap: "wrap",
        }}
      >
        <CardCar key={data.id} items={data} />
      </div>
    </div>
  );
}

export default ListMobil;
