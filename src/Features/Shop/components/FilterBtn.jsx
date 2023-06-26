import { useState } from "react";
import { useSetColor } from "../../../hook/useSetColor";
import { useDispatch } from "react-redux";
import { clearFilter, setFilter } from "../shopSlice";

function FilterBtn({ product, filterRef }) {
  const [isHovering, setIsHovering] = useState(false);
  let color = useSetColor(product);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handlerFilter = () => {
    filterRef.current.scrollIntoView({ behavior: "smooth" });
    dispatch(clearFilter());
    dispatch(setFilter({ filter: product.style.name }));
    setIsHovering(true);
  };

  const handlerOnMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
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
    </div>
  );
}

export default FilterBtn;
