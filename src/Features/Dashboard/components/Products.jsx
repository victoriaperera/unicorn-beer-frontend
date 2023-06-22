import { useEffect } from "react";
import "../styles.css";
import axios from "axios";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../../hook/capitalizeFirstLetter";

function Products() {
  const [products, setProducts] = useState();

  useEffect( ()=>{
    const getProducts = async () => {
      try{
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_BACK_URL}/products`,
          // headers: {
          //   Authorization: `Bearer ${user.token}`,
          // },
        })
        setProducts(response.data)
      }catch(err){
        console.log("Error fetching data:", err)
      }
    };
    
    getProducts();
  },[])

  return products && (
    <div className="products-bg">
      <h2 className="text-white mb-3">Products</h2>
      <div>
        
        <table className="table table-hover align-middle text-center">
          <thead  className="table-header">
            <tr>
              <th className="table-heading" scope="col">Id</th>
              <th className="table-heading" scope="col">Name</th>
              <th className="table-heading" scope="col">Style</th>
              <th className="table-heading" scope="col">Price</th>
              <th className="table-heading" scope="col">Stock</th>
              <th className="table-heading" scope="col">Accions</th>
             </tr>
           </thead>
            <tbody>
             
              {products.map( (product, index) =>
               <tr key={product.id}>
                <td >...{product.id.slice(20)}</td>
                <td>{product.name}</td>
                <td>{product.style.name}</td>
                <td>{product.price}</td>
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
