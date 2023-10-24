import React, { useEffect, useState } from "react";
import CardCar from "./CardCar";
import ProductFilter from "./Filter";

function ListMobil() {
  const data = [
    {
      title: "terjual",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 1,
      type: "Terjual",
    },
    {
      title: "terjual",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 2,
      type: "Terjual",
    },
    {
      title: "terjual",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 3,
      type: "Terjual",
    },
    {
      title: "terjual",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 4,
      type: "Terjual",
    },
    {
      title: "terjual",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 5,
      type: "Terjual",
    },
    {
      title: "terjual",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 6,
      type: "Terjual",
    },
    {
      title: "tersedia",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 6,
      type: "tersedia",
    },
    {
      title: "tersedia",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 7,
      type: "tersedia",
    },
    {
      title: "tersedia",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 8,
      type: "tersedia",
    },
    {
      title: "tersedia",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 9,
      type: "tersedia",
    },
    {
      title: "tersedia",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 10,
      type: "tersedia",
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 11,
      type: "Diproses",
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 12,
      type: "Diproses",
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 13,
      type: "Diproses",
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 14,
      type: "Diproses",
    },
    {
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl: "https://via.placeholder.com/200x200",
      id: 15,
      type: "tersedia",
    },
  ];
  const [products, setProducts] = useState(data);
  const [filter, setFilter] = useState("");

  const filteredProducts = data.filter((data) => {
    if (filter === "tersedia") {
      return data.type === "tersedia";
    } else if (filter === "diproses") {
      return data.type === "Diproses";
    } else if (filter === "terjual") {
      return data.type === "Terjual";
    }
    return true;
  });
  useEffect(() => {
    setProducts(filteredProducts);
  }, [filter]);

  console.log(products);
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
        {products.map((item) => (
          <CardCar key={data.id} items={item} />
        ))}
      </div>
    </div>
  );
}

export default ListMobil;
