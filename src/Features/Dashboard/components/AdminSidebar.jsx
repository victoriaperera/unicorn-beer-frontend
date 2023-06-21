import "../styles.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function AdminSidebar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");

  const handleNavigation = (path) => {
    navigate(path);
    setActiveButton(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/src/assets/icons/Unicorn-beer-icon-3.svg" alt="Logo" className="sidebar-logo" />
        <h2 className="m-0 h3">Unicorn Beer</h2>
      </div>
      <ul className="nav flex-column">
        <li className="text-center mb-4">
          <img
            src="https://i.pinimg.com/564x/9c/35/40/9c35407ec812c293ba7bd3a7bd1967d1.jpg"
            alt="Admin photo"
            className="img-fluid rounded-circle p-0 w-50"
          />
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeButton === "/admin" ? "active" : ""}`}
            onClick={() => handleNavigation("/admin")}
          >
            <i class="bi bi-clipboard-data me-3"></i>Dashboard
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavigation("/admin/orders")}>
            <i className="bi bi-cart-fill me-3"></i>Orders
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavigation("/admin/products")}>
            <i className="bi bi-box-seam me-3"></i>Products
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavigation("/admin/customers")}>
            <i className="bi bi-people-fill me-3"></i>Customers
          </button>
        </li>
      </ul>
      <ul className="nav flex-column mt-auto">
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleNavigation("/admin/logout")}>
            <i className="bi bi-box-arrow-right me-3"></i>Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
