import "./styles.css";
import { useSetColor } from "../../hook/useSetColor";
import { setFilter } from "../../Features/Shop/shopSlice";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BuyNowBtn({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const color = useSetColor(product);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = () => {
    dispatch(setFilter({ filter: product.style.name }));
    navigate("/shop");
  };

  return (
    <>
      <button
        className="rounded-pill addtocart-btn mt-2  "
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovering ? "white" : "transparent",
          color: isHovering ? color : "white",
        }}
        aria-label="Buy Now Button"
      >
        Buy Now
      </button>
    </>
  );
}

export default BuyNowBtn;
