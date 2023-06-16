import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./Cart/Cart";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Logout from "../../Features/Auth/components/Logout";

function UnicornNavbar() {
  const [show, setShow] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState(false);
  const user = useSelector((state) => state.user);
  const display = useSelector((state) => state.admin);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {display ? (
        <Navbar
          collapseOnSelect
          expand="lg"
          sticky="top"
          className={navbarBlur ? "navbar-blur" : "custom-navbar"}
        >
          <Container fluid className="collapsed-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggler-btn" />
            <Navbar.Brand href="/">
              <img
                src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
                alt="Unicorn Logo"
                className="icon-beer"
              />
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
              <Navbar.Text>
                <Nav className="ms-auto">
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
                    {!user && <NavDropdown.Item href="/login">Log in</NavDropdown.Item>}

                    {!user && <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>}

                    {user && <NavDropdown.Item href="#">My account</NavDropdown.Item>}

                    {user && <Logout></Logout>}
                  </NavDropdown>
                  <Nav.Link href="#" className="mx-2">
                    <i className="bi bi-cart-fill fs-5 text-white" onClick={handleShow}></i>

                    <Offcanvas show={show} onHide={handleClose} placement="end">
                      <Cart />
                    </Offcanvas>
                  </Nav.Link>
                  <Nav.Link href="/contact" className="mx-2 mt-1 text-white">
                    CONTACT
                  </Nav.Link>
                </Nav>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : null}
    </>
  );
}

export default UnicornNavbar;
