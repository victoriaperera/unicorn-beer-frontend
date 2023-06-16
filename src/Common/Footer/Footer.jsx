import "./styles.css";
import { NavDropdown, NavLink, Nav } from "react-bootstrap";
function Footer() {
  return (
  <footer className="footer container-fluid">
    <div className="d-flex justify-content-between align-items-center mb-5">
      <NavLink href="/">
              <img
                src="/src/assets/icons/Unicorn-beer-white-logo-iso.svg"
                alt="Unicorn Logo"
                className="icon-beer d-inline"
              />
      </NavLink>
      <div>
        <Nav className="d-none d-sm-block d-flex flex-column">
          <Nav.Link href="/about" className="mx-2 mt-1 footerLink text-white">
            ABOUT OUR PROJECT
          </Nav.Link>
          <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
            OUR BEER
          </Nav.Link>
          <Nav.Link href="/shop" className="mx-2 mt-1 footerLink text-white">
            SHOP
          </Nav.Link>
          <NavDropdown
            title={<i className="bi bi-person-fill fs-5 text-white"></i>}
            id="basic-nav-dropdown"
            className="p-0 mx-2"
          >
            <NavDropdown.Item href="#">Sign in</NavDropdown.Item>
            <NavDropdown.Item href="#">Create account</NavDropdown.Item>
            <NavDropdown.Item href="#">My account</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Log out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contact" className="mx-2 mt-1 footerLink text-white">
            CONTACT
          </Nav.Link>
        </Nav>
      </div>
      <div>
        <h4 className="text-white">Our Social:</h4>
        <div className="d-flex justify-content-around">
          <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
            <i className="bi bi-facebook text-white"></i>
          </Nav.Link>
          <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
            <i className="bi bi-instagram text-white"></i>
          </Nav.Link>
          <Nav.Link href="#" className="mx-2 mt-1 footerLink text-white">
            <i className="bi bi-twitter text-white"></i>
          </Nav.Link>
        </div>   
      </div>
    </div>
    <small className="text-white text-end fw-lighter">{`© ${new Date().getFullYear()} Unicorn Beer Craft Beer & Co.`}</small>
  </footer>
  )
}
 
export default Footer;
