import { useSelector } from "react-redux";
import "./styles.css";
import { NavLink, Nav } from "react-bootstrap";
import { useSetColor } from "../../hook/useSetColor";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Footer() {
  const lastProduct = useSelector((state) => state.product);
  const lastProductColor = useSetColor(lastProduct[lastProduct.length - 1]);
  const location = useLocation();

  return (
    <footer className="footer d-flex justify-content-between align-items-center product-divider fixed-bottom ">
      <div className="divider-top p-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            style={{ fill: location.pathname === "/" ? lastProductColor : "transparent" }}
          ></path>
        </svg>
      </div>
      <div className="d-flex flex-column gap-3">
        <NavLink href="/">
          <img
            src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
            alt="Unicorn Logo"
            className="icon-beer d-inline"
          />
        </NavLink>
        <small className="text-white fw-lighter">{`© ${new Date().getFullYear()} Unicorn Beer Craft Beer & Co.`}</small>
      </div>
      <Nav className="footerLinkContainer">
        <Nav.Link as={Link} to="/about" className="footerLink">
          ABOUT OUR PROJECT
        </Nav.Link>
        <Nav.Link as={Link} to="/#our-beer-section" className="footerLink">
          OUR BEER
        </Nav.Link>
        <Nav.Link as={Link} to="/shop" className="footerLink">
          SHOP
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" className="footerLink">
          CONTACT
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/login" className="footerLink">
          ADMIN
        </Nav.Link>
      </Nav>
      <div>
        <h5 className="text-white">Social:</h5>
        <div className="d-flex justify-content-between">
          <Nav.Link href="#" className="mx-2 footerLink text-white">
            <i className="bi bi-facebook fs-6 text-white"></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/unicorn_craftedbeer/"
            className="mx-2 footerLink text-white"
          >
            <i className="bi bi-instagram fs-6 text-white"></i>
          </Nav.Link>
          <Nav.Link href="#" className="mx-2 footerLink text-white">
            <i className="bi bi-twitter fs-6 text-white"></i>
          </Nav.Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
