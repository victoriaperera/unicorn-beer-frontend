import { useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import AdminsTableContent from "./AdminsTableContent";

function Admins(){
    const admins = useSelector((state)=> state.admin.admins )
    const [admin, setAdmin] = useState("");
    console.log(admins)
    return(
        <div className="administrators-bg scrollable">
       
        <div className="d-flex justify-content-between align-content-center pb-3 me-3">
          <h2 className="text-white mb-3">Adminisrators</h2>
          <i
            className="bi bi-plus-circle fs-2 create-icon"
          ></i>
        </div>
        <table className="table table-hover text-center align-middle">
          <thead className="align-middle">
            <tr>
              <th scope="col" className="administrators-table-heading">
                Admin Id
              </th>
              <th scope="col" className="administrators-table-heading">
                Admin name
              </th>
              <th scope="col" className="administrators-table-heading">
                Admin email
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