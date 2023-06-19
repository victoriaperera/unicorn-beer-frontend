import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";

function ProductFilter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3000/products`);

      const aux = res.data.filter((p) => p.container.name === "Bottle");
      setProducts(aux);
    };
    getProducts();
  }, []);

  return (
    <div className="d-flex mt-3 ">
      {products.map((product) => (
        <FilterBtn product={product} key={product.style.id}></FilterBtn>
      ))}
    </div>
  );
}

export default ProductFilter;
