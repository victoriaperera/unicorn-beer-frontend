import React, { useRef, useState } from "react";
import { useSetBtnColor } from "../../../hook/useSetBtnColor";

function FilterBtn({ style }) {
  const [isHovering, setIsHovering] = useState(false);
  let color = useSetBtnColor(style.name);

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
    setIsHovering(true);
    console.log(isHovering, color);
  };

  return (
    <a
      className="filter-btn h2 me-3"
      key={style.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handlerOnFocus}
      style={{
        color: isHovering ? color : "var(--lightGraphite)",
      }}
      onClick={handlerFilter}
    >
      {style.name}
    </a>
  );
}

export default FilterBtn;
