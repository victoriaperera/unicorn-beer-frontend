import "./styles.css";
import format from "date-fns/format";
import LineChart from "./LineChart";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

function Dashboard({ containers, handleSidebarClick }) {
  const products = useSelector((state) => state.admin.products);
  const categories = useSelector((state) => state.admin.styles);
  const [dashboardContainers, setDashboardContainers] = useState(containers);

  const orders = useSelector((state) => state.admin.orders);
  const customers = useSelector((state) => state.admin.users);

  const totalSales = orders.reduce((total, order) => total + order.totalAmount, 0);
  const totalOrders = orders.length;
  const totalCustomers = customers.length;

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

  useEffect(() => {
    setDashboardContainers(containers);
  }, [containers]);

  return (
    <div className="dashboard-bg scrollable">
      <div className="row">
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header">Sales</div>
            <div className="card-body fs-3">
              <span>US$ {totalSales}</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header">Average Purchase Value</div>
            <div className="card-body fs-3">
              <span>US$ {averagePurchaseValue.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card mb-4 dashboard-totals">
            <div className="card-header">Bestselling Products</div>
            <div className="card-body fs-3">
              <span>IPA Can / Pilsener Bottle</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="card mb-4">
            <div className="card-header">Categories</div>
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
