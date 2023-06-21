import "../styles.css";
import AddToCartBtn from "../../../Common/components/AddToCartBtn";
import { incrementQuantity, decrementQuantity } from "../../../Common/Navbar/Cart/cartSlice";
import { useDispatch } from "react-redux";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const containerVolume =
    product.container === "keg"
      ? (product.container.volume * 1000 * 0.033814).toFixed(2)
      : (product.container.volume * 1000 * 0.000264172).toFixed(2);

  return (
    <div className="col-12 col-md-7 col-lg-6 align-self-center px-5 product-view-text">
      <div className="pb-2">
        <h2>{product.style.name}</h2>
        <p className="mb-0">{product.style.description}</p>
      </div>
      <div className="border-top pt-2">
        <div className="w-100 d-flex justify-content-between pb-2">
          <span>Container type</span>
          <span className="fw-bold text-capitalize">{product.container.name}</span>
        </div>
        <div className="w-100 d-flex justify-content-between pb-2">
          <span>Size</span>
          <span className="fw-bold">{containerVolume} Oz.</span>
        </div>
        <div className="w-100 d-flex justify-content-between pb-2">
          <span>Price</span>
          <span className="fw-bold">$ {product.price.toFixed(2)}</span>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-between border-top pt-2">
        <div className="d-flex align-items-center">
          <i
            className="bi bi-dash-circle"
            onClick={() => dispatch(decrementQuantity(product.id))}
          ></i>
          <span className="px-2 fw-bold">1</span>
          <i
            className="bi bi-plus-circle"
            onClick={() => dispatch(incrementQuantity(product.id))}
          ></i>
        </div>
        <div className="addToCartBtn-product d-flex justify-content-end">
          <AddToCartBtn product={product} />
        </div>
      </div>
      <div className="d-flex align-items-center border-top pt-2">
        <i className="bi bi-truck fs-6 text-white me-2"></i>
        <span className="m-0">Delivery available.</span>
      </div>
    </div>
  );
}

export default ProductCard;
