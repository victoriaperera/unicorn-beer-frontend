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
                Actions
            </td>
        </tr>
    )
}

export default AdminsTableContent;