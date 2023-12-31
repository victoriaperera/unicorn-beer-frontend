import "./styles.css";
import { addToCart } from "../Navbar/Cart/cartSlice";
import { useSetColor } from "../../hook/useSetColor";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setToggleToastAdd } from "../../Features/Shop/shopSlice";

function AddToCartBtn({ product, counter }) {
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
        className="rounded-pill addtocart-btn my-2  "
        onClick={() => {
          dispatch(addToCart({ product, counter }));
          dispatch(setToggleToastAdd(product.name));
        }}
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
