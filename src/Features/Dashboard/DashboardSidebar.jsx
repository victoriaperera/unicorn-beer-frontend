import "./styles.css";

import React from "react";

function DashboardSidebar() {
  return (
    <div className="col-3 d-flex flex-column justify-content-between align-items-center  col-board">
      <div>
        <i class="bi bi-person-circle picture"></i>
        <h1>Hello, Admin</h1>
        <ul className="ul-board">
          <li className="">
            <i class="bi bi-house-fill"></i> Dashboard
          </li>
          <li className="">
            <i class="bi bi-columns-gap"></i> Products
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
