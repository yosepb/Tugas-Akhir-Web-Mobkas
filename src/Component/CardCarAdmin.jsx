import { React, useState, useEffect } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import { BsSpeedometer2 } from "react-icons/Bs";
import { RiSpeedUpLine } from "react-icons/Ri";
import { useNavigate } from "react-router-dom";

import CarModel from "../models/CarModel";
import WidgetCommonIDR from "../components/WidgetCommonIDR";
import configApi from "../config.api";
import Swal from "sweetalert2";
import CardOverlay from "./CardOverlay";

export default function CardCarAdmin({ product }) {
  const [carData, setCarData] = useState(CarModel);
  const [showCard, setShowCard] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setCarData(product);
  }, [product]);

  const handleCardClick = (mobilId) => {
    navigate(`/admin/edit/${mobilId}`);
  };

  const handleCardDelete = (mobilId) => {
    Swal.fire({
      title: "Konfirmasi",
      text: "Anda yakin ingin menghapus komponen ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `${configApi.BASE_URL}/produk/${mobilId}`,
            {
              method: "DELETE",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );

          if (response.ok) {
            setShowCard(false);
            Swal.fire("Berhasil", "Komponen telah dihapus", "success");
          } else {
            console.log("Gagal mendapatkan data mobil");
          }
        } catch (error) {
          console.log("Terjadi kesalahan:", error);
        }
      }
    });
  };

  return (
    showCard && (
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
            position: "relative",
          }}
          onClick={() => handleCardClick(carData._id)}
        >
          <Button
            variant="danger"
            className="position-absolute top-0 end-0"
            style={{ borderTopRightRadius: "20px", zIndex: "9" }}
            onClick={(e) => {
              e.stopPropagation();
              handleCardDelete(carData._id);
            }}
          >
            X
          </Button>
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
    )
  );
}
