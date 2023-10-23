import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import img1 from "../assets/backLogin.jpg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const boxStyle = {
    backgroundColor: "#add8e6", // Warna biru muda
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  };
  const formGroup = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  };
  const input = {
    height: "40px",
    borderRadius: "25px",
    width: "350px",
    paddingLeft: "15px",
  };
  const labels = {
    fontSize: "20px",
    fontWeight: "500",
    color: "black",
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <div style={boxStyle}>
            <Form>
              <Form.Group controlId="formBasicEmail" style={formGroup}>
                <Form.Label style={labels}>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={input}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" style={formGroup}>
                <Form.Label style={labels}>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={input}
                />
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </Form.Group>

              <Button variant="primary" type="button" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;