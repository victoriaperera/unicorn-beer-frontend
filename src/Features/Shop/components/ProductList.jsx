import "./styles.css";
import Product from "./Product";
import { Row } from "react-bootstrap";

import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3000/products`);
      setProducts(res.data);
    };
    getProducts();
  }, []);
  return (
    <>
      <Row className="pt-3">
        {products.map((product, index) => (
          <Product product={product} key={index}></Product>
        ))}
      </Row>
    </>
  );
}

export default ProductList;
