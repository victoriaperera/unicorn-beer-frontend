import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./Cart/Cart";

import { useState } from "react";

function UnicornNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect bg="white" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <img src="" alt="Unicorn Logo" />
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text>
              <Nav className="ms-auto fw-semibold">
                <Nav.Link href="/about" className="mx-2 mt-1">
                  ABOUT OUR PROJECT
                </Nav.Link>
                <Nav.Link href="#" className="mx-2 mt-1">
                  OUR BEER
                </Nav.Link>
                <Nav.Link href="#" className="mx-2 mt-1">
                  SHOP
                </Nav.Link>
                <NavDropdown
                  title={<i className="bi bi-person-fill fs-5"></i>}
                  id="basic-nav-dropdown"
                  className="p-0 mx-2"
                >
                  <NavDropdown.Item href="#">Sign in</NavDropdown.Item>
                  <NavDropdown.Item href="#">Create account</NavDropdown.Item>
                  <NavDropdown.Item href="#">My account</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Log out</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" className="mx-2">
                  <i
                    className="bi bi-cart-fill fs-5"
                    variant=""
                    onClick={handleShow}
                  ></i>

                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Cart />
                  </Offcanvas>
                </Nav.Link>
                <Nav.Link href="#" className="mx-2 mt-1">
                  CONTACT
                </Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UnicornNavbar;
