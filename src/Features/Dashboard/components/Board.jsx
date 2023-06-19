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
      <div className="col-5 text-center background-graphite pt-4 text-white ">
        <div class="background border-2 shadow p-1 w-100 mt-3">
          <div class="card-body">
            <img src="/src/assets/img/grafica3.png" alt="grafica" className="grafica" />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="background border-2 shadow p-5 mt-3">
              <div class="card-body">
                <h5 className="card-title">Cantidad de ventas</h5>
                <span className="card-text">1.543</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="background border-2 shadow p-5 mt-3">
              <div class="card-body">
                <h5 className="card-title">Cantidad de Productos</h5>
                <span className="card-text">{productCount}</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="background border-2 shadow p-5 mt-3">
              <div class="card-body">
                <h5 className="card-title">Total de clientes</h5>
                <span className="card-text">654</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="background border-2 shadow p-5 mt-3">
              <div class="card-body">
                <h5 className="card-title">Ingresos de hoy</h5>
                <span className="card-text">$7.560</span>
              </div>
            </div>
          </div>
          <div class="card-body mt-3">
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
