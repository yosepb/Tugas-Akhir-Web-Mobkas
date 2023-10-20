import React from "react";
import { Container, Card, Button } from "react-bootstrap";

function CardCar(items) {
  console.log({ items });
  return (
    <Container>
      <Card
        style={{
          width: "16rem",
          border: "1px solid black",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "200px",
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
                }}
              >
                {items.items.title}
              </Card.Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  backgroundColor: "transparent",
                  padding: "4px 10px 4px 10px ",
                  border: "1px solid blue",
                  color: "blue",
                  fontWeight: "500",
                  marginBottom: "-10px",
                }}
              >
                Best Deal
              </p>
              <p> Rp. 4.300.000 /bln</p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  gap: "5px",
                  marginTop: "-30px",
                }}
              >
                <p
                  style={{
                    fontSize: "11px",
                  }}
                >
                  Bayar pertama mulai dari
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Rp.20.000.000
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>16.736 km</p>
              </div>
              <div>
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
