import "./styles.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUserData } from "./userSlice";
import { setOrder } from "../../redux/orderSlice";
import PageTitle from "../../Common/components/PageTitle";
import UserOrder from "./components/UserOrder";
import OutOfScopeModal from "../../Common/components/OutOfScopeModal";
import unicornLogo from "../../assets/icons/Unicorn-beer-icon-3.svg";

function UserAccount() {
  const user = useSelector((state) => state.user);
  const orders = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const pageTitle = "My account";

  const [shippingAddress, setShippingAddress] = useState(user.shippingAddress);
  const [billingAddress, setBillingAddress] = useState(user.address);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);

  const [showModal, setShowModal] = useState(false);

  const handleEditPayment = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_BACK_URL}/users/${user.id}`,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
        data: {
          shippingAddress: shippingAddress,
          address: billingAddress,
          phone: phoneNumber,
        },
      });

      dispatch(updateUserData({ user: response.data }));
      toast.success("Changes saved successfully!");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_BACK_URL}/users/orders/${user.id}`,
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        dispatch(setOrder(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  return (
    <>
      <PageTitle title={pageTitle} />
      <div className="graphite-background-account d-flex justify-content-center align-items-center">
        <div className="container account-container">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <img src={unicornLogo} alt="Unicorn logo" className="checkout-logo-icon me-3" />
            <h2 className="m-0">
              Welcome, {user.firstname} {user.lastname}
            </h2>
          </div>
          <div className="main-account rounded">
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
                      value={shippingAddress}
                      onChange={(e) => setShippingAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      <small>Billing address:</small>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="" className="form-label">
                      <small>Phone number:</small>
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-sm rounded-pill btn-outline-success my-3"
                  >
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
          <div className="main-account rounded">
            <h3 className="mb-3 heading-orange">Order history</h3>
            {orders && orders.length > 0 ? (
              orders.map((order) => <UserOrder key={order.id} order={order} />)
            ) : (
              <span className="fs-5">
                There are no orders yet. <Link to={"/shop"}>Let's shop!</Link>
              </span>
            )}
          </div>
          {showModal && <OutOfScopeModal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </>
  );
}

export default UserAccount;
