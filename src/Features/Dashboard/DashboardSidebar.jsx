import "./styles.css";

import React from "react";

function DashboardSidebar() {
  return (
    <div className="col-3 d-flex flex-column justify-content-between align-items-center col-board px-0">
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://i.pinimg.com/564x/9c/35/40/9c35407ec812c293ba7bd3a7bd1967d1.jpg"
          alt="gatito fachero"
          className="gatito"
        />
        <h3>Hello, Admin</h3>
        <ul className="ul-board">
          <li>
            <i class="bi bi-house-fill"></i> Dashboard
          </li>
          <li>
            <i class="bi bi-columns-gap"></i> Products
          </li>
          <li>
            <i class="bi bi-grid-3x3-gap-fill"></i> Sizes
          </li>
          <li>
            <i class="bi bi-list-columns"></i> Orders
          </li>
          <li>
            <i class="bi bi-people"></i> Customers
          </li>
        </ul>
      </div>
      <span className="logout">
        <i class="bi bi-box-arrow-left"></i>Logout
      </span>
    </div>
  );
}

export default DashboardSidebar;
