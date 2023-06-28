import "./styles.css";

function AdminsTableContent({admin, key}){
    
    return(
        <tr key={key}>
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
                    <i class="bi bi-pencil-square fs-5 edit-icon"></i>
                    <i class="bi bi-trash3-fill fs-5 delete-icon"></i>
                </div>
            </td>
        </tr>
    )
}

export default AdminsTableContent;