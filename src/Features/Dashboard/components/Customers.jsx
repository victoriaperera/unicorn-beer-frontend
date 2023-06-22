import "../styles.css";
import CustomerCard from "./CustomerCard";
import React, { useEffect } from "react";

function Customers() {
  return (
    <div className="customers-bg">
      <CustomerCard />
    </div>
  );
}

export default Customers;
