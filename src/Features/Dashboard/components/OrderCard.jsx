
import {  useSelector } from "react-redux";

function OrderCard() {
  const orders = useSelector((state) => state.admin.orders);

  return (
    <>
      <table className="table table-hover align-middle text-center">
        <thead className="table-header">
          <tr>
            <th scope="col" className="table-heading">
              Order Id
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
          {orders && orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                <td>
                  {order.user.firstname} {order.user.lastname}
                </td>
                <td>{order.totalQuantity}</td>
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
