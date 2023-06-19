import "../styles.css";

import React from "react";

function DashboardSidebar() {
  return (
    <div className="col-3 d-flex flex-column justify-content-center align-items-center col-board px-0">
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://i.pinimg.com/564x/9c/35/40/9c35407ec812c293ba7bd3a7bd1967d1.jpg"
          alt="gatito fachero"
          className="gatito"
        />
        <h3>Hello, Admin</h3>
        <ul className="ul-board">
          <li>
            <i className="bi bi-house-fill"></i> Dashboard
          </li>
          <li>
            <i className="bi bi-columns-gap"></i> Products
          </li>
          <li>
            <i className="bi bi-grid-3x3-gap-fill"></i> Sizes
          </li>
          <li>
            <i className="bi bi-list-columns"></i> Orders
          </li>
          <li>
            <i className="bi bi-people"></i> Customers
          </li>
        </ul>
      </div>
      <span className="logout">
        <i className="bi bi-box-arrow-left"></i>Logout
      </span>
    </div>
  );
}

export default DashboardSidebar;
