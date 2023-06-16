import "./styles.css";
import Sidebar from "./DashboardSidebar";
import React from "react";

function Dashboard() {
  return (
    <>
      <div className="container-fluid p-0">
        <Sidebar />
      </div>
    </>
  );
}

export default Dashboard;
