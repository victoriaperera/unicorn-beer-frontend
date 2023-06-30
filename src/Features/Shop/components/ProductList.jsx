import "./styles.css";
import axios from "axios";
import { Row, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProductList } from "../shopSlice";
import Product from "./Product";
import Loader from "../../../Common/components/Loader";
import unicornIcon from "../../../assets/icons/Unicorn-beer-icon-3.svg";

function ProductList() {
  const filter = useSelector((state) => state.shop.filter);
  const [loading, setLoading] = useState(false);
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
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/products`);
      dispatch(setProductList({ products: res.data }));
      setLoading(false);
    };
    getProducts();
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <Row style={{ backgroundColor: "var(--graphite)" }}>
        {products.length > 0 ? (
          products.map((product) => <Product product={product} key={product.id}></Product>)
        ) : (
          <div
            className="col-10 col-md-6 container d-flex justify-content-center align-items-center gap-3"
            style={{ opacity: "80%" }}
          >
            <Image src={unicornIcon} alt="Unicorn Icon" style={{ height: "100px" }} />
            <h2 className="text-white">
              Oops! We couldn't find any products matching your search. Please try again.
            </h2>
          </div>
        )}
      </Row>
    </>
  );
}

export default ProductList;
