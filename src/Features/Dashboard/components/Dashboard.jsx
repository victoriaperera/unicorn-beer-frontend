import "../styles.css";
import { setProductList, setUserList } from "../adminSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";

function Dashboard() {
  const productList = useSelector((state) => state.admin.productList);
  const usersList = useSelector((state) => state.admin.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get("http://localhost:3000/products");
        const userResponse = await axios.get("http://localhost:3000/users");
        console.log(userResponse);
        const productListData = productResponse.data;
        const usersListData = userResponse.data;
        dispatch(setProductList(productListData));
        dispatch(setUserList(usersListData));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const userCount = usersList ? usersList.length : 0;

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
              {productList && productList.length > 0 ? (
                <ul className="categories-list">
                  {productList.map((product) => (
                    <li key={product.id}>{product.style.name}</li>
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
