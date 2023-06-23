import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteStyle } from "../adminSlice";

function CategoryDelete({ show, close, style }) {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleDelete = async (styleId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/styles`,
        // headers:{
        //   Authorization: `Bearer ${token}`
        // },
        data: { styleId },
      });
      dispatch(deleteStyle(styleId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={show} onHide={close} size="md" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className="text-center">Do you want to DELETE this category?</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="text-center">{style.name}</h3>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button
          onClick={() => {
            handleDelete(style.id);
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

export default CategoryDelete;
