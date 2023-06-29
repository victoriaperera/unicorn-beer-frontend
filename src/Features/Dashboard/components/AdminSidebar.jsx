import "../styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../../Auth/components/Logout";
import unicornLogo from "../../../assets/icons/Unicorn-beer-white-logo-iso.svg";
import userPic from "../../../assets/img/mock-user-pic.png";

function AdminSidebar({ onSidebarClick }) {
  const [activeButton, setActiveButton] = useState("dashboard");
  const navigate = useNavigate();

  const handleNavigation = (component) => {
    onSidebarClick(component);
    setActiveButton(component);
  };

  return (
    <div className="sidebar scrollable">
      <div className="sidebar-header">
        <img src={unicornLogo} alt="Logo" className="sidebar-logo" onClick={() => navigate("/")} />
      </div>
      <ul className="nav flex-column">
        <li className="text-center mb-4">
          <img src={userPic} alt="Admin photo" className="img-fluid rounded-circle p-0 w-50" />
        </li>
        <li className="nav-item">
          <button
            className={`nav-link active ${activeButton === "dashboard" ? "active-dashboard" : ""}`}
            onClick={() => handleNavigation("dashboard")}
          >
            <i className="bi bi-columns-gap me-3"></i>Dashboard
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link active ${activeButton === "products" ? "active-products" : ""}`}
            onClick={() => handleNavigation("products")}
          >
            <i className="bi bi-tags-fill me-3"></i>Products
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link active ${
              activeButton === "categories" ? "active-categories" : ""
            }`}
            onClick={() => handleNavigation("categories")}
          >
            <i className="bi bi-boxes me-3"></i>Categories
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link active ${activeButton === "orders" ? "active-orders" : ""}`}
            onClick={() => handleNavigation("orders")}
          >
            <i className="bi bi-cart-fill me-3"></i>Orders
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link active ${
              activeButton === "administrators" ? "active-administrators" : ""
            }`}
            onClick={() => handleNavigation("administrators")}
          >
            <i className="bi bi-award me-3"></i>Admins
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link active ${activeButton === "customers" ? "active-customers" : ""}`}
            onClick={() => handleNavigation("customers")}
          >
            <i className="bi bi-people-fill me-3"></i>Customers
          </button>
        </li>
      </ul>
      <hr />
      <ul className="nav flex-column mt-auto">
        <li className="nav-item">
          <button className="nav-link d-flex">
            <i className="bi bi-box-arrow-right me-3"></i>
            <Logout></Logout>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
