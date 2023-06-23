import "./styles.css";
import OrderCard from "./OrderCard";
import React from "react";

function Orders() {
  return (
    <div className="orders-bg scrollable">
      <h2 className="text-white mb-3">Orders</h2>
      <OrderCard />
    </div>
  );
}

export default Orders;
