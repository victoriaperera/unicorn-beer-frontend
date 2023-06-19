import "./styles.css";
import Sidebar from "./components/DashboardSidebar";
import Board from "./components/Board";
import React from "react";

function Dashboard() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row">
          <Sidebar />
          <Board />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
