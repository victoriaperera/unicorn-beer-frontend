import "./styles.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../Common/Navbar/Cart/cartSlice";
import DetailPdf from "./DetailPdf";

function OrderModal({ show }) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.order);

  const dispatch = useDispatch();

  return (
    <Modal show={show} size="md" backdrop="static" className="unicornModal">
      <Modal.Header className="border-0 d-flex flex-column justify-content-center">
        <img
          src="src/assets/icons/Unicorn-beer-icon-black.svg"
          alt="Unicorn Logo"
          className="w-50"
        />
        <Modal.Title>
          <h3 className="mt-5 text-center">Payment Accepted!</h3>
          <p className="mt-5 text-center">Your order is being processed.</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mt-5 d-flex justify-content-center gap-3">
        <Link
          to="/shop"
          onClick={() => dispatch(clearCart())}
          className="modalBtn modalBtn-Success"
        >
          Go to Shop
        </Link>
        <PDFDownloadLink
          document={<DetailPdf user={user} order={order} cart={cart} />}
          fileName="PDF-Detail"
          className="modalBtn modalBtn-Success "
        >
          Download Detail
        </PDFDownloadLink>
      </Modal.Body>
    </Modal>
  );
}

export default OrderModal;
