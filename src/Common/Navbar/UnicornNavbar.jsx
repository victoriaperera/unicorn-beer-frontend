import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function UnicornNavbar() {
  const renderCartTip = (props) => (
    <Tooltip id="button-tooltip" className="mt-2" {...props}>
      Cart
    </Tooltip>
  );

  return (
    <>
      <Navbar collapseOnSelect bg="white" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="#home">
            <img src="" alt="Unicorn Logo" />
          </Navbar.Brand>
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Text>
<<<<<<< Updated upstream
              <Nav className="me-auto">
                <Nav.Link href="#">ABOUT OUR PROJECT</Nav.Link>
                <Nav.Link href="#">OUR BEER</Nav.Link>
                <Nav.Link href="#">SHOP</Nav.Link>
                <Nav.Link href="#" className="py-1 px-2">
                  <i className="bi bi-person-fill fs-5"></i>
                </Nav.Link>
                <Nav.Link href="#" className="py-1 px-2">
                  <i className="bi bi-cart-fill fs-5"></i>
=======
              <Nav className="ms-auto">
                <Nav.Link href="#" className="mx-2 mt-1">
                  ABOUT OUR PROJECT
                </Nav.Link>
                <Nav.Link href="#" className="mx-2 mt-1">
                  OUR BEER
                </Nav.Link>
                <Nav.Link href="#" className="mx-2 mt-1">
                  SHOP
                </Nav.Link>
                <NavDropdown
                  title={<i class="bi bi-person-fill fs-5"></i>}
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
                  <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderCartTip}
                  >
                    <i class="bi bi-cart-fill fs-5"></i>
                  </OverlayTrigger>
                </Nav.Link>
                <Nav.Link href="#" className="mx-2 mt-1">
                  CONTACT
>>>>>>> Stashed changes
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
