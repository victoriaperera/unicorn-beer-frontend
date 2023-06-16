import { useDispatch } from "react-redux";
import "./styles.css";
import { Button } from "react-bootstrap";
import { addToCart } from "../Navbar/Cart/cartSlice";

function AddToCardBtn({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        size="lg"
        className="rounded-pill addtocart-btn mt-2"
        onClick={() => dispatch(addToCart(product))}
      >
        Buy Now
      </Button>
    </>
  );
}

export default AddToCardBtn;
