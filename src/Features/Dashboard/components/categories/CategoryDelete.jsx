import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { deleteStyle, setToggleDeleteStyle } from "../../adminSlice";

function CategoryDelete() {
  const admin = useSelector((state) => state.admin.token);
  const style = useSelector((state) => state.admin.style);
  const toggleDelete = useSelector((state) => state.admin.toggleDeleteStyle);
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_BACK_URL}/styles`,
        headers: {
          Authorization: `Bearer ${admin.token}`,
        },
        data: { style: style.id },
      });
      dispatch(deleteStyle(style.id));
      dispatch(setToggleDeleteStyle(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      show={toggleDelete}
      onHide={() => dispatch(setToggleDeleteStyle(false))}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
    >
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
            handleDelete(style._id);
          }}
          variant="danger"
        >
          Delete
        </Button>
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryDelete;
