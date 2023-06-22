import { useSelector } from "react-redux";

function Customers() {
  const users = useSelector((state) => state.admin.users);

  const userCount = users ? users.length : 0;

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
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstname} {user.lastname}
                </td>
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
