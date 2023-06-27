import "./styles.css";
import axios from "axios";
import { forwardRef, useEffect, useRef, useState } from "react";
import FilterBtn from "./FilterBtn";
import FilterAllBtn from "./FilterAllBtn";

const ProductFilter = forwardRef(function ProductFilter(props, ref) {
  const [styles, setStyles] = useState([]);
  const filterRef = useRef(null);

  useEffect(() => {
    const getStyles = async () => {
      const res = await axios.get(`${import.meta.env.VITE_BACK_URL}/styles`);
      console.log(res.data);
      setStyles(res.data);
    };
    getStyles();
  }, []);

  return (
    <div className="d-flex flex-wrap mt-3 search-filter" ref={filterRef}>
      {styles.map((style) => (
        <FilterBtn style={style} key={style._id} filterRef={filterRef}></FilterBtn>
      ))}
      <FilterAllBtn filterRef={filterRef} />
    </div>
  );
});

export default ProductFilter;
