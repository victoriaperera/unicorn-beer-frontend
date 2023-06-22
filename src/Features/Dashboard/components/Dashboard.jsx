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
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body">Activity or some chart</div>
          </div>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">Order List</div>
        <div className="card-body">Date - user - xxx</div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header">Product List</div>
            <div className="card-body">Pilsener bottle ...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
