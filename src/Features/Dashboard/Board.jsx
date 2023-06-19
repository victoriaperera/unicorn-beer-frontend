import "./styles.css";
import React from "react";

function Board() {
  return (
    <>
      <div className="col-9 text-center">
        <div class="card w-50 mb-3 mt-3">
          <div class="card-body">
            <h5 class="card-title">Cantidad de ventas</h5>
            <p class="card-text">1.543</p>
          </div>
        </div>
        <div class="card w-50 mb-3 mt-3">
          <div class="card-body">
            <h5 class="card-title">Cantidad de usuarios</h5>
            <p class="card-text">638</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
