import { Badge, Button, Modal, ListGroup } from "react-bootstrap";
import "./styles.css"

function OrderModal({order, show, close}) {

  return order  && (
        <>
        <Modal show={show} onHide={close} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Nro: {order.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
                <ListGroup.Item action variant="light" as="li">
                <span className="orderDetail">Customer:</span> {order.user.firstname} {order.user.lastname}  <span className="orderDetail">Email:</span> {order.user.email} <span className="orderDetail">Phone:</span>: {order.user.phone}
                </ListGroup.Item>
                <ListGroup.Item action variant="light" as="li">
                <span className="orderDetail">Shipping Addres:</span> {order.user.shippingAddress}
                </ListGroup.Item>
                <div className="ms-2 my-2 me-auto">
                    <p className="m-0 orderDetail">Products:</p>
                </div>
                {order.products.map(product => 
                 <ListGroup.Item
                 as="li"
                 className="d-flex justify-content-between align-items-start"
                >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{product.name}</div>
                 ${product.price}
                </div>
                 <Badge bg="primary" pill>
                 {product.quantity}
                 </Badge>
             </ListGroup.Item>
                    )}
               <ListGroup.Item action variant="light" as="li">
                <span className="orderDetail">Total Quantity:</span> {order.totalQuantity} <span className="orderDetail">Payment Method:</span> {order.paymentMethod} <span className="orderDetail">Total:</span> ${order.totalAmount}
               </ListGroup.Item>
               <ListGroup.Item action variant="light" as="li">
                <span className="orderDetail">Shipping Date:</span> {order.shippingDate}  <span className="orderDetail">Delivery Date:</span> {order.deliveryDate}
                </ListGroup.Item>
                <ListGroup.Item action variant="light" as="li">
                    <span className="orderDetail">{order.status}</span>
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
}

export default OrderModal;