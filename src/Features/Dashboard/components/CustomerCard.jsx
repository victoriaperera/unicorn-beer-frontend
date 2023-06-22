import { setData } from "../adminSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect } from "react";

function Customers() {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.admin.data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        const data = response.data;
        dispatch(setData(data));
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const userCount = usersList ? usersList.length : 0;

  return (
    <>
      <table className="table table-hover align-middle text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Shipping Address</th>
            <th scope="col">Delete account</th>
          </tr>
        </thead>
        <tbody>
          {usersList && usersList.length > 0 ? (
            usersList.map((user) => (
              <tr key={user.id}>
                <td>{user.firstname}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>{user.shippingAddress}</td>
                <td>
                  <button className="btn rounded-pill btn-danger">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users to display</td>
            </tr>
          )}
        </tbody>
      </table>
      <span>Total customers: {userCount}</span>
    </>
  );
}

export default Customers;
