import React, { useRef, useState } from "react";
import { useSetColor } from "../../../hook/useSetColor";
import { useDispatch } from "react-redux";
import { clearFilter, setFilter } from "../shopSlice";

function FilterBtn({ product }) {
  const [isHovering, setIsHovering] = useState(false);
  let color = useSetColor(product);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handlerOnFocus = () => {
    setIsHovering(true);
  };

  const handlerFilter = () => {
    dispatch(clearFilter());
    dispatch(setFilter(product.style.name));
    setIsHovering(true);
    console.log(isHovering, color);
  };

  return (
    <a
      className="filter-btn h2 me-3"
      key={product.style.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handlerOnFocus}
      style={{
        color: isHovering ? color : "var(--lightGraphite)",
      }}
      onClick={handlerFilter}
    >
      {product.style.name}
    </a>
  );
}

export default FilterBtn;
