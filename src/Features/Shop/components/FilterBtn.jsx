import { useState } from "react";
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

  const handlerOnFocus = () => {
    setIsHovering(true);
  };

  const handlerFilter = () => {
    dispatch(clearFilter());
    dispatch(setFilter({ filter: product.style.name }));
    setIsHovering(true);
  };

  const handlerOnMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <a
      className="filter-btn h2 me-3"
      key={product.style.id}
      onMouseEnter={handleMouseEnter}
      style={{
        color: isHovering ? color : "var(--white)",
      }}
      onClick={handlerFilter}
      onMouseOut={handlerOnMouseOut}
    >
      {product.style.name}
    </a>
  );
}

export default FilterBtn;
