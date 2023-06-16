import "./styles.css";
import { NavLink, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <NavLink href="/">
          <img
            src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
            alt="Unicorn Logo"
            className="icon-beer d-inline"
          />
        </NavLink>
        <div>
          <Nav className=" d-flex flex-column">
            <Nav.Link href="/about" className="mx-2 mt-1 footerLink text-white">
              ABOUT OUR PROJECT
            </Nav.Link>
            <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
              OUR BEER
            </Nav.Link>
            <Nav.Link href="/shop" className="mx-2 mt-1 footerLink text-white">
              SHOP
            </Nav.Link>

            <Nav.Link href="/contact" className="mx-2 mt-1 footerLink text-white">
              CONTACT
            </Nav.Link>
          </Nav>
        </div>
        <div>
          <h4 className="text-white">Our Social:</h4>
          <div className="d-flex justify-content-around">
            <i className="bi bi-facebook text-white"></i>
            <i className="bi bi-instagram text-white"></i>
            <i className="bi bi-twitter text-white"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
