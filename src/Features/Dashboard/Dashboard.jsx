import "./styles.css";
import Sidebar from "./DashboardSidebar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleNavs } from "./adminSlice";
import { useLocation } from "react-router-dom";

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
