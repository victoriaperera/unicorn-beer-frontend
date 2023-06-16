import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./Cart/Cart";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../../Features/Auth/components/Logout";

function UnicornNavbar() {
  const [show, setShow] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState("");
  const user = useSelector((state) => state.user);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBlur("navbar-blur");
      } else {
        setNavbarBlur("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className={`custom-navbar ${navbarBlur}`}>
        <Container fluid className="collapsed-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggler-btn" />
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
                alt="Unicorn Logo"
                className="icon-beer"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Navbar.Text>
              <Nav className="ms-auto">
                <Nav.Link className="mx-2 mt-1">
                  <Link to={"/about"} className="nav-link">
                    ABOUT OUR PROJECT
                  </Link>
                </Nav.Link>
                <Nav.Link className="mx-2 mt-1">
                  <Link to={""} className="nav-link">
                    OUR BEER
                  </Link>
                </Nav.Link>
                <Nav.Link className="mx-2 mt-1">
                  <Link to={"/shop"} className="nav-link">
                    SHOP
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title={<i className="bi bi-person-fill fs-5 text-white"></i>}
                  id="basic-nav-dropdown"
                  className="pt-2 mx-2"
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
                <Nav.Link className="mx-2 mt-1">
                  <Link to={"/contact"} className="nav-link">
                    CONTACT
                  </Link>
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
