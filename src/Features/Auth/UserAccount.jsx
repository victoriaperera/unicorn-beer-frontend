import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserOrder from "./components/UserOrder";
import "./styles.css";

function UserAccount() {
  const user = useSelector((state) => state.user);
  const orders = user.orders;

  console.log(orders);

  return (
    <div className="graphite-background-account d-flex justify-content-center align-items-center">
      <div className="container account-container">
        <div className="d-flex justify-content-center align-items-center my-5">
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
          <h3 className="mb-3">Account details</h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <h4>Shipping information</h4>
              <form action="">
                <label htmlFor="">Shipping address:</label>
                <input type="text" defaultValue={user.shippingAddress} />
              </form>
            </div>
            <div className="col-12 col-md-6">
              <h4>Billing information</h4>
            </div>
          </div>
        </div>
        <div className="main-account">
          <h3 className="mb-3">Order history</h3>
          {orders && orders.length > 0 ? (
            orders.map((order) => <UserOrder key={order.id} order={order} />)
          ) : (
            <span>There are no orders yet. Lets shop!</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
