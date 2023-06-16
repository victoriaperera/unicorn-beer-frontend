import "./styles.css";
import Sidebar from "./DashboardSidebar";

import React from "react";

function Dashboard() {
  return (
    <>
      <div className="dashboard-relative">
        <div className="div-empty"></div>
        <div className="container-fluid p-0">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
