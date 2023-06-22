import "./styles.css";
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import React, { useState } from "react";

function Admin() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");

  function handleSidebarClick(component) {
    setSelectedComponent(component);
  }

  function renderComponent() {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <Products />;
      case "categories":
        return <Categories />;
      case "orders":
        return <Orders />;
      case "customers":
        return <Customers />;
      default:
        return null;
    }
  }

  return (
    <>
      <AdminSidebar onSidebarClick={handleSidebarClick} />
      {renderComponent()}
    </>
  );
}

export default Admin;
