import { useEffect } from "react";
import "../styles.css";
import axios from "axios";
import { useState } from "react";
import { capitalizeFirstLetter } from "../../../hook/capitalizeFirstLetter";

function Products() {
  const [products, setProducts] = useState();

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
        setProducts(response.data)
      }
      getProducts();
    }catch(err){
      console.log(err)
    }
  },[])
  return products && (
    <div className="products-bg">
      <h2 className="text-white mb-3">Products</h2>
      <div>
        
        <table>
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Style</th>
              <th scope="col">Price</th>
              <th scope="col">Featured</th>
              <th scope="col">Stock</th>
              <th scope="col">Accions</th>
             </tr>
           </thead>
            <tbody>
             
              {products.map( (product, index) =>
               <tr key={product.id}>
                <td >...{product.id.slice(20)}</td>
                <td>{product.name}</td>
                <td>{product.style.name}</td>
                <td>{product.price}</td>
                <td>{product.featured}</td>
                <td>{product.stock}</td>
                <td>❌ 📝 </td>
              </tr>
               
             )}
             
            </tbody>
         
            
          
         
        </table>
      </div>
    </div>
  );
  
}

export default Products;
