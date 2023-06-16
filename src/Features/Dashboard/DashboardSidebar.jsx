import "./styles.css";

import React from "react";

function DashboardSidebar() {
  return (
    <div className="col-3 d-flex flex-column justify-content-between align-items-center col-board px-0">
      <div className="d-flex flex-column align-items-center">
        <i class="bi bi-person-circle picture"></i>
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
