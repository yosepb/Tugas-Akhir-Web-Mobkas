import React, { useState } from "react";
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

import Carry1 from "../assets/carry (1).jpg";
import Carry2 from "../assets/carry (2).jpg";
import Carry3 from "../assets/carry (3).jpg";

registerLocale("id", id);
setDefaultLocale("id");

const PageDetailCar = () => {
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [processedImage1, setProcessedImage1] = useState(null);
  const [processedImage2, setProcessedImage2] = useState(null);
  const [processedImage3, setProcessedImage3] = useState(null);

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

  return (
    <>
      <WidgetNavbar />
      <Container>
        <Row className="vh-100 d-flex justify-content-center mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Detail Kendaraan
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
                              <img src={Carry1} alt="" width={300} />
                            </div>
                          </Carousel.Item>
                          <Carousel.Item>
                            <div className="carousel-image-wrapper">
                              <img src={Carry2} alt="" width={300} />
                            </div>
                          </Carousel.Item>
                          <Carousel.Item>
                            <div className="carousel-image-wrapper">
                              <img src={Carry3} alt="" width={300} />
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
                                      <LuGauge /> Total Kilometer
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <MdDateRange /> Tahun Produksi
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <GiGearStickPattern /> Jenis Transmisi
                                    </h6>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <TbNumber /> Plat Nomor
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <BsFuelPump /> Bahan Bakar
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <TbLicense /> Bulan & Tahun Pajak
                                    </h6>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <IoColorPaletteOutline /> Warna
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <GoLocation /> Lokasi
                                    </h6>
                                  </Col>
                                  <Col>
                                    <h6 className="text-center mt-3">
                                      <BsCardText /> ID Data Mobil
                                    </h6>
                                  </Col>
                                </Row>
                              </Card.Body>
                            </Card>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="mb-4">
                    <Card
                      style={{
                        height: "100%",
                        backgroundColor: "#F5F5F5",
                      }}
                    >
                      <Card.Body>
                        <Card.Title>Opsi Pembelian</Card.Title>
                        <Card className="mt-4">
                          <Card.Body>
                            <Row className="d-flex align-items-center justify-content-center">
                              <Col className="text-center" xs={3}>
                                <h6>5 Tahun</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Bayar Pertama</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Cicilan/Bulan</h6>
                              </Col>
                              <Col className="text-center" xs={2}>
                                <Button variant="primary">
                                  <BsCartPlus />
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                        <Card className="mt-4">
                          <Card.Body>
                            <Row className="d-flex align-items-center justify-content-center">
                              <Col className="text-center" xs={3}>
                                <h6>4 Tahun</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Bayar Pertama</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Cicilan/Bulan</h6>
                              </Col>
                              <Col className="text-center" xs={2}>
                                <Button variant="primary">
                                  <BsCartPlus />
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>

                        <Card className="mt-4">
                          <Card.Body>
                            <Row className="d-flex align-items-center justify-content-center">
                              <Col className="text-center" xs={3}>
                                <h6>3 Tahun</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Bayar Pertama</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Cicilan/Bulan</h6>
                              </Col>
                              <Col className="text-center" xs={2}>
                                <Button variant="primary">
                                  <BsCartPlus />
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                        <Card className="mt-4">
                          <Card.Body>
                            <Row className="d-flex align-items-center justify-content-center">
                              <Col className="text-center" xs={3}>
                                <h6>2 Tahun</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Bayar Pertama</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Cicilan/Bulan</h6>
                              </Col>
                              <Col className="text-center" xs={2}>
                                <Button variant="primary">
                                  <BsCartPlus />
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                        <Card className="mt-4">
                          <Card.Body>
                            <Row className="d-flex align-items-center justify-content-center">
                              <Col className="text-center" xs={3}>
                                <h6>1 Tahun</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Bayar Pertama</h6>
                              </Col>
                              <Col className="text-center">
                                <h6>Cicilan/Bulan</h6>
                              </Col>
                              <Col className="text-center" xs={2}>
                                <Button variant="primary">
                                  <BsCartPlus />
                                </Button>
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
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
