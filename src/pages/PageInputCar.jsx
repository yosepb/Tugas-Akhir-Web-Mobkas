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
                      id="fuelCar"
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
                  <Button type="submit">Tambah</Button>
                </div>

                {/* Display processed images */}
                {processedImage1 && (
                  <div>
                    <img
                      src={processedImage1}
                      alt="Processed Image 1"
                      style={{ maxWidth: 300 }}
                    />
                  </div>
                )}

                {processedImage2 && (
                  <div>
                    <img
                      src={processedImage2}
                      alt="Processed Image 2"
                      style={{ maxWidth: 300 }}
                    />
                  </div>
                )}

                {processedImage3 && (
                  <div>
                    <img
                      src={processedImage3}
                      alt="Processed Image 3"
                      style={{ maxWidth: 300 }}
                    />
                  </div>
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