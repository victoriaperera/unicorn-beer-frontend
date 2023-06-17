import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";

function ProductFilter() {
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    const getProductStyles = async () => {
      try {
        const res = await axios({ method: "GET", url: "http://localhost:3000/styles" });
        setProductStyles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductStyles();
  }, []);

  return (
    <div className="d-flex mt-3 ">
      {productStyles.map((style) => (
        <FilterBtn style={style} key={style.id}></FilterBtn>
      ))}
    </div>
  );
}

export default ProductFilter;
