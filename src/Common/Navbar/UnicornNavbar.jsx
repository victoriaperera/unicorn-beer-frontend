import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function UnicornNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img src="" alt="Unicorn Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav className="me-auto">
                <Nav.Link href="#">ABOUT OUR PROJECT</Nav.Link>
                <Nav.Link href="#">OUR BEER</Nav.Link>
                <Nav.Link href="#">SHOP</Nav.Link>
                <Nav.Link href="#" className="py-1 px-2">
                  <i className="bi bi-person-fill fs-5"></i>
                </Nav.Link>
                <Nav.Link href="#" className="py-1 px-2">
                  <i className="bi bi-cart-fill fs-5"></i>
                </Nav.Link>
                <Nav.Link href="#">CONTACT</Nav.Link>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UnicornNavbar;
