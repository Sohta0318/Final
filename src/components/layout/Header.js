import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/default">Final</Nav.Link>
          <Nav.Link href="/yoshino">Yoshino</Nav.Link>
          <Nav.Link href="/kaori">Kaori</Nav.Link>
          <Nav.Link href="/kyoko">Kyoko</Nav.Link>
          <Nav.Link href="/guilherm">Guilherm</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
