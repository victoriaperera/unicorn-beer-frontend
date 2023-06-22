import { useEffect } from "react";
import "../styles.css";
import axios from "axios";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect( ()=>{
    try{
      async function getProducts() {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_BACK_URL}/products`
          // headers: {
          //   Authorization: `Bearer ${user.token}`,
          // },
        })
        setProducts(...response.data)
      }
      getProducts();
    }catch(err){
      console.log(err)
    }
  },[])

  return (
    <div className="products-bg">
      <h2 className="text-white mb-3">Products</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
