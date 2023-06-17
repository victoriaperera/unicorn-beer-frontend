import "./styles.css";
import { NavLink, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="d-flex justify-content-between align-items-center ">
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
          <Nav.Link href="/about" className="footerLink text-white">
            ABOUT OUR PROJECT
          </Nav.Link>
          <Nav.Link href="#" className="footerLink text-white">
            OUR BEER
          </Nav.Link>
          <Nav.Link href="/shop" className="footerLink text-white">
            SHOP
          </Nav.Link>
          <Nav.Link href="/contact" className="footerLink text-white">
            CONTACT
          </Nav.Link>
        </Nav>
        <div>
          <h5 className="text-white">Social:</h5>
          <div className="d-flex justify-content-around">
            <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
              <i className="bi bi-facebook fs-6 text-white"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.instagram.com/unicorn_craftedbeer/"
              className="mx-2 mt-1 footerLink text-white"
            >
              <i className="bi bi-instagram fs-6 text-white"></i>
            </Nav.Link>
            <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
              <i className="bi bi-twitter fs-6 text-white"></i>
            </Nav.Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
