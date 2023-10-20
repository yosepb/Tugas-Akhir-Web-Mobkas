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
            <NavDropdown title="Nav Sementara" id="basic-nav-dropdown">
              <NavDropdown.Item href="/detail">Detail Mobil</NavDropdown.Item>
              <NavDropdown.Item href="/input">
                Input Data Mobil
              </NavDropdown.Item>
            </NavDropdown>
            {/* <NavDropdown title="Transactions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/salaries">
                Salary (Payroll)
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default WidgetNavbar;
