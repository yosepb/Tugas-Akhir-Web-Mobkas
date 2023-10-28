import { Badge, Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function WidgetNavbarAdmin() {
  const handleLogout = () => {
    // Mengosongkan akses token dari header x-access-token
    // delete axios.defaults.headers.common["x-access-token"];

    // Logika lain untuk membersihkan data atau melakukan tindakan logout lainnya
    // contoh: menghapus token dari local storage, mengarahkan pengguna ke halaman login, dll.
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
          <Badge bg="secondary">Admin</Badge> Toko Mobil Bekas 🛒
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
            {/* <NavDropdown title="Nav User" id="basic-nav-dropdown">
              <NavDropdown.Item href="/detail">Detail Mobil</NavDropdown.Item>
            </NavDropdown> */}
            {/* <NavDropdown title="Nav Admin" id="basic-nav-dropdown">
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
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WidgetNavbarAdmin;
