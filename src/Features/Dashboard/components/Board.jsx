import "../styles.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import adminReducer, { setProductList } from "../adminSlice";

function Board() {
  const productList = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductList = async () => {
      try {
        const res = await axios.get("http://localhost:3000/products");
        const productList = res.data;
        dispatch(setProductList(productList));
      } catch (error) {
        console.log("Error fetching product list:", error);
      }
    };
    getProductList();
  }, [dispatch]);

  const productCount = productList.length;

  return (
    <>
      <div className="col-5 text-center pt-4 background">
        <div className="rounded-start-4 bg-secondary w-100 my-3 py-5">
          <h5 className="card-title">Cantidad de ventas Totales</h5>
          <p className="card-text">1.543</p>
        </div>
        <div className="rounded-start-4 bg-secondary w-100 my-3 py-5">
          <h5 className="card-title">Promedio de ventas por semana</h5>
          <p className="card-text">124</p>
        </div>
        <div className="rounded-start-4 bg-secondary w-100 my-3 py-5">
          <h5 className="card-title">Cantidad de usuarios</h5>
          <p className="card-text">638</p>
        </div>
        <div className="rounded-start-4 bg-secondary w-100 my-3 py-5">
          <h5 className="card-title">Promedio de usuarios registrados por semana</h5>
          <p className="card-text">40</p>
        </div>
        <div className="rounded-start-4 bg-secondary w-100 my-3 py-5">
          <h5 className="card-title">Cantidad de Productos en stock</h5>
          <p className="card-text">{productCount}</p>
        </div>
      </div>
      <div className="col-4 background d-flex justify-content-center align-items-center p-0 pe-5">
        <div className="rounded-end-4 bg-secondary w-100 h-75 my-3 py-5 margin-top"></div>
      </div>
    </>
  );
}

export default Board;
