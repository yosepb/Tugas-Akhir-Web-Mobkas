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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import configApi from "../config.api";

registerLocale("id", id);
setDefaultLocale("id");

const PageInputCarTes = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    SweetAlert.fire({
      title: "Tambah",
      text: "Anda yakin ingin menambahkan data ini ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then(async (result) => {
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

        // Mengirim data ke endpoint POST /produk
        const payload = {
          // Ubah properti berikut sesuai dengan struktur data yang Anda inginkan
          nama: event.target.elements.nameCar.value,
          kilometer: event.target.elements.kilometerCar.value,
          tahun: event.target.elements.yearCar.value,
          transmisi: selectedItemTransmision,
          bahan_bakar: selectedItemFuel,
          foto: [processedImage1, processedImage2, processedImage3],
          tanggal: selectedDate,
        };

        try {
          const response = await fetch(`${configApi.BASE_URL}/produk`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          });

          if (response.ok) {
            // Tampilkan notifikasi sukses
            Swal.fire("Berhasil!", "Data telah ditambahkan.", "success");
          } else {
            // Tampilkan notifikasi gagal
            Swal.fire(
              "Gagal!",
              "Terjadi kesalahan saat menambahkan data.",
              "error"
            );
          }
        } catch (error) {
          // Tampilkan notifikasi gagal
          Swal.fire(
            "Gagal!",
            "Terjadi kesalahan saat menambahkan data.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div>
      <WidgetNavbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <h3>Tambah Mobil</h3>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="nameCar">
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan nama mobil"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="kilometerCar">
                    <Form.Label>Kilometer</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan kilometer mobil"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="yearCar">
                    <Form.Label>Tahun</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan tahun mobil"
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Transmisi</Form.Label>
                    <DropdownButton
                      id="dropdown-transmission"
                      title={selectedItemTransmision || "Pilih transmisi"}
                      onSelect={handleDropdownTransmission}
                      required
                    >
                      <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
                      <Dropdown.Item eventKey="Automatic">
                        Automatic
                      </Dropdown.Item>
                    </DropdownButton>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Bahan Bakar</Form.Label>
                    <DropdownButton
                      id="dropdown-fuel"
                      title={selectedItemFuel || "Pilih bahan bakar"}
                      onSelect={handleDropdownFuel}
                      required
                    >
                      <Dropdown.Item eventKey="Bensin">Bensin</Dropdown.Item>
                      <Dropdown.Item eventKey="Solar">Solar</Dropdown.Item>
                    </DropdownButton>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Foto Mobil</Form.Label>
                    <Form.Control
                      id="image1"
                      label="Foto 1"
                      type="file"
                      onChange={(event) => handleImageChange(event, 1)}
                      required
                    />
                    <Form.Control
                      id="image2"
                      label="Foto 2"
                      type="file"
                      onChange={(event) => handleImageChange(event, 2)}
                      required
                    />
                    <Form.Control
                      id="image3"
                      label="Foto 3"
                      type="file"
                      onChange={(event) => handleImageChange(event, 3)}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Tanggal</Form.Label>
                    <br />
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                      className="form-control"
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Tambah
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageInputCarTes;
