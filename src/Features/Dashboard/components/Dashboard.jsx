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
    <div class="col-lg-10">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="card bg-secondary text-white mb-4">
            <div class="card-body">Total Sales</div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="card bg-secondary text-white mb-4">
            <div class="card-body">Total Orders</div>
          </div>
        </div>
        <div class="col-xl-6 col-md-12">
          <div class="card bg-secondary text-white mb-4">
            <div class="card-body">Activity or some chart</div>
          </div>
        </div>
      </div>
      <div class="card mb-4">
        <div class="card-header">Order List</div>
        <div class="card-body">Date - user - xxx</div>
      </div>
      <div class="row">
        <div class="col-xl-6">
          <div class="card mb-4">
            <div class="card-header">Product List</div>
            <div class="card-body">Pilsener bottle ...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
