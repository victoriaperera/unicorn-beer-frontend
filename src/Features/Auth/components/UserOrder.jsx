import format from "date-fns/format";
import Accordion from "react-bootstrap/Accordion";
import { useCheckImg } from "../../../hook/useCheckImg";

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
          <div className="row">
            <div className="col-12 col-md-6">
              <p>
                <span className="fw-bold">Customer: </span>
                <span>
                  {order.user.firstname} {order.user.lastname}
                </span>
              </p>
              <p>
                <span className="fw-bold">Shipping address: </span>
                <span>{order.user.shippingAddress}</span>
              </p>
              <p>
                <span className="fw-bold">Shipping date: </span>
                <span>{formatDate(order.shippingDate)}</span>
              </p>
              <p>
                <span className="fw-bold">Expected delivery date: </span>
                <span>{formatDate(order.deliveryDate)}</span>
              </p>
              <p>
                <span className="fw-bold">Order status: </span>
                <span className="text-capitalize">{order.status}</span>
              </p>
              <p>
                <span className="fw-bold">Payment method: </span>
                <span>{order.paymentMethod}</span>
              </p>
              <p>
                <span className="fw-bold">Order total: US$ </span>
                <span>{order.totalAmount}</span>
              </p>
            </div>
            <div className="col-12 col-md-6">
              <p className="fw-bold">Products in this order:</p>
              <div className="d-flex flex-wrap">
                {order.products.map((product) => (
                  <div key={product.id} className="">
                    <span>
                      {product.style.photos.map((photo) => {
                        if (photo.includes("Main") && photo.includes(product.container.name)) {
                          const mainPhoto = useCheckImg([photo])[0];
                          return (
                            <div key={photo} className="text-center">
                              <img
                                src={mainPhoto}
                                alt="product photo"
                                className="account-order-img"
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                    </span>
                    <div className="d-flex flex-column text-center w-100 py-2 pe-2">
                      <span>
                        <small className="text-capitalize fw-bold">
                          {product.style.name} {product.container.name}
                        </small>
                      </span>
                      <span>
                        <small>{`${product.quantity} x US$ ${product.price}`}</small>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default UserOrder;
