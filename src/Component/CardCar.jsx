import { React, useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { BsSpeedometer2 } from "react-icons/Bs";
import { RiSpeedUpLine } from "react-icons/Ri";
import { AiOutlineHeart } from "react-icons/Ai";
import { useNavigate } from "react-router-dom";

import CarModel from "../models/CarModel";
import WidgetCommonIDR from "../components/WidgetCommonIDR";
import CardOverlay from "./CardOverlay";

export default function CardCar({ product }) {
  const [carData, setCarData] = useState(CarModel);

  const navigate = useNavigate();

  useEffect(() => {
    setCarData(product);
  }, [product]);

  const handleCardClick = (mobilId) => {
    navigate(`/detail/${mobilId}`);
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
          {carData.status !== "Tersedia" ? (
            <CardOverlay status={carData.status} />
          ) : null}
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

                {/* <AiOutlineHeart
                  style={{
                    color: "red",
                  }}
                /> */}
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
