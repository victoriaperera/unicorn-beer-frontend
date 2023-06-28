import "./styles.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteAdmin } from "../adminSlice";

function AdminsTableContent({admin}){
    const token = useSelector((state) => state.admin.token.token)
    const dispatch = useDispatch();

    const handleDelete = async (adminId) => {
        try{
            await axios({
                method: "DELETE",
                url: `${import.meta.env.VITE_BACK_URL}/admin`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data:{
                    adminId
                }
            })
            dispatch(deleteAdmin(adminId))
        }catch(err){
            console.log(err)
        }

    }
    return(
        <tr>
            <td>
                {admin.id}
            </td>
            <td>
                {admin.name}
            </td>
            <td>
                {admin.email}
            </td>
            <td>
                <div className="d-flex justify-content-around">
                    <i className="bi bi-pencil-square fs-5 edit-icon"></i>
                    <i 
                    className="bi bi-trash3-fill fs-5 delete-icon"
                    onClick={()=> handleDelete(admin.id)}
                    >
                    </i>
                </div>
            </td>
        </tr>
    )
}

export default AdminsTableContent;