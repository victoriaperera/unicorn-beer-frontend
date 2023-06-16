import "./styles.css";
import Sidebar from "./DashboardSidebar";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleNavs } from "./adminSlice";

function Dashboard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleNavs());
  });

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
