import { Badge, Button, Modal, ListGroup } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../hook/capitalizeFirstLetter";
import "./styles.css";

function OrderModal({ order, show, close }) {
  const shippingDate = new Date(Date.parse(order.shippingDate));
  const deliveryDate = new Date(Date.parse(order.deliveryDate));

  return (
    order && (
      <>
        <Modal show={show} onHide={close} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Order ID: {order.id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup>
              <ListGroup.Item
                action
                variant="light"
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <p>
                  <span className="orderDetail">Customer: </span>
                  {order.user.firstname} {order.user.lastname}
                </p>
                <p>
                  <span className="orderDetail">Email: </span>
                  {order.user.email}
                </p>
                <p>
                  <span className="orderDetail">Phone: </span>
                  {order.user.phone}
                </p>
              </ListGroup.Item>
              <ListGroup.Item action variant="light" as="li">
                <p>
                  <span className="orderDetail">Shipping Address: </span>
                  {order.user.shippingAddress}
                </p>
              </ListGroup.Item>
              <ListGroup.Item
                action
                variant="light"
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <p>
                  <span className="orderDetail">Shipping Date: </span>
                  {shippingDate.getMonth() + 1}/{shippingDate.getDate()}/
                  {shippingDate.getFullYear()}
                </p>
                <p>
                  <span className="orderDetail">Delivery Date: </span>
                  {deliveryDate.getMonth() + 1}/{deliveryDate.getDate()}/
                  {deliveryDate.getFullYear()}
                </p>
                <p>
                  <span className="orderDetail">Status: </span>
                  {capitalizeFirstLetter(order.status)}
                </p>
              </ListGroup.Item>
              <div className="ms-2 my-2 me-auto">
                <p className="m-0 orderDetail">Products:</p>
              </div>
              {order.products.map((product) => (
                <ListGroup.Item
                  key={product.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start my-2"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{product.name}</div>${product.price}
                  </div>
                  <Badge bg="primary" pill>
                    {product.quantity}
                  </Badge>
                </ListGroup.Item>
              ))}
              <ListGroup.Item
                action
                variant="light"
                as="li"
                className="d-flex justify-content-between align-items-center"
              >
                <p>
                  <span className="orderDetail">Total Quantity: </span>
                  {order.totalQuantity}
                </p>
                <p>
                  <span className="orderDetail">Payment Method: </span>
                  {order.paymentMethod}
                </p>
                <p>
                  <span className="orderDetail">Total: </span>${order.totalAmount}
                </p>
              </ListGroup.Item>
            </ListGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  );
}

export default OrderModal;
