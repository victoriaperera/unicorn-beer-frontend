import "./styles.css";
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./components/Dashboard";
import React from "react";

function Admin() {
  return (
    <>
      <AdminSidebar />
      <div className="board-content">
        <Dashboard />
      </div>
    </>
  );
}

export default Admin;
