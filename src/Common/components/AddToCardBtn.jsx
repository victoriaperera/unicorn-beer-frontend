import { useDispatch } from "react-redux";
import "./styles.css";
import { addToCart } from "../Navbar/Cart/cartSlice";
import { useSetProductColor } from "../../hook/useSetProductColor";
import { useState } from "react";
import { Button } from "react-bootstrap";

function AddToCardBtn({ product }) {
  const dispatch = useDispatch();
  const color = useSetProductColor(product.style.name);
  const [isHovering, setIsHovering] = useState(false);

  console.log(product);

  const handleMouseEnter = () => {
    setIsHovering(true);
    console.log(isHovering);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    console.log(isHovering);
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

export default AddToCardBtn;
