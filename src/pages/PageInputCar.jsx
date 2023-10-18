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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

registerLocale("id", id);
setDefaultLocale("id");

const PageInputCar = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);

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

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
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
        const reader = new FileReader();
        reader.onload = function (event) {
          const img = new Image();
          img.onload = function () {
            const canvas = document.createElement("canvas");
            const maxSize = Math.max(img.width, img.height);
            const targetSize = 1500; // Ukuran target yang diinginkan
            const displaySize = 300; // Ukuran tampilan yang diinginkan

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
      }
    });
  };

  return (
    <Container>
      <Row className="vh-100 d-flex justify-content-center mt-4">
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Input Data Mobil Bekas
              </Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="nameCar" className="mt-3 mb-3">
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control
                    required
                    name="nameCar"
                    type="text"
                    placeholder="Masukan Nama"
                  />
                </Form.Group>

                <Form.Group controlId="kilometerCar" className="mb-3">
                  <Form.Label>Total Kilometer</Form.Label>
                  <Form.Control
                    required
                    name="kilometerCar"
                    type="number"
                    placeholder="Masukan Total Kilometer"
                  />
                </Form.Group>

                <Form.Group controlId="yearCar" className="mb-3">
                  <Form.Label>Tahun Produksi</Form.Label>
                  <Form.Control
                    required
                    name="yearCar"
                    type="number"
                    placeholder="Masukan Tahun Produksi"
                  />
                </Form.Group>

                <Form.Group controlId="transmissionCar" className="mb-3">
                  <Form.Label>Transmisi</Form.Label>
                  <InputGroup>
                    <DropdownButton
                      required
                      id="dropdown-transmissionCar"
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
                      value={selectedItemTransmision}
                      placeholder="👈 pilih di sini"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="platCar" className="mt-3 mb-3">
                  <Form.Label>Plat Nomor</Form.Label>
                  <Form.Control
                    required
                    name="platCar"
                    type="text"
                    placeholder="Masukan Plat Nomor"
                  />
                </Form.Group>

                <Form.Group controlId="fuelCar" className="mb-3">
                  <Form.Label>Bahan Bakar</Form.Label>
                  <InputGroup>
                    <DropdownButton
                      required
                      id="dropdown-fuelCar"
                      title=" "
                      onSelect={handleDropdownFuel}
                    >
                      <Dropdown.Item eventKey="Bensin">Bensin</Dropdown.Item>
                      <Dropdown.Item eventKey="Diesel">Diesel</Dropdown.Item>
                      <Dropdown.Item eventKey="Listrik">Listrik</Dropdown.Item>
                    </DropdownButton>
                    <Form.Control
                      required
                      disabled
                      name="fuelCar"
                      value={selectedItemFuel}
                      placeholder="👈 pilih di sini"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Bahan Bakar</Form.Label>
                  <br />
                  <DatePicker
                    required
                    selected={selectedDate}
                    onChange={handleDateChange}
                    showMonthYearPicker
                    dateFormat="MMMM, yyyy"
                    placeholderText="Isi Bulan/Tahun di sini"
                    className="form-control"
                  />
                </Form.Group>

                <Form.Group controlId="imageUpload" className="mb-3">
                  <Form.Label>Gambar Mobil</Form.Label>
                  <Form.Control
                    required
                    type="file"
                    onChange={handleImageChange}
                  />
                </Form.Group>

                <div className="gap-2 mb-3">
                  <Button type="submit">Tambah</Button>
                </div>

                {processedImage && (
                  <img
                    src={processedImage}
                    alt="Processed Image"
                    style={{ maxWidth: 300 }}
                  />
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PageInputCar;
