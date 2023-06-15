import "./styles.css";
import React from "react";
import { NavLink, Row } from "react-bootstrap";
function Footer() {
  return (
  <footer className="footer container-fluid">
    <NavLink href="/">
            <img
              src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
              alt="Unicorn Logo"
              className="icon-beer"
            />
    </NavLink>
    <Row>
    <Col>

    </Col>
    <Col>
    
    </Col>
    </Row>
  </footer>
  )
}

export default Footer;
