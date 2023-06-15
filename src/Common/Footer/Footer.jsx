import "./styles.css";
import React from "react";
import { Col, NavDropdown, NavLink, Nav, Row } from "react-bootstrap";
function Footer() {
  return (
  <footer className="footer container-fluid d-flex justify-content-between align-items-center">
    <NavLink href="/">
            <img
              src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
              alt="Unicorn Logo"
              className="icon-beer"
            />
    </NavLink>
    <Row>
    <Col sm={10}>
      <Nav className="d-flex flex-column">
        <Nav.Link href="/about" className="mx-2 mt-1 text-white">
          ABOUT OUR PROJECT
        </Nav.Link>
        <Nav.Link href="#" className="mx-2 mt-1 text-white">
          OUR BEER
        </Nav.Link>
        <Nav.Link href="/shop" className="mx-2 mt-1 text-white">
          SHOP
        </Nav.Link>
        <NavDropdown
          title={<i className="bi bi-person-fill fs-5 text-white"></i>}
          id="basic-nav-dropdown"
          className="p-0 mx-2"
        >
          <NavDropdown.Item href="#">Sign in</NavDropdown.Item>
          <NavDropdown.Item href="#">Create account</NavDropdown.Item>
          <NavDropdown.Item href="#">My account</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Log out</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/contact" className="mx-2 mt-1 text-white">
          CONTACT
        </Nav.Link>
      </Nav>
    </Col>
    <Col>

    </Col>
    </Row>
  </footer>
  )
}

export default Footer;
