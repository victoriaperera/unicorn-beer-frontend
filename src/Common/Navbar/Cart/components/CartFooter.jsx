import "./styles.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setTotalAmount } from "../cartSlice";

function CartFooter({ handleClose }) {
  const cart = useSelector((state) => state.cart.products);
  const user = useSelector((state) => state.user);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    if (Array.isArray(cart)) {
      cart.map((product) => {
        total += product.price * product.quantity;
      });
      dispatch(setTotalAmount({ totalAmount: total.toFixed(2) }));
    }
  }, [cart]);

  return (
    <div className="border-top cart-footer">
      <div className="d-flex justify-content-between px-2">
        <p className="fw-bold">Order total</p>
        <p className="fw-bold">${totalAmount}</p>
      </div>
      <div className="d-flex justify-content-between px-2">
        <p className="fw-bold">Shipping</p>
        <p className="fw-bold">Free</p>
      </div>
      <Link
        className="btn rounded-pill bg-black fw-medium text-white w-100"
        to={user ? "/checkout" : "/login"}
        onClick={handleClose}
        aria-label="Check Out Button"
      >
        Checkout
      </Link>
    </div>
  );
}

export default CartFooter;
