import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProductList, setUserList } from "../adminSlice";

function Board() {
  const productList = useSelector((state) => state.admin.productList);
  const usersList = useSelector((state) => state.admin.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productResponse = await axios.get("http://localhost:3000/products");
        const userResponse = await axios.get("http://localhost:3000/users");
        const orders = await axios.get("http://localhost:3000/orders");

        console.log(orders.data);
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

  const productCount = productList ? productList.length : 0;
  const userCount = usersList ? usersList.length : 0;

  return (
    <>
      <div className="col-5 text-center background-graphite pt-4 text-white ">
        <div className="background border-2 shadow p-1 w-100 mt-3">
          <div className="card-body">
            <img src="/src/assets/img/grafica3.png" alt="grafica" className="grafica" />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="background border-2 shadow p-5 mt-3">
              <div className="card-body">
                <h5 className="card-title">Cantidad de ventas</h5>
                <span className="card-text">1.543</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="background border-2 shadow p-5 mt-3">
              <div className="card-body">
                <h5 className="card-title">Cantidad de Productos</h5>
                <span className="card-text">{productCount}</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="background border-2 shadow p-5 mt-3">
              <div className="card-body">
                <h5 className="card-title">Total de Users</h5>
                <span className="card-text">{userCount}</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="background border-2 shadow p-5 mt-3">
              <div className="card-body">
                <h5 className="card-title">Ingresos de hoy</h5>
                <span className="card-text">$7.560</span>
              </div>
            </div>
          </div>
          <div className="card-body mt-3">
            <img src="/src/assets/img/grafica3.png" alt="grafica" className="grafica" />
          </div>
        </div>
      </div>
      <div className="col-4 background-graphite d-flex justify-content-center align-items-center p-0 pe-5 text-white">
        <div className="border-2 background shadow w-100 h-75 my-3 py-5 margin-top text-center">
          <h3>Productos</h3>
          <img
            src="/src/assets/img/Scottish_bottle.png"
            alt="Scottish_bottle"
            className="scottish mt-4"
          />
        </div>
      </div>
    </>
  );
}

export default Board;
