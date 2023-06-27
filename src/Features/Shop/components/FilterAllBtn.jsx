import { useDispatch } from "react-redux";
import { clearFilter, setFilter } from "../shopSlice";
import { useState } from "react";

function FilterAllBtn({ filterRef }) {
  const [isHovering, setIsHovering] = useState(false);
  const color = "var(--lightGraphite)";

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
    filterRef.current.scrollIntoView({ behavior: "smooth" });
    dispatch(clearFilter());
    dispatch(setFilter({ filter: "all" }));
    setIsHovering(true);
  };

  return (
    <div>
      <a
        className="d-flex filter-btn h2 me-3"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handlerOnFocus}
        style={{
          color: isHovering ? color : "var(--white)",
        }}
        onClick={handlerFilter}
      >
        all
      </a>
    </div>
  );
}

export default FilterAllBtn;
