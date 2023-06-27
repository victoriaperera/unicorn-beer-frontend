import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import format from "date-fns/format";

import { updateOrderStatus } from "../adminSlice";
import "./styles.css";

function OrderCard() {
  const orders = useSelector((state) => state.admin.orders);
  const token = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

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
      <table className="table table-hover text-center align-middle">
        <thead className="align-middle">
          <tr>
            <th scope="col" className="orders-table-heading">
              Order Nº
            </th>
            <th scope="col" className="orders-table-heading">
              Date
            </th>
            <th scope="col" className="orders-table-heading">
              User
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
                    className="form-select"
                    value={order.status}
                    onChange={(e) => handleStatusChange(e.target.value, order.id)}
                  >
                    <option value="not_paid">Not Paid</option>
                    <option value="paid">Paid</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Thera are no orders to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default OrderCard;
