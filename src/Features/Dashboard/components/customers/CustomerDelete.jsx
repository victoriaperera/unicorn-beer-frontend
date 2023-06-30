import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteUser } from "../../adminSlice";

function CustomerDelete({ show, close, user }) {
  const admin = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    console.log(user);
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/users`,
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
        data: { userId: user._id },
      });
      dispatch(deleteUser(user._id));
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
            handleDelete();
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
