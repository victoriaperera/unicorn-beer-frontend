import "./styles.css";
import format from "date-fns/format";
import { useSelector } from "react-redux";
import React, { useState } from "react";

function OrderCard() {
  const orders = useSelector((state) => state.admin.orders);

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

  return (
    <>
      <table className="table table-hover text-center align-middle">
        <thead className="align-middle">
          <tr>
            <th scope="col" className="orders-table-heading">
              Order Nº
            </th>
            <th scope="col" className="orders-table-heading">
              User
            </th>
            <th scope="col" className="orders-table-heading">
              Date
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
                <td className={`text-capitalize ${statusColor(order.status)}`}>{order.status}</td>
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
