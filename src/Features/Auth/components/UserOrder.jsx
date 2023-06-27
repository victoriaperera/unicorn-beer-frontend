import React from "react";
import format from "date-fns/format";

function UserOrder({ order }) {
  return (
    <div className="d-flex flex-column mb-3 user-order">
      <h5>
        Order - {order.id} - {format(new Date(order.createdAt), "dd-MMMM-yyyy")}
      </h5>
      <span>Expected delivery date: {order.deliveryDate}</span>
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
    </div>
  );
}

export default UserOrder;
