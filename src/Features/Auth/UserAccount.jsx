import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserOrder from "./components/UserOrder";
import OutOfScopeModal from "../../Common/components/OutOfScopeModal";
import "./styles.css";

function UserAccount() {
  const user = useSelector((state) => state.user);
  const orders = user.orders;

  const [showModal, setShowModal] = useState(false);

  const handleEditPayment = () => {
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(orders);

  return (
    <div className="graphite-background-account d-flex justify-content-center align-items-center">
      <div className="container account-container">
        <div className="d-flex justify-content-center align-items-center mb-5">
          <img
            src="src/assets/icons/Unicorn-beer-icon-3.svg"
            alt="unicorn icon"
            className="checkout-logo-icon me-3"
          />
          <h2 className="m-0">
            Welcome, {user.firstname} {user.lastname}
          </h2>
        </div>
        <div className="main-account">
          <h3 className="mb-3 heading-orange">Account details</h3>
          <div className="row">
            <div className="col-12 col-md-6 pe-5">
              <form onSubmit={handleSubmit}>
                <h4>Shipping & billing information</h4>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    <small>Shipping address:</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    defaultValue={user.shippingAddress}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    <small>Billing address:</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    defaultValue={user.address}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    <small>Phone number:</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    defaultValue={user.phone}
                  />
                </div>
                <button type="submit" className="btn btn-sm rounded-pill btn-outline-success mt-3">
                  Save changes
                </button>
              </form>
            </div>
            <div className="col-12 col-md-6 pe-3">
              <h4>My payment methods</h4>
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  <small>Type:</small>
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  value="Credit Card"
                  readOnly
                  disabled
                />
              </div>
              <div className="d-flex mb-2">
                <div className="me-2 w-100">
                  <label htmlFor="" className="form-label">
                    <small>Card number:</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value="9876-5432-1234-5678"
                    readOnly
                    disabled
                  />
                </div>
                <div className="w-100">
                  <label htmlFor="" className="form-label">
                    <small>Card holder:</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value={`${user.firstname} ${user.lastname}`}
                    readOnly
                    disabled
                  />
                </div>
              </div>
              <div className="d-flex mb-2">
                <div className="me-2 w-100">
                  <label htmlFor="" className="form-label">
                    <small>Expiration date:</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value="MM/AAAA"
                    readOnly
                    disabled
                  />
                </div>
                <div className="w-100">
                  <label htmlFor="" className="form-label">
                    <small>CVV</small>
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value="123"
                    readOnly
                    disabled
                  />
                </div>
              </div>
              <button
                type="button"
                className="btn btn-sm rounded-pill btn-outline-primary mt-3"
                onClick={handleEditPayment}
              >
                Edit payment
              </button>
            </div>
          </div>
        </div>
        <div className="main-account">
          <h3 className="mb-3 heading-orange">Order history</h3>
          {orders && orders.length > 0 ? (
            orders.map((order) => <UserOrder key={order.id} order={order} />)
          ) : (
            <span>There are no orders yet. Lets shop!</span>
          )}
        </div>
        {showModal && <OutOfScopeModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}

export default UserAccount;
