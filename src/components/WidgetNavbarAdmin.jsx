import { Badge, Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Supercar from "../assets/supercar.png";

function WidgetNavbarAdmin() {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#121B6E" }}
    >
      <Container>
        <Navbar.Brand href="/admin">
          <img src={Supercar} alt="" width={45} /> Secondhand SuperCar Store{" "}
          <Badge bg="success">Admin</Badge>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/admin/input">
                <Button variant="primary">Tambah Data</Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">
                <Button onClick={handleLogout} variant="danger">
                  Logout
                </Button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">
                <Button variant="warning">🏛</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WidgetNavbarAdmin;
