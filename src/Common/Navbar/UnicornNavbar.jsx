import "./styles.css";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import Cart from "./Cart/Cart";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setTotalQuantity } from "./Cart/cartSlice";
import { clearFilter } from "../../Features/Shop/shopSlice";
import Logout from "../../Features/Auth/components/Logout";

function UnicornNavbar() {
  const [show, setShow] = useState(false);
  const [navbarBlur, setNavbarBlur] = useState("");
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.products);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const handleClose = () => setShow(!show);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        bg="dark"
        expand="lg"
        fixed="top"
        className={`custom-navbar ${navbarBlur}`}
      >
        <Container fluid className="collapsed-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-toggler-btn" />
          <Navbar.Brand>
            <Nav.Link as={Link} to={"/"} onClick={handleLinkClick}>
              <img
                src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
                alt="Unicorn Logo"
                className="icon-beer"
              />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ms-auto">
              <div className="mx-2 mt-1">
                <Nav.Link as={Link} to={"/about"} eventkey={"1"}>
                  ABOUT THIS PROJECT
                </Nav.Link>
              </div>
              <div className="mx-2 mt-1">
                <Nav.Link as={Link} to={"/#our-beer-section"} eventkey={"2"}>
                  OUR BEER
                </Nav.Link>
              </div>
              <div className="mx-2 mt-1">
                <Nav.Link
                  as={Link}
                  to={"/shop"}
                  className="nav-link"
                  onClick={() => dispatch(clearFilter())}
                  eventkey={"3"}
                >
                  SHOP
                </Nav.Link>
              </div>
              <NavDropdown
                title={<i className="bi bi-person-fill fs-5 text-white"></i>}
                className="mx-2"
                eventkey={"4"}
                menuVariant="secondary"
              >
                {!user && (
                  <NavDropdown.Item eventkey={"4.1"} as={Link} to="/login" id="dropdown-items">
                    Log in
                  </NavDropdown.Item>
                )}

                {!user && (
                  <NavDropdown.Item eventkey={"4.2"} as={Link} to="/signup">
                    Create an Account
                  </NavDropdown.Item>
                )}

                {!user && (
                  <NavDropdown.Item eventkey={"4.3"} as={Link} to="/admin/login">
                    Admins
                  </NavDropdown.Item>
                )}

                {user && (
                  <NavDropdown.Item eventkey={"4.4"} as={Link} to="#">
                    My account
                  </NavDropdown.Item>
                )}

                {user && (
                  <NavDropdown.Item eventkey={"4.5"} as={Link} to="#">
                    <Logout></Logout>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
              <div className="mx-2 mt-2">
                <i className="cartIcon bi bi-cart-fill fs-5 text-white" onClick={handleClose}>
                  <sup className="superscript">({totalQuantity})</sup>
                </i>
                <Offcanvas show={show} onHide={handleClose} placement="end">
                  <Cart show={show} handleClose={handleClose} />
                </Offcanvas>
              </div>
              <div className="mx-2 mt-1">
                <Nav.Link as={Link} to={"/contact"} className="nav-link" eventkey={"5"}>
                  CONTACT
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UnicornNavbar;
