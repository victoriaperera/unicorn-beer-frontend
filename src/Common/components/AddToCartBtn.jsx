import "./styles.css";
import { addToCart } from "../Navbar/Cart/cartSlice";
import { useSetColor } from "../../hook/useSetColor";
import { useDispatch } from "react-redux";
import { useState } from "react";

function AddToCartBtn({ product }) {
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
        type="button"
        className="rounded-pill addtocart-btn mt-2  "
        onClick={() => dispatch(addToCart(product))}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          backgroundColor: isHovering ? "white" : "transparent",
          color: isHovering ? color : "white",
        }}
        aria-label="Add To Cart Button"
      >
        Add To Cart
      </button>
    </>
  );
}

export default AddToCartBtn;
