import { useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AdminsTableContent from "./AdminsTableContent";
import AdminsCreate from "./AdminsCreate"
function Admins(){
    const admins = useSelector((state)=> state.admin.admins )
    const [admin, setAdmin] = useState("");

    const [show, setShow] = useState(false);
    const handleShowCreate = ()=> {setShow(true)}
    const handleCloseCreate = ()=> {setShow(false)}
    
    return(
        <div className="administrators-bg scrollable">
            <AdminsCreate show={show} close={handleCloseCreate}/>
        <div className="d-flex justify-content-between align-content-center pb-3 me-3">
          <h2 className="text-white mb-3">Adminisrators</h2>
          <i
            className="bi bi-plus-circle fs-2 create-icon"
            onClick={handleShowCreate}
          ></i>
        </div>
        <table className="table table-hover text-center align-middle">
          <thead className="align-middle">
            <tr>
              <th scope="col" className="administrators-table-heading">
                Admin Id
              </th>
              <th scope="col" className="administrators-table-heading">
                Admin Name
              </th>
              <th scope="col" className="administrators-table-heading">
                Admin Email
              </th>
              <th scope="col" className="administrators-table-heading">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {admins.map( admin =>
               <AdminsTableContent admin={admin} key={admin.id}/>
            )}
          </tbody>
        </table>
      </div>
    )
}

export default Admins;