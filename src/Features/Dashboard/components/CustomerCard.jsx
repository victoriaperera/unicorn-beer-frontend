import "./styles.css";
import { useSelector } from "react-redux";

function Customers() {
  const users = useSelector((state) => state.admin.users);

  const userCount = users ? users.length : 0;

  return (
    <>
      <table className="table table-hover text-center align-middle">
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
              <tr key={user.id}>
                <td>
                  {user.firstname} {user.lastname}
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.address}</td>
                <td>
                  <i className="bi bi-trash3-fill fs-5 delete-icon"></i>
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
