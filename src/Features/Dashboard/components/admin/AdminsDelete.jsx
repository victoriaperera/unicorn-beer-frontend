import "../styles.css"
import { deleteAdmin } from "../../adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function AdminsDelete({admin, close, show}){
    const token = useSelector((state)=> state.admin.token.token)
    const dispatch = useDispatch();
    const handleDelete = async (adminId) => {
      try {
        await axios({
          method: "DELETE",
          url: `${import.meta.env.VITE_BACK_URL}/admin`,
          headers: {
            Authorization: `Bearer ${token}`,
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
    return(
    <Modal
      show={show}
      onHide={close}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="text-center">Do you want to DELETE this Admin?</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center">{admin.name}</h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          onClick={() => {
            handleDelete(admin.id);
          }}
          variant="danger"
        >
          Delete
        </Button>
        <Button
        onClick={()=> close()}
        >Close
        </Button>
      </Modal.Footer>
    </Modal>
    )
}

export default AdminsDelete;

