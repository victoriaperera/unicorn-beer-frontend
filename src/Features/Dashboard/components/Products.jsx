import { useEffect } from "react";
import "../styles.css";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css"

function Products() {
  
  const products = useSelector( (state) => state.admin.productList)


  return products && (
    <div className="products-bg">
      <h2 className="text-white mb-3">Products</h2>
      <div>
        <table className="table table-hover align-middle text-center">
          <thead  className="table-header">
            <tr>
              <th className="products-table-heading" scope="col">Id</th>
              <th className="products-table-heading" scope="col">Name</th>
              <th className="products-table-heading" scope="col">Style</th>
              <th className="products-table-heading" scope="col">Price</th>
              <th className="products-table-heading" scope="col">Stock</th>
              <th className="products-table-heading" scope="col">Accions</th>
             </tr>
           </thead>
            <tbody>
              {products.map( (product) =>
               <tr key={product.id}>
                <td >...{product.id.slice(20)}</td>
                <td>{product.name}</td>
                <td>{product.style.name}</td>
                <td>USD {product.price}</td>
                <td>{product.stock}</td>
                <td> 📝  ❌</td>
              </tr>  
             )}
            </tbody>
        </table>
      </div>
    </div>
  );
  
}

export default Products;
