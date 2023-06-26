import "./styles.css";
import axios from "axios";
import { forwardRef, useEffect, useRef, useState } from "react";
import FilterBtn from "./FilterBtn";
import FilterAllBtn from "./FilterAllBtn";

const ProductFilter = forwardRef(function ProductFilter(props, ref) {
  const [products, setProducts] = useState([]);
  const filterRef = useRef(null)

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);

      const aux = res.data.filter((p) => p.container.name === "bottle");
      setProducts(aux);
    };
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap mt-3 search-filter" ref={filterRef}>
      {products.map((product) => (
        <FilterBtn product={product} key={product.style.id} filterRef={filterRef}></FilterBtn>
      ))}
      <FilterAllBtn filterRef={filterRef} />
    </div>
  );
});

export default ProductFilter;
