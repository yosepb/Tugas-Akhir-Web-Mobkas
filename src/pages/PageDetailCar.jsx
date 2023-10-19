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
import Carousel from "react-bootstrap/Carousel";

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
    <Container>
      <Row className="vh-100 d-flex justify-content-center mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Detail Kendaraan</Card.Title>
              <Row className="mt-4">
                <Col className="mb-4">
                  <Card>
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
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-4">
                  <Card style={{ height: "100%" }}>
                    <Card.Body>
                      <Card.Title>Opsi Pembelian</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PageDetailCar;
