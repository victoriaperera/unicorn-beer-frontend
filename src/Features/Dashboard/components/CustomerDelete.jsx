import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteUser } from "../adminSlice";

function CustomerDelete({ show, close, user }) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleDelete = async (userId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/users`,
        // headers:{
        //   Authorization: `Bearer ${token}`
        // },
        data: { userId },
      });
      dispatch(deleteStyle(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={close} size="md" aria-labelledby="delete-customer-modal">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="text-center">Do you want to delete this CUSTOMER?</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center">
          {user.firstname} {user.lastname}
        </h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          onClick={() => {
            handleDelete(user.id);
            close();
          }}
          variant="danger"
        >
          Delete
        </Button>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomerDelete;
