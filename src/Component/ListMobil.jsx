import React, { useEffect, useState } from "react";
import CardCar from "./CardCar";
import ProductFilter from "./Filter";
import configApi from "../config.api";

function ListMobil() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(`${configApi.BASE_URL}/produk`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [filter]);

  const filteredProducts = products.filter((item) => {
    if (filter === "Tersedia") {
      return item.status === "Tersedia";
    } else if (filter === "Dipesan") {
      return item.status === "Dipesan";
    } else if (filter === "Terjual") {
      return item.status === "Terjual";
    }
    return true;
  });

  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <ProductFilter setFilter={setFilter} />
      </div>

      <div
        style={{
          width: "80%",
          display: "flex",
          gap: "20px",
          height: "auto",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        {filteredProducts.length > 0 &&
          filteredProducts.map((product) => (
            <CardCar key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ListMobil;
