import { setData } from "../adminSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";

function OrderCard() {
  const dispatch = useDispatch();
  const orderList = useSelector((state) => state.admin.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        const data = response.data;
        dispatch(setData(response.data));
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <table className="table table-hover align-middle text-center">
        <thead className="table-header">
          <tr>
            <th scope="col" className="table-heading">
              #
            </th>
            <th scope="col" className="table-heading">
              User
            </th>
            <th scope="col" className="table-heading">
              Products
            </th>
            <th scope="col" className="table-heading">
              Total amount
            </th>
            <th scope="col" className="table-heading">
              Payment method
            </th>
            <th scope="col" className="table-heading">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {orderList && orderList.length > 0 ? (
            orderList.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                {/* <td>{order.user.firstname}</td> */}
                {/* <td>{order.products}</td> */}
                <td>{order.totalAmount}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No orders to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default OrderCard;
