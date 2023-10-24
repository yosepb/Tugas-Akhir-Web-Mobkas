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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import configApi from "../config.api";

import CarModel from "../models/CarModel";

registerLocale("id", id);
setDefaultLocale("id");

const PageEditCar = ({ mobilId = "6535f33687f56b2bbf264175" }) => {
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

  const processImage = (selectedImage, setProcessedImage) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        const targetSize = 1100; // Ukuran target gambar yang diinginkan

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
        // console.log("gambar baru diproses secara statis");
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    SweetAlert.fire({
      title: "Edit",
      text: "Anda yakin ingin mengubah data ini ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Handle form submission
        Swal.fire("Diubah!", "Data telah diubah.", "success");

        // Mengirim data ke endpoint POST /produk
        const payload = {
          nama: event.target.nameCar.value,
          kilometer: event.target.kilometerCar.value,
          tahun: event.target.yearCar.value,
          transmisi: selectedItemTransmision,
          bahan_bakar: selectedItemFuel,
          plat_nomor: event.target.platCar.value,
          foto: [processedImage1, processedImage2, processedImage3],
          stnk: selectedDate,
        };

        console.log(payload);

        try {
          const response = await fetch(
            `${configApi.BASE_URL}/produk/${mobilId}`,
            {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );

          if (response.ok) {
            console.log("Data berhasil dikirim ke endpoint PUT /produk");

            // refresh Halaman
            window.location.reload();
          } else {
            console.log("Gagal mengirim data ke endpoint POST /produk");
          }
        } catch (error) {
          // console.log(response);
          console.log("Terjadi kesalahan:", error);
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
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  Edit Data Mobil Bekas
                </Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="nameCar" className="mt-3 mb-3">
                    <Form.Label>Nama Mobil</Form.Label>
                    <Form.Control
                      required
                      name="nameCar"
                      type="text"
                      placeholder="Masukan Nama"
                      defaultValue={carData.nama}
                    />
                  </Form.Group>

                  <Form.Group controlId="kilometerCar" className="mb-3">
                    <Form.Label>Total Kilometer</Form.Label>
                    <Form.Control
                      required
                      name="kilometerCar"
                      type="number"
                      placeholder="Masukan Total Kilometer"
                      defaultValue={carData.kilometer}
                    />
                  </Form.Group>

                  <Form.Group controlId="yearCar" className="mb-3">
                    <Form.Label>Tahun Produksi</Form.Label>
                    <Form.Control
                      required
                      name="yearCar"
                      type="number"
                      placeholder="Masukan Tahun Produksi"
                      defaultValue={carData.tahun}
                    />
                  </Form.Group>

                  <Form.Group controlId="transmissionCar" className="mb-3">
                    <Form.Label>Transmisi</Form.Label>
                    <InputGroup>
                      <DropdownButton
                        required
                        id="transmissionCar"
                        title=" "
                        onSelect={handleDropdownTransmission}
                      >
                        <Dropdown.Item eventKey="Manual">Manual</Dropdown.Item>
                        <Dropdown.Item eventKey="Automatic">
                          Automatic
                        </Dropdown.Item>
                      </DropdownButton>
                      <Form.Control
                        required
                        disabled
                        name="transmissionCar"
                        // value={selectedItemTransmision}
                        placeholder="👈 pilih di sini"
                        defaultValue={
                          selectedItemTransmision || carData.transmisi
                        }
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="platCar" className="mt-3 mb-3">
                    <Form.Label>Plat Nomor</Form.Label>
                    <Form.Control
                      required
                      name="platCar"
                      type="text"
                      pattern="[A-Z0-9]+"
                      maxLength={9}
                      placeholder="Masukan Plat Nomor"
                      title="Plat nomor harus terdiri dari huruf kapital dan/atau angka"
                      defaultValue={carData.plat_nomor}
                    />
                  </Form.Group>

                  <Form.Group controlId="fuelCar" className="mb-3">
                    <Form.Label>Bahan Bakar</Form.Label>
                    <InputGroup>
                      <DropdownButton
                        required
                        id="fuelCar"
                        title=" "
                        onSelect={handleDropdownFuel}
                      >
                        <Dropdown.Item eventKey="Bensin">Bensin</Dropdown.Item>
                        <Dropdown.Item eventKey="Diesel">Diesel</Dropdown.Item>
                        <Dropdown.Item eventKey="Listrik">
                          Listrik
                        </Dropdown.Item>
                      </DropdownButton>
                      <Form.Control
                        required
                        disabled
                        name="fuelCar"
                        // value={selectedItemFuel}
                        placeholder="👈 pilih di sini"
                        defaultValue={selectedItemFuel || carData.bahan_bakar}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group controlId="taxCar" className="mb-3">
                    <Form.Label>Bulan & Tahun Pajak</Form.Label>
                    <br />
                    <DatePicker
                      required
                      id="taxCar"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      showMonthYearPicker
                      dateFormat="MMMM, yyyy"
                      placeholderText="Isi Bulan/Tahun di sini"
                      className="form-control"
                    />
                  </Form.Group>

                  <Form.Group controlId="imageUpload1" className="mb-3">
                    <Form.Label>Gambar Mobil 1</Form.Label>
                    <Form.Control
                      required
                      type="file"
                      onChange={(event) => handleImageChange(event, 1)}
                      defaultValue={carData.foto[0]}
                    />
                  </Form.Group>

                  <Form.Group controlId="imageUpload2" className="mb-3">
                    <Form.Label>Gambar Mobil 2 (opsional)</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(event) => handleImageChange(event, 2)}
                    />
                  </Form.Group>

                  <Form.Group controlId="imageUpload3" className="mb-3">
                    <Form.Label>Gambar Mobil 3 (opsional)</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(event) => handleImageChange(event, 3)}
                    />
                  </Form.Group>

                  <div className="gap-2 mb-3">
                    <Button type="submit">Edit</Button>
                  </div>
                  {
                    <div>
                      <img
                        src={carData.foto[0]}
                        alt="Gambar 1 Kosong"
                        style={{ maxWidth: 300 }}
                      />
                    </div>
                  }
                  {
                    <div>
                      <img
                        src={carData.foto[1]}
                        alt="Gambar 2 Kosong"
                        style={{ maxWidth: 300 }}
                      />
                    </div>
                  }
                  {
                    <div>
                      <img
                        src={carData.foto[2]}
                        alt="Gambar 3 Kosong"
                        style={{ maxWidth: 300 }}
                      />
                    </div>
                  }
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PageEditCar;
