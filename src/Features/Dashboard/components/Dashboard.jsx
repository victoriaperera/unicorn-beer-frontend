import "../styles.css";
import { setData } from "../adminSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";

function Dashboard() {
  const data = useSelector((state) => state.admin.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        const data = response.data;
        dispatch(setData(response.data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-bg">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-body">Total Sales</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-body">Total Orders</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img src="./src/assets/img/mock-sales-chart.png" alt="Chart img" className="w-50" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4">
            <div className="card-header">Categories</div>
            <div className="card-body">
              {data && data.length > 0 ? (
                <ul className="categories-list">
                  {data.map((product) => (
                    <li key={product.id}>{product.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header">Order List</div>
            <div className="card-body">Date - user - xxx</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
