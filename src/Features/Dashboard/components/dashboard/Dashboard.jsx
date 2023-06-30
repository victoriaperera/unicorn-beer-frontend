import "../styles.css";
import format from "date-fns/format";
import LineChart from "./LineChart";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Dashboard({ handleSidebarClick }) {
  const categories = useSelector((state) => state.admin.styles);

  const orders = useSelector((state) => state.admin.orders);

  const totalSales = orders.reduce((total, order) => total + order.totalAmount, 0);
  const totalOrders = orders.length;

  const [averagePurchaseValue, setAveragePurchaseValue] = useState(0);

  useEffect(() => {
    const calculateAveragePurchaseValue = () => {
      const totalSales = orders.reduce((total, order) => total + order.totalAmount, 0);

      if (totalOrders > 0) {
        const averageValue = totalSales / totalOrders;
        setAveragePurchaseValue(averageValue);
      } else {
        setAveragePurchaseValue(0);
      }
    };

    calculateAveragePurchaseValue();
  }, [orders]);

  return (
    <div className="dashboard-bg scrollable">
      <div className="row">
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header py-3">
              <h5 className="m-0">Sales</h5>
            </div>
            <div className="card-body fs-3 pt-5">
              <span>US$ {totalSales.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header py-3">
              <h5 className="m-0">Average Purchase Value</h5>
            </div>
            <div className="card-body fs-3 pt-5">
              <span>US$ {averagePurchaseValue.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header py-3">
              <h5 className="m-0">Bestselling</h5>
            </div>
            <div className="card-body fs-3">
              <img src="./src/assets/img/BLONDE_Bottle.png" className="w-25" alt="" />
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header py-3">
              <h5 className="m-0">Categories</h5>
            </div>
            <div className="card-body">
              {categories && categories.length > 0 ? (
                <ul className="categories-list">
                  {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No categories available for display.</p>
              )}
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4 dashboard-line-chart">
            <div className="card-body text-center p-0">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card mb-4 dashboard-orders">
            <div className="card-header">
              Fulfilled Orders{" "}
              <i
                className="bi bi-arrow-right-circle-fill"
                onClick={() => handleSidebarClick("orders")}
              ></i>
            </div>
            <div className="card-body">
              <table className="table table-sm text-center">
                <thead>
                  <tr>
                    <th scope="col">Nº</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders && orders.length > 0 ? (
                    orders.slice(0, 7).map((order) => (
                      <tr key={order.id}>
                        <th scope="row">{order.id}</th>
                        <th scope="row">{format(new Date(order.createdAt), "dd-MMMM-yyyy")}</th>
                        <td>US$ {order.totalAmount}</td>
                        <td className="text-capitalize">{order.status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">There are no orders to display.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
