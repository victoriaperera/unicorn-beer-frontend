import "../styles.css";
import React from "react";

function Orders() {
  return (
    <div className="orders-bg">
      <table class="table table-hover align-middle text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Products</th>
            <th scope="col">Total amount</th>
            <th scope="col">Payment method</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark Walberg</td>
            <td>APA bottle</td>
            <td>$$</td>
            <td>Paypal</td>
            <td>Paid</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Dakota Johnson</td>
            <td>IPA bottle</td>
            <td>$$</td>
            <td>Visa</td>
            <td>Delivered</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Amy Adams</td>
            <td>Blond Keg</td>
            <td>$$</td>
            <td>Paypal</td>
            <td>Paid</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Mark Walberg</td>
            <td>APA bottle</td>
            <td>$$</td>
            <td>Paypal</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Amy Adams</td>
            <td>Blond Keg</td>
            <td>$$</td>
            <td>OCA te sirve</td>
            <td>Paid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
