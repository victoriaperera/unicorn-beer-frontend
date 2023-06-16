import "./styles.css";
import Sidebar from "./DashboardSidebar";
import React from "react";

function Dashboard() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          {/* <div className="col-9 d-flex justify-content-center align-items-center fondo p-0">
            <img
              src="/src/assets/icons/Unicorn-beer-white-logo.svg"
              alt="Unicorn Logo"
              className="logo"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
