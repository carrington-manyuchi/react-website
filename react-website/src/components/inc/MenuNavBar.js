import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function MenuNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>s
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="Subjects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ReactJS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                React Native
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Strapi</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Bootstrap</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNavBar;
