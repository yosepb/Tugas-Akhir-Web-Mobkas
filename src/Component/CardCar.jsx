import { React, useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsSpeedometer2 } from "react-icons/Bs";
import { RiSpeedUpLine } from "react-icons/Ri";
import { AiOutlineHeart } from "react-icons/Ai";
import { useNavigate } from "react-router-dom";

import CarModel from "../models/CarModel";
import WidgetCommonIDR from "../components/WidgetCommonIDR";

export default function CardCar({ product }) {
  // console.log({ items });
  // console.log(items);

  const [carData, setCarData] = useState(CarModel);

  const navigate = useNavigate();

  useEffect(() => {
    setCarData(product);
    // console.log("console log dari CardCar", carData);
    // console.log(carData);
  }, [product]);

  // useEffect(() => {
  //   console.log("console log dari CardCar", carData);
  // }, [carData]);

  const handleCardClick = (mobilId) => {
    navigate(`/detail/${mobilId}`); // Melakukan navigasi ke '/detail/:id'
  };

  return (
    <div>
      <Card
        style={{
          width: "19rem",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
          backgroundColor: "white",
          color: "black",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        // onClick={() => navigate("/detail")}
        // onClick={() => navigate(`/detail/${carData._id}`)}
        onClick={() => handleCardClick(carData._id)}
      >
        <img
          src={carData.foto[0]}
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "20px",
          }}
        />
        <Card.Body
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "14rem",
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            <div>
              <Card.Title
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "130px",
                }}
              >
                <div>{carData.nama}</div>

                <AiOutlineHeart
                  style={{
                    color: "red",
                  }}
                />
              </Card.Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <p>
                <WidgetCommonIDR value={carData.harga} />
              </p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <BsSpeedometer2
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />{" "}
                {carData.kilometer} km
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <RiSpeedUpLine
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />{" "}
                {carData.transmisi}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
