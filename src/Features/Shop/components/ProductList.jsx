import "./styles.css";
import Product from "./Product";
import axios from "axios";
import { Row } from "react-bootstrap";
import { useEffect, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../shopSlice";

const ProductList = forwardRef(function ProductList(props, ref) {
  const filter = useSelector((state) => state.shop.filter);
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    const all = state.shop.products;
    if (filter === "all" || filter === "") {
      return all;
    } else {
      return all.filter(
        (product) =>
          product.style.name.toLowerCase().includes(filter.toLowerCase()) ||
          product.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  });

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);
      dispatch(setProductList({ products: res.data }));
    };
    getProducts();
  }, []);

  return (
    <>
      <Row ref={ref}>
        {products.length > 0 &&
          products.map((product) => <Product product={product} key={product.id}></Product>)}
      </Row>
    </>
  );
});

export default ProductList;
