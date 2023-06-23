import "./styles.css";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
function OrderModal({ show }) {
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
      <Modal.Body className="mt-5 d-flex justify-content-center">
        <Link to="/" className="modalBtn modalBtn-Success">
          Go to Home
        </Link>
      </Modal.Body>
    </Modal>
  );
}

export default OrderModal;
