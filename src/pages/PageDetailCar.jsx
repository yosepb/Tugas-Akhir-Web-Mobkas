import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Modal,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
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
import { BsCartPlus } from "react-icons/Bs";
import WidgetCommonIDR from "../components/WidgetCommonIDR";
import WidgetCommonHumanDate from "../components/WidgetCommonHumanDate";
import configApi from "../config.api";
import CarModel from "../models/CarModel";
import CustomerModel from "../models/CustomerModel";
import Footer from "../Component/Footer";

// const PageDetailCar = ({ mobilId = "6535f33687f56b2bbf264175" }) => {
const PageDetailCar = () => {
  const { mobilId } = useParams();
  const [carData, setCarData] = useState(CarModel);
  const [customerData, setCustomerData] = useState(CustomerModel);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeStatusToDipesan = async () => {
    try {
      const response = await fetch(
        `${configApi.BASE_URL}/produk/${mobilId}/dipesan`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  const post = async () => {
    try {
      const response = await fetch(`${configApi.BASE_URL}/customers`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      let content = await response.json();
      setCustomerData(content);
      wa(content);
      changeStatusToDipesan();
      window.location.reload();
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  const wa = () => {
    const number = 62881022378893;
    const sites = "http://localhost:5173/detail";
    const goto = `https://wa.me/${number}?text=${sites}/${mobilId}%0A%0APerkenalkan, saya: %0ANama%20: ${customerData.nama}%0AKTP: ${customerData.ktp}%0ANomor HP/WA: ${customerData.hp}%0AAlamat: ${customerData.alamat}%0ASaya tertarik dengan mobil yang berada di link tersemat. Mohon untuk dibalas.`;
    window.open(goto, "_blank");
  };

  const handleCustomer = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (e.target.type === "number") {
      value = parseInt(value);
    }

    setCustomerData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    post();
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
        <Row className="d-flex justify-content-center mt-4 mb-5">
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
                            {!(
                              carData.status === "Dipesan" ||
                              carData.status === "Terjual"
                            ) ? (
                              <Button variant="success" onClick={handleShow}>
                                <BsCartPlus /> Pesan Mobil via WhatsApp
                              </Button>
                            ) : (
                              <h3>
                                <i>
                                  Telah <u>{carData.status}</u>
                                </i>
                              </h3>
                            )}
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

        {/* modal disini untuk tampil customer input */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Masukan Data Pembeli</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="nama" className="mb-3">
                    <Form.Label>Nama Pembeli</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Masukan Nama Anda"
                      name="nama"
                      value={customerData.nama}
                      onChange={handleCustomer}
                    />
                  </Form.Group>

                  <Form.Group controlId="ktp" className="mt-3 mb-3">
                    <Form.Label>KTP Pembeli</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Masukan KTP Anda"
                      maxLength={16}
                      pattern="\d*"
                      name="ktp"
                      value={customerData.ktp}
                      onChange={handleCustomer}
                    />
                  </Form.Group>

                  <Form.Group controlId="hp" className="mt-3 mb-3">
                    <Form.Label>Nomor HP/WhatsApp Pembeli</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Masukan Nomor HP/WA Anda"
                      maxLength={14}
                      pattern="\d*"
                      name="hp"
                      value={customerData.hp}
                      onChange={handleCustomer}
                    />
                  </Form.Group>

                  <Form.Group controlId="alamat" className="mt-3 mb-3">
                    <Form.Label>Alamat Pembeli</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Masukan Alamat Anda"
                      name="alamat"
                      value={customerData.alamat}
                      onChange={handleCustomer}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" variant="primary" className="mt-3 mb-3">
                    <BsCartPlus /> Beli
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </>
  );
};

export default PageDetailCar;
