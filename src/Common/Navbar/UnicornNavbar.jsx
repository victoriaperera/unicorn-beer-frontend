import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Cart from "./Cart/Cart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "../../Features/Auth/components/Logout";
import { clearFilter } from "../../Features/Shop/shopSlice";
import { setTotalQuantity } from "./Cart/cartSlice";

function UnicornNavbar() {
  const [show, setShow] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState("");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let total = 0;
    if (Array.isArray(cart)) {
      cart.map((item) => {
        total += item.quantity;
      });
      dispatch(setTotalQuantity({ totalQuantity: total }));
    }
  }, [cart]);

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
      <Navbar collapseOnSelect expand="lg" fixed="top" className={`custom-navbar ${navbarBlur}`}>
        <Container fluid className="collapsed-nav">
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="nav-toggler-btn"
            onClick={() => setNavbarBlur("navbar-blur")}
          />
          <Navbar.Brand>
            <Nav.Link to={"/"}>
              <img
                src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
                alt="Unicorn Logo"
                className="icon-beer"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Navbar.Text>
              <Nav className="ms-auto">
                <div className="mx-2 mt-1">
                  <Nav.Link href="/about" className="nav-link">
                    ABOUT OUR PROJECT
                  </Nav.Link>
                </div>
                <div className="mx-2 mt-1">
                  <Nav.Link href="/#our-beer-section" className="nav-link">
                    OUR BEER
                  </Nav.Link>
                </div>
                <div className="mx-2 mt-1">
                  <Nav.Link
                    href="/shop"
                    className="nav-link"
                    onClick={() => dispatch(clearFilter())}
                  >
                    SHOP
                  </Nav.Link>
                </div>
                <NavDropdown
                  title={<i className="bi bi-person-fill fs-5 text-white"></i>}
                  id="basic-nav-dropdown"
                  className="mx-2"
                >
                  {!user && <NavDropdown.Item href="/login">Log in</NavDropdown.Item>}

                  {!user && <NavDropdown.Item href="/signup">Create an Account</NavDropdown.Item>}

                  {!user && <NavDropdown.Item href="/admin/login">Admins</NavDropdown.Item>}

                  {user && <NavDropdown.Item href="#">My account</NavDropdown.Item>}

                  {user && (
                    <NavDropdown.Item href="#">
                      <Logout></Logout>
                    </NavDropdown.Item>
                  )}
                </NavDropdown>
                <div className="mx-2 mt-2">
                  <i className="cartIcon bi bi-cart-fill fs-5 text-white" onClick={handleShow}>
                    <sup className="superscript">({totalQuantity})</sup>
                  </i>
                  <Offcanvas show={show} onHide={handleClose} placement="end">
                    <Cart show={show} handleClose={handleClose} />
                  </Offcanvas>
                </div>
                <div className="mx-2 mt-1">
                  <Nav.Link href="/contact" className="nav-link">
                    CONTACT
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UnicornNavbar;
