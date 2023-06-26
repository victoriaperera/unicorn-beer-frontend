import "./styles.css";
import AdminSidebar from "./components/AdminSidebar";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Orders from "./components/Orders";
import Customers from "./components/Customers";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setOrders, setProducts, setStyles, setUsers, updateOrderStatus } from "./adminSlice";

function Admin() {
  const [selectedComponent, setSelectedComponent] = useState("dashboard");
  const [containers, setContainers] = useState([]);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.admin.orders);

  const handleSidebarClick = (component) => {
    setSelectedComponent(component);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersResponse, productsResponse, stylesResponse, usersResponse] = await Promise.all(
          [
            axios.get(`${import.meta.env.VITE_BACK_URL}/orders`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/products`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/styles`),
            axios.get(`${import.meta.env.VITE_BACK_URL}/users`),
          ],
        );

        dispatch(setOrders(ordersResponse.data));
        dispatch(setProducts(productsResponse.data));
        dispatch(setStyles(stylesResponse.data));
        dispatch(setUsers(usersResponse.data));
        setContainers(usersResponse.data.containers);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const updateOrderStatusAction = async (orderId, newStatus) => {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_BACK_URL}/orders/${orderId}`, {
        status: newStatus,
      });
      dispatch(updateOrderStatus(response.data));
    } catch (error) {
      console.log("Error updating order status:", error);
    }
  };

  function renderComponent() {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard containers={containers} handleSidebarClick={handleSidebarClick} />;
      case "products":
        return <Products />;
      case "categories":
        return <Categories />;
      case "orders":
        return <Orders orders={orders} updateOrderStatus={updateOrderStatusAction} />;
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
