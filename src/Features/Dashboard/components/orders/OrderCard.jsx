import "../styles.css";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateOrderStatus } from "../../adminSlice";
import format from "date-fns/format";
import OrderModal from "./OrderModal";

function OrderCard() {
  const orders = useSelector((state) => state.admin.orders);
  const token = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const [order, setOrder] = useState("");

  const statusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "status-confirmed";
      case "paid":
        return "status-paid";
      case "shipped":
        return "status-shipped";
      case "delivered":
        return "status-delivered";
      case "cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  const handleStatusChange = async (e, orderId) => {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${import.meta.env.VITE_BACK_URL}/orders/${orderId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          orderId: orderId,
          status: e,
        },
      });
      dispatch(updateOrderStatus(response.data)); // TODO hacerlo con la misma info que se envía a la DB
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <OrderModal order={order} show={show} close={handleClose} />
      <table className="table table-hover text-center align-middle rounded rounded-3 overflow-hidden dashboard-table">
        <thead className="align-middle">
          <tr>
            <th scope="col" className="orders-table-heading">
              Order Id
            </th>
            <th scope="col" className="orders-table-heading">
              Date
            </th>
            <th scope="col" className="orders-table-heading">
              Customer
            </th>
            <th scope="col" className="orders-table-heading">
              Products
            </th>
            <th scope="col" className="orders-table-heading">
              Total amount
            </th>
            <th scope="col" className="orders-table-heading">
              Payment method
            </th>
            <th scope="col" className="orders-table-heading">
              Status
            </th>
            <th scope="col" className="orders-table-heading">
              Order Details
            </th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                <th scope="row">{format(new Date(order.createdAt), "dd-MMMM-yyyy")}</th>
                <td>
                  {order.user.firstname} {order.user.lastname}
                </td>
                <td>{order.totalQuantity}</td>
                <td>US$ {order.totalAmount}</td>
                <td>{order.paymentMethod}</td>
                <td className={`text-capitalize ${statusColor(order.status)}`}>
                  <select
                    className={`form-select ${statusColor(order.status)}`}
                    value={order.status}
                    onChange={(e) => handleStatusChange(e.target.value, order.id)}
                  >
                    <option className={statusColor("paid")} value="paid">
                      Paid
                    </option>
                    <option className={statusColor("confirmed")} value="confirmed">
                      Confirmed
                    </option>
                    <option className={statusColor("shipped")} value="shipped">
                      Shipped
                    </option>
                    <option className={statusColor("delivered")} value="delivered">
                      Delivered
                    </option>
                    <option className={statusColor("cancelled")} value="cancelled">
                      Cancelled
                    </option>
                  </select>
                </td>
                <td>
                  <i
                    className="bi bi-bullseye show-icon"
                    onClick={() => {
                      setOrder(order);
                      handleShow();
                    }}
                  ></i>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">There are no orders to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default OrderCard;
