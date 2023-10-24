import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  DropdownButton,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import WidgetNavbar from "../components/WidgetNavbar";
import Carousel from "react-bootstrap/Carousel";
import { BsFuelPump } from "react-icons/Bs";
import { TbLicense } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import { IoColorPaletteOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { LuGauge } from "react-icons/lu";
import { TbNumber } from "react-icons/tb";
import { BsCardText } from "react-icons/Bs";
import { BsCartPlus } from "react-icons/Bs";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import WidgetCommonIDR from "../components/WidgetCommonIDR";
import WidgetCommonHumanDate from "../components/WidgetCommonHumanDate";

// import moment from "moment";
// import "moment/locale/id"; // Atur locale ke bahasa Indonesia
// moment.locale("id"); // Set locale ke bahasa Indonesia

import { format, parseISO, setMonth } from "date-fns";
import { id as localeId } from "date-fns/locale"; // Atur locale ke bahasa Indonesia

import configApi from "../config.api";
import CarModel from "../models/CarModel";

registerLocale("id", id);
setDefaultLocale("id");

const PageDetailCar = ({ mobilId = "6535f33687f56b2bbf264175" }) => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [processedImage1, setProcessedImage1] = useState(null);
  const [processedImage2, setProcessedImage2] = useState(null);
  const [processedImage3, setProcessedImage3] = useState(null);

  const [carData, setCarData] = useState(CarModel);

  const [selectedItemTransmision, setSelectedItemTransmision] = useState("");
  const [selectedItemFuel, setSelectedItemFuel] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);

  const SweetAlert = withReactContent(Swal);

  const handleDropdownTransmission = (item) => {
    setSelectedItemTransmision(item);
  };

  const handleDropdownFuel = (item) => {
    setSelectedItemFuel(item);
  };

  const handleImageChange = (event, imageNumber) => {
    const selectedImage = event.target.files[0];
    switch (imageNumber) {
      case 1:
        setSelectedImage1(selectedImage);
        break;
      case 2:
        setSelectedImage2(selectedImage);
        break;
      case 3:
        setSelectedImage3(selectedImage);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    SweetAlert.fire({
      title: "Tambah",
      text: "Anda yakin ingin menambahkan data ini ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle form submission
        Swal.fire("Ditambahkan!", "Data telah ditambahkan.", "success");

        const processImage = (selectedImage, setProcessedImage) => {
          const reader = new FileReader();
          reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
              const canvas = document.createElement("canvas");
              const maxSize = Math.max(img.width, img.height);
              const targetSize = 1500; // Ukuran target yang diinginkan

              const scale = targetSize / maxSize;
              const scaledWidth = img.width * scale;
              const scaledHeight = img.height * scale;

              canvas.width = targetSize;
              canvas.height = targetSize;

              const context = canvas.getContext("2d");

              // Mengisi canvas dengan tepian warna
              context.fillStyle = "#D2E0FB";
              context.fillRect(0, 0, targetSize, targetSize);

              // Menggambar gambar dengan ukuran yang diubah ke dalam canvas
              const x = (targetSize - scaledWidth) / 2;
              const y = (targetSize - scaledHeight) / 2;
              context.drawImage(img, x, y, scaledWidth, scaledHeight);

              // Mengubah hasil canvas menjadi URL gambar
              const processedImageUrl = canvas.toDataURL();
              setProcessedImage(processedImageUrl);
              console.log("gambar baru diproses secara statis");
            };

            img.src = event.target.result;
          };

          reader.readAsDataURL(selectedImage);
        };

        if (selectedImage1) {
          processImage(selectedImage1, setProcessedImage1);
        }
        if (selectedImage2) {
          processImage(selectedImage2, setProcessedImage2);
        }
        if (selectedImage3) {
          processImage(selectedImage3, setProcessedImage3);
        }
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${configApi.BASE_URL}/produk/${mobilId}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);

          // handel tanggal
          // data.stnk = setMonth(data.stnk, -1);
          // data.stnk = "2023-05-30T17:00:00.000Z";
          console.log(data.stnk);
          // data.stnk = format(
          //   setMonth(parseISO(data.stnk), +3).setHours(0, 0, 0, 0),
          //   "MMMM, yyyy",
          //   {
          //     locale: localeId,
          //   }
          // );
          // data.stnk = format(
          //   parseISO(data.stnk).setHours(0, 0, 0, 0),
          //   "MMMM, yyyy",
          //   {
          //     locale: localeId,
          //   }
          // );

          setCarData(data);
        } else {
          console.log("Gagal mendapatkan data mobil");
        }
      } catch (error) {
        console.log("Terjadi kesalahan:", error);
      }
    };

    fetchData();
  }, [mobilId]);

  return (
    <>
      <WidgetNavbar />
      <Container>
        <Row className="vh-100 d-flex justify-content-center mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Detail Kendaraan {carData.nama}
                </Card.Title>
                <Row className="mt-4">
                  <Col className="mb-4">
                    <Card
                      style={{
                        border: "0px",
                      }}
                    >
                      <Card.Body>
                        <Carousel slide={false} data-bs-theme="dark">
                          <Carousel.Item>
                            <div className="carousel-image-wrapper">
                              <img src={carData.foto[0]} alt="" width={300} />
                            </div>
                          </Carousel.Item>
                          <Carousel.Item>
                            <div className="carousel-image-wrapper">
                              <img src={carData.foto[1]} alt="" width={300} />
                            </div>
                          </Carousel.Item>
                          <Carousel.Item>
                            <div className="carousel-image-wrapper">
                              <img src={carData.foto[2]} alt="" width={300} />
                            </div>
                          </Carousel.Item>
                        </Carousel>
                        <Row className="mt-4">
                          <Col>
                            <Card>
                              <Card.Body>
                                <Card.Title>Informasi Mobil</Card.Title>
                                <Row>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <LuGauge /> {carData.kilometer} Km
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <MdDateRange /> {carData.tahun}
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <GiGearStickPattern /> {carData.transmisi}
                                    </h6>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <TbNumber /> {carData.plat_nomor}
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <BsFuelPump /> {carData.bahan_bakar}
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <TbLicense />{" "}
                                      <WidgetCommonHumanDate
                                        date={carData.stnk}
                                      />
                                    </h6>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <IoColorPaletteOutline /> {carData.warna}
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <GoLocation /> {carData.lokasi}
                                    </h6>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                    <Card
                      style={{
                        border: "0px",
                      }}
                    >
                      <Card.Body>
                        <Row>
                          <Col
                            xs={8}
                            className="d-flex align-items-center justify-content-left"
                          >
                            Harga: <WidgetCommonIDR value={carData.harga} />
                          </Col>
                          <Col xs={4} className="d-flex justify-content-end">
                            <Button variant="success">
                              <BsCartPlus /> Beli via WhatsApp
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageDetailCar;
