import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Supercar from "../assets/supercar.png";

function WidgetNavbar() {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      style={{ backgroundColor: "#121B6E" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={Supercar} alt="" width={45} /> Secondhand SuperCar Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/admin/login" className="">
                <Button variant="info">Admin Login</Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WidgetNavbar;
