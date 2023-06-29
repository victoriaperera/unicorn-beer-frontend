import "../styles.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteAdmin } from "../../adminSlice";
import AdminsUpdate from "./AdminsUpdate";

function AdminsTableContent({ admin }) {
  const currentAdmin = useSelector((state) => state.admin.token);

  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShowUpdate = () => setShow(true);
  const handleCloseUpdate = () => setShow(false);

  const handleDelete = async (adminId) => {
    try {
      await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/admin`,
        headers: {
          Authorization: `Bearer ${currentAdmin.token}`,
        },
        data: {
          adminId,
        },
      });
      dispatch(deleteAdmin(adminId));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <tr>
      <AdminsUpdate show={show} close={handleCloseUpdate} admin={admin} />
      <td>{admin.id}</td>
      <td>{admin.name}</td>
      <td>{admin.email}</td>
      <td>
        <div className="d-flex justify-content-around">
          <i className="bi bi-pencil-square fs-5 edit-icon" onClick={handleShowUpdate}></i>
          {currentAdmin.id !== admin.id ? (
            <i
              className="bi bi-trash3-fill fs-5 delete-icon"
              onClick={() => handleDelete(admin.id)}
            ></i>
          ) : null}
        </div>
      </td>
    </tr>
  );
}

export default AdminsTableContent;
