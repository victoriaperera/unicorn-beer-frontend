import "../styles.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import CustomerDelete from "./CustomerDelete";

function Customers() {
  const users = useSelector((state) => state.admin.users);
  const [user, setUser] = useState("");
  const userCount = users ? users.length : 0;

  const [showDelete, setShowDelete] = useState(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleCloseDelete = () => setShowDelete(false);

  return (
    <>
      <CustomerDelete show={showDelete} close={handleCloseDelete} user={user} />
      <table className="table table-hover text-center align-middle rounded rounded-3 overflow-hidden dashboard-table">
        <thead className="align-middle">
          <tr>
            <th scope="col" className="customers-table-heading">
              Name
            </th>
            <th scope="col" className="customers-table-heading">
              Email
            </th>
            <th scope="col" className="customers-table-heading">
              Phone
            </th>
            <th scope="col" className="customers-table-heading">
              Address
            </th>
            <th scope="col" className="customers-table-heading">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <i
                    className="bi bi-trash3-fill fs-5 delete-icon"
                    type="submit"
                    onClick={() => {
                      handleShowDelete();
                      setUser(user);
                    }}
                  ></i>
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
      <span className="text-white">Total customers: {userCount}</span>
    </>
  );
}

export default Customers;
