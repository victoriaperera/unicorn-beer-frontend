import "./styles.css";
import Product from "./Product";
import axios from "axios";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../shopSlice";

function ProductList() {
  // const filter = useSelector((state) => state.shop.filter);
  const products = useSelector((state) => state.shop);
  // const products = useSelector((state) => {
  //   if (filter === null) {
  //     return state.shop.products;
  //   } else {
  //     return state.shop.products.filter((product) => product.style.name === filter);
  //   }
  // });
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`http://localhost:3000/products`);
      dispatch(setProductList(res.data));
    };
    getProducts();
  }, []);

  return (
    <>
      <Row>
        {products.length > 0 &&
          products.map((product) => <Product product={product} key={product.id}></Product>)}
      </Row>
    </>
  );
}

export default ProductList;
