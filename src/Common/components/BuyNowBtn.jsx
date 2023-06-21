import "./styles.css";
import { useSetColor } from "../../hook/useSetColor";
import { useDispatch } from "react-redux";
import { useState } from "react";
import React from "react";

function BuyNowBtn({ product }) {
  const dispatch = useDispatch();
  const color = useSetColor(product);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <button
        className="rounded-pill addtocart-btn mt-2  "
        onClick={() => dispatch(addToCart(product))}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovering ? "white" : "transparent",
          color: isHovering ? color : "white",
        }}
      >
        Buy Now
      </button>
    </>
  );
}

export default BuyNowBtn;
