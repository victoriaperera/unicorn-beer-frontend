import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";
import FilterAllBtn from "./FilterAllBtn";

function ProductFilter() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);

      const aux = res.data.filter((p) => p.container.name === "bottle");
      setProducts(aux);
    };
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap mt-3 ">
      {products.map((product) => (
        <FilterBtn product={product} key={product.style.id}></FilterBtn>
      ))}
      <FilterAllBtn />
    </div>
  );
}

export default ProductFilter;
