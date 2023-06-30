import "../styles.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import AdminsUpdate from "./AdminsUpdate";
import AdminsDelete from "./AdminsDelete";

function AdminsTableContent({ admin }) {
  
  const currentAdmin = useSelector((state) => state.admin.token);

  const [showU, setShowU] = useState(false);
  const handleShowUpdate = () => setShowU(true);
  const handleCloseUpdate = () => setShowU(false);

  const [showD, setShowD]= useState(false)
  const handleShowDelete = () => setShowD(true)
  const handleCloseDelete = () => setShowD(false)
 
  return (
    
    <tr>
      
      <AdminsUpdate show={showU} close={handleCloseUpdate} admin={admin} />
      <AdminsDelete show={showD} close={handleCloseDelete} admin={admin} />
      <td>{admin.id}</td>
      <td>{admin.name}</td>
      <td>{admin.email}</td>
      <td>
        <div className="d-flex justify-content-around">
          {admin.name !== "Admin Test" && <i className="bi bi-pencil-square fs-5 edit-icon" onClick={handleShowUpdate}></i>}
          {(currentAdmin.id !== admin.id && admin.name !== "Admin Test") ? (
            <i
              className="bi bi-trash3-fill fs-5 delete-icon"
              onClick={() => handleShowDelete()}
            ></i>
          ) : null}
        </div>
      </td>
    </tr>
  );
}

export default AdminsTableContent;
