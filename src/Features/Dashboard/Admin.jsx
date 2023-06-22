import "./styles.css";
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setOrders, setProducts, setStyles, setUsers } from "./adminSlice";

function Admin() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const dispatch = useDispatch();

  function handleSidebarClick(component) {
    setSelectedComponent(component);
  }

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        dispatch(setOrders(response.data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getOrders();
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        dispatch(setProducts(response.data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getProducts();
    const getStyles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/styles");
        dispatch(setStyles(response.data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getStyles();
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        dispatch(setUsers(response.data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    getUsers();
  }, []);

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
