import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { BsSpeedometer2 } from "react-icons/Bs";
import { RiSpeedUpLine } from "react-icons/Ri";
import { AiOutlineHeart } from "react-icons/Ai";
import { useNavigate } from "react-router-dom";

function CardCar(items) {
  // console.log({ items });
  const navigate = useNavigate();
  return (
    <Container>
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
        onClick={() => navigate("/detail")}
      >
        <img
          style={{
            width: "100%",
            height: "200px",
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
                <div>{items.items.title}</div>

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
              <p> Rp. 4.300.000 /bln</p>
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
                />

                <p>16.736 km</p>
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
                />
                <p> Automatic</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardCar;
