import "./styles.css";
import CustomerCard from "./CustomerCard";
import React, { useEffect } from "react";

function Customers() {
  return (
    <div className="customers-bg scrollable">
      <h2 className="text-white mb-3">Customers</h2>
      <CustomerCard />
    </div>
  );
}

export default Customers;
