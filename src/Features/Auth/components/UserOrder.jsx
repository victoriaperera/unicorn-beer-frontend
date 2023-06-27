import React from "react";
import format from "date-fns/format";
import Accordion from "react-bootstrap/Accordion";

function UserOrder({ order }) {
  const formatDate = (date) => {
    return format(new Date(date), "dd-MMMM-yyyy");
  };

  return (
    <Accordion>
      <Accordion.Item eventKey={order.id.toString()} className="mb-3">
        <Accordion.Header>
          <h5>
            Order: {order.id} | {formatDate(order.createdAt)}
          </h5>
        </Accordion.Header>
        <Accordion.Body>
          <div className="d-flex flex-column">
            <span>
              Customer: {order.user.firstname} {order.user.lastname}
            </span>
            <span>Shipping address: {order.user.shippingAddress}</span>
            <span>Shipping date: </span>
            <span>Delivery date: </span>
          </div>
          <span>Expected delivery date: {formatDate(order.deliveryDate)}</span>
          <div>
            {order.products.map((product) => (
              <div key={product.id}>
                <span>{product.name}</span>
                <span>Quantity: {product.quantity}</span>
                <span>Price: US$ {product.price}</span>
              </div>
            ))}
          </div>
          <span>Total: US$ {order.totalAmount}</span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default UserOrder;
