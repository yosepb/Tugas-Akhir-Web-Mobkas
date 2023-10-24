import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function WidgetNavbar() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Toko Mobil Bekas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Nav User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/detail">Detail Mobil</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nav Admin" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/login">
                Login Admin
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin">Home Admin</NavDropdown.Item>
              <NavDropdown.Item href="/admin/detail-admin">
                Detail Mobil
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/input">
                Input Data
              </NavDropdown.Item>
              <NavDropdown.Item href="/admin/edit">Edit Data</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WidgetNavbar;
