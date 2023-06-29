import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Header from "../../Common/components/Header";
import axios from "axios";

import "./styles.css";
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Categories from "./components/categories/Categories";
import Customers from "./components/customers/Customers";
import Admins from "./components/admin/Admins";
import { setOrders, setProducts, setStyles, setUsers, setAdmins } from "./adminSlice";

function Admin() {
  const pageTitle = "Admin Dashboard";
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [containers, setContainers] = useState([]);
  const dispatch = useDispatch();

  const handleSidebarClick = (component) => {
    setSelectedComponent(component);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersResponse, productsResponse, stylesResponse, usersResponse, adminsResponse] =
          await Promise.all([
            axios.get(`${import.meta.env.VITE_BACK_URL}/orders`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/products`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/styles`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/users`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/admin`),
          ]);

        dispatch(setOrders(ordersResponse.data));
        dispatch(setProducts(productsResponse.data));
        dispatch(setStyles(stylesResponse.data));
        dispatch(setUsers(usersResponse.data));
        dispatch(setAdmins(adminsResponse.data));
        setContainers(usersResponse.data.containers);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function renderComponent() {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard containers={containers} handleSidebarClick={handleSidebarClick} />;
      case "products":
        return <Products />;
      case "categories":
        return <Categories />;
      case "orders":
        return <Orders />;
      case "customers":
        return <Customers />;
      case "administrators":
        return <Admins />;
      default:
        return null;
    }
  }

  return (
    <>
      <Header title={pageTitle} />
      <AdminSidebar onSidebarClick={handleSidebarClick} />
      {renderComponent()}
    </>
  );
}

export default Admin;
